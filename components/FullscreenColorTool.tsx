"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BrightnessSlider } from "@/components/BrightnessSlider";
import { ColorPicker } from "@/components/ColorPicker";
import { TimerOverlay } from "@/components/TimerOverlay";
import { presetColors } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type Mode = "color" | "dead-pixel" | "monitor";
type MonitorPattern = "solid" | "gradient" | "grid" | "checkerboard" | "text" | "backlight" | "uniformity";

type Props = {
  initialColor?: string;
  presets?: Array<{ name: string; hex: string }>;
  showRgb?: boolean;
  showHex?: boolean;
  showBrightness?: boolean;
  showTimer?: boolean;
  mode?: Mode;
  title?: string;
  allowDownload?: boolean;
};

const testColors = [
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#000000" },
  { name: "Red", hex: "#ff0000" },
  { name: "Green", hex: "#00b050" },
  { name: "Blue", hex: "#0057ff" },
  { name: "Yellow", hex: "#fff200" },
  { name: "Cyan", hex: "#00ffff" },
  { name: "Magenta", hex: "#ff00ff" },
  { name: "Gray", hex: "#808080" }
];

export function FullscreenColorTool({
  initialColor = "#ffffff",
  presets = presetColors,
  showRgb = true,
  showHex = true,
  showBrightness = true,
  showTimer = true,
  mode = "color",
  title = "Screen tool",
  allowDownload = false
}: Props) {
  const [color, setColor] = useState(normalizeHex(initialColor));
  const [brightness, setBrightness] = useState(100);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [activeTest, setActiveTest] = useState(0);
  const [autoCycle, setAutoCycle] = useState(false);
  const [cycleSeconds, setCycleSeconds] = useState(2);
  const [monitorPattern, setMonitorPattern] = useState<MonitorPattern>("solid");
  const [savedColor, setSavedColor] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const rgb = useMemo(() => hexToRgb(color), [color]);
  const stageColor = mode === "dead-pixel" ? testColors[activeTest].hex : color;
  const stageStyle = useMemo(() => getStageStyle(stageColor, brightness, mode, monitorPattern), [stageColor, brightness, mode, monitorPattern]);

  const selectColor = useCallback((hex: string, name = "custom") => {
    const next = normalizeHex(hex);
    setColor(next);
    trackEvent("color_selected", { color: next, name });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlColor = params.get("color");
    if (urlColor) selectColor(urlColor);
    const stored = window.localStorage.getItem("screentools.savedColor");
    if (stored) setSavedColor(stored);
  }, [selectColor]);

  useEffect(() => {
    const onFullscreenChange = () => {
      const active = document.fullscreenElement === stageRef.current;
      setIsFullscreen(active);
      setControlsVisible(!active);
      trackEvent(active ? "fullscreen_start" : "fullscreen_exit");
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = fallbackFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [fallbackFullscreen]);

  useEffect(() => {
    if (!isFullscreen || !controlsVisible) return;
    const id = window.setTimeout(() => setControlsVisible(false), 3000);
    return () => window.clearTimeout(id);
  }, [controlsVisible, isFullscreen]);

  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) {
      void document.exitFullscreen?.();
      setFallbackFullscreen(false);
      setIsFullscreen(false);
      setControlsVisible(true);
      setSecondsLeft(null);
      return;
    }
    const id = window.setTimeout(() => setSecondsLeft((value) => (value === null ? null : value - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [secondsLeft]);

  useEffect(() => {
    if (!autoCycle) return;
    const id = window.setInterval(() => setActiveTest((index) => (index + 1) % testColors.length), cycleSeconds * 1000);
    return () => window.clearInterval(id);
  }, [autoCycle, cycleSeconds]);

  const nextColor = useCallback(() => setActiveTest((index) => (index + 1) % testColors.length), []);
  const previousColor = useCallback(() => setActiveTest((index) => (index - 1 + testColors.length) % testColors.length), []);
  const resetTool = useCallback(() => {
    setColor(normalizeHex(initialColor));
    setBrightness(100);
    setTimerMinutes(0);
    setSecondsLeft(null);
    setAutoCycle(false);
    setActiveTest(0);
    setMonitorPattern("solid");
  }, [initialColor]);

  const enterFullscreen = useCallback(async () => {
    if (timerMinutes > 0) {
      setSecondsLeft(timerMinutes * 60);
      trackEvent("timer_started", { minutes: timerMinutes });
    }
    if (stageRef.current?.requestFullscreen) {
      try {
        await stageRef.current.requestFullscreen();
        setControlsVisible(true);
        return;
      } catch {
        // Some webviews expose the API but reject it. Use an in-page fallback.
      }
    }
    {
      setFallbackFullscreen(true);
      setIsFullscreen(true);
      setControlsVisible(true);
      trackEvent("fullscreen_start");
    }
  }, [timerMinutes]);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    }
    if (fallbackFullscreen) {
      setFallbackFullscreen(false);
      setIsFullscreen(false);
      setControlsVisible(true);
      trackEvent("fullscreen_exit");
    }
  }, [fallbackFullscreen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
      if (event.key.toLowerCase() === "f") void enterFullscreen();
      if (event.key === " ") {
        event.preventDefault();
        setControlsVisible((value) => !value);
      }
      if (event.key === "ArrowRight") nextColor();
      if (event.key === "ArrowLeft") previousColor();
      if (event.key === "Escape" && fallbackFullscreen) void exitFullscreen();
      const preset = presetColors.find((item) => item.key === event.key);
      if (preset) {
        if (mode === "dead-pixel") {
          const index = testColors.findIndex((item) => item.name === preset.name);
          if (index >= 0) setActiveTest(index);
        } else {
          selectColor(preset.hex, preset.name);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enterFullscreen, exitFullscreen, fallbackFullscreen, mode, nextColor, previousColor, selectColor]);

  function savePreset() {
    window.localStorage.setItem("screentools.savedColor", color);
    setSavedColor(color);
  }

  function handleStageClick() {
    if (!isFullscreen) return;
    if (mode === "dead-pixel") {
      nextColor();
      return;
    }
    setControlsVisible((value) => !value);
  }

  function handleTouchEnd(clientX: number) {
    if (!isFullscreen || mode !== "dead-pixel" || touchStartX.current === null) return;
    const diff = clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) < 40) return;
    if (diff < 0) nextColor();
    if (diff > 0) previousColor();
  }

  async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("color", color.replace("#", ""));
    try {
      await navigator.clipboard?.writeText(url.toString());
      setCopyStatus("Link copied.");
    } catch {
      const copied = copyWithFallback(url.toString());
      setCopyStatus(copied ? "Link copied." : "Copy unavailable. Use the URL in your address bar.");
    }
    trackEvent("copy_link_clicked", { color });
  }

  function downloadPng() {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 800;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const link = document.createElement("a");
    link.download = `${color.replace("#", "")}-screen.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    trackEvent("download_clicked", { color });
  }

  return (
    <section className="tool-panel overflow-hidden rounded" aria-label={title}>
      <div
        ref={stageRef}
        className={`${fallbackFullscreen ? "fixed inset-0 z-50 min-h-screen" : "relative min-h-[48vh]"} flex items-center justify-center overflow-hidden`}
        style={stageStyle}
        onMouseMove={() => isFullscreen && setControlsVisible(true)}
        onClick={handleStageClick}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        {mode === "monitor" && monitorPattern === "text" ? (
          <div className="space-y-4 bg-white/80 p-6 text-center text-black">
            <p className="text-4xl font-bold">Sharp text test</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog. 1234567890</p>
            <p className="text-xs">Small text should stay clear and even.</p>
          </div>
        ) : null}
        {mode === "dead-pixel" ? <span className="sr-only">Current test color: {testColors[activeTest].name}</span> : null}
        {mode === "dead-pixel" && !isFullscreen ? (
          <div className="absolute left-3 top-3 rounded bg-black/70 px-3 py-2 text-sm font-bold text-white">{testColors[activeTest].name}</div>
        ) : null}
        <TimerOverlay secondsLeft={secondsLeft} />
        {isFullscreen && controlsVisible ? (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded bg-black/70 p-2 text-white" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={previousColor} className="rounded px-3 py-2 hover:bg-white/20">Previous</button>
            <button type="button" onClick={() => setControlsVisible(false)} className="rounded px-3 py-2 hover:bg-white/20">Hide</button>
            <button type="button" onClick={nextColor} className="rounded px-3 py-2 hover:bg-white/20">Next</button>
            <button type="button" onClick={exitFullscreen} className="rounded px-3 py-2 hover:bg-white/20">Exit</button>
          </div>
        ) : null}
        {isFullscreen && !controlsVisible ? (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded bg-black/70 p-2 text-white" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setControlsVisible(true)} className="rounded px-3 py-2 text-sm font-semibold hover:bg-white/20">
              Show controls
            </button>
            <button type="button" onClick={exitFullscreen} className="rounded px-3 py-2 text-sm font-semibold hover:bg-white/20">
              Exit
            </button>
          </div>
        ) : null}
      </div>
      <div className="grid gap-5 p-4 sm:p-5">
        {mode === "monitor" ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {(["solid", "gradient", "grid", "checkerboard", "text", "backlight", "uniformity"] as const).map((pattern) => (
              <button key={pattern} type="button" onClick={() => setMonitorPattern(pattern)} className="min-h-11 rounded border border-line bg-white px-2 py-2 text-sm font-semibold capitalize hover:border-gray-500">
                {pattern === "text" ? "Text sharpness" : pattern}
              </button>
            ))}
          </div>
        ) : null}
        {mode === "dead-pixel" ? (
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={previousColor} className="min-h-11 rounded bg-ink px-4 py-2 text-sm font-semibold text-white">Previous color</button>
              <button type="button" onClick={nextColor} className="min-h-11 rounded bg-ink px-4 py-2 text-sm font-semibold text-white">Next color</button>
              <button type="button" onClick={() => { setAutoCycle(true); trackEvent("auto_cycle_started", { seconds: cycleSeconds }); }} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Start auto-cycle</button>
              <button type="button" onClick={() => setAutoCycle(false)} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Pause auto-cycle</button>
            </div>
            <label className="grid gap-1 text-sm font-semibold sm:max-w-xs">
              Cycle interval
              <select value={cycleSeconds} onChange={(event) => setCycleSeconds(Number(event.target.value))} className="min-h-11 rounded border border-line px-3">
                <option value="1">1 second</option>
                <option value="2">2 seconds</option>
                <option value="3">3 seconds</option>
                <option value="5">5 seconds</option>
              </select>
            </label>
          </div>
        ) : (
          <ColorPicker
            color={showHex ? color : color}
            rgb={rgb}
            presets={presets}
            onPreset={selectColor}
            onHexChange={selectColor}
            onRgbChange={(value) => selectColor(rgbToHex(value.r, value.g, value.b))}
          />
        )}
        {showBrightness ? <BrightnessSlider value={brightness} onChange={setBrightness} /> : null}
        {showBrightness && brightness >= 90 ? <p className="rounded bg-yellow-50 p-3 text-sm text-yellow-900">High brightness can feel harsh in a dark room. Lower brightness if your eyes feel strained.</p> : null}
        {showTimer ? (
          <label className="grid gap-1 text-sm font-semibold sm:max-w-xs">
            Timer
            <select value={timerMinutes} onChange={(event) => setTimerMinutes(Number(event.target.value))} className="min-h-11 rounded border border-line px-3">
              <option value="0">No timer</option>
              <option value="1">1 minute</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          </label>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={enterFullscreen} className="min-h-12 rounded bg-ink px-6 py-3 text-base font-bold text-white">Go Full Screen</button>
          <button type="button" onClick={() => setControlsVisible(false)} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Hide controls</button>
          <button type="button" onClick={copyLink} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Copy share link</button>
          {mode !== "dead-pixel" && savedColor ? <button type="button" onClick={() => selectColor(savedColor, "saved")} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Use saved color</button> : null}
          {mode !== "dead-pixel" ? <button type="button" onClick={savePreset} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Save preset</button> : null}
          <button type="button" onClick={resetTool} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Reset</button>
          {allowDownload ? <button type="button" onClick={downloadPng} className="min-h-11 rounded border border-line bg-white px-4 py-2 text-sm font-semibold">Download PNG</button> : null}
        </div>
        {copyStatus ? <p className="text-sm font-semibold text-gray-700" role="status">{copyStatus}</p> : null}
        <p className="text-sm text-gray-600">Shortcuts: F fullscreen, Esc exit fullscreen where supported, Space controls, 1-9 preset colors, arrow keys cycle test colors. In dead pixel fullscreen, tap to advance and swipe left or right to change colors.</p>
      </div>
    </section>
  );
}

function normalizeHex(value: string) {
  const clean = value.trim().replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(clean)) {
    return `#${clean.split("").map((char) => `${char}${char}`).join("")}`.toLowerCase();
  }
  if (/^[0-9a-fA-F]{6}$/.test(clean)) return `#${clean.toLowerCase()}`;
  return "#ffffff";
}

function hexToRgb(hex: string) {
  const clean = normalizeHex(hex).replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((value) => Math.min(255, Math.max(0, value)).toString(16).padStart(2, "0")).join("")}`;
}

function getStageStyle(color: string, brightness: number, mode: Mode, monitorPattern: MonitorPattern): React.CSSProperties {
  const filter = `brightness(${brightness}%)`;
  if (mode === "monitor" && monitorPattern === "gradient") {
    return { background: "linear-gradient(90deg, #000, #fff), linear-gradient(180deg, #f00, #0f0, #00f)", backgroundBlendMode: "screen", filter };
  }
  if (mode === "monitor" && monitorPattern === "grid") {
    return {
      backgroundColor: "#fff",
      backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      filter
    };
  }
  if (mode === "monitor" && monitorPattern === "checkerboard") {
    return {
      backgroundColor: "#fff",
      backgroundImage: "linear-gradient(45deg, #111 25%, transparent 25%), linear-gradient(-45deg, #111 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #111 75%), linear-gradient(-45deg, transparent 75%, #111 75%)",
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0",
      filter
    };
  }
  if (mode === "monitor" && monitorPattern === "backlight") {
    return { background: "#050505", filter };
  }
  if (mode === "monitor" && monitorPattern === "uniformity") {
    return { background: "#808080", filter };
  }
  return { backgroundColor: color, filter };
}

function copyWithFallback(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}
