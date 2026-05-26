"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { EffectControls } from "@/components/EffectControls";
import { trackEvent } from "@/lib/analytics";
import type { FunEffect } from "@/lib/fun-screens";

type Props = {
  effect: FunEffect;
  title: string;
  motionWarning?: boolean;
};

const durationMs: Record<string, number> = {
  "30 seconds": 30000,
  "1 minute": 60000,
  "5 minutes": 300000,
  "10 minutes": 600000,
  "30 minutes": 1800000
};

export function FullscreenEffectStage({ effect, title, motionWarning }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cornerHits, setCornerHits] = useState(0);
  const [extraCracks, setExtraCracks] = useState<Array<{ x: number; y: number }>>([]);
  const [values, setValues] = useState<Record<string, string | number | boolean>>({
    crackStyle: "Light crack",
    background: "Black",
    message: effect === "update" ? "Working on updates" : "Loading",
    endMessage: "This was a visual effect.",
    percent: 1,
    duration: "1 minute",
    reveal: false,
    headline: effect === "blue-crash" ? "Something went wrong." : "Unexpected screen message",
    progress: true,
    text: "BOUNCE",
    backgroundColor: "#050505",
    textColor: "#ffffff",
    speed: 3,
    size: 96,
    intensity: 3,
    colorMode: "RGB",
    rainColor: "Green",
    density: 14,
    theme: "Blue"
  });

  const setValue = (key: string, value: string | number | boolean) => {
    setValues((current) => ({ ...current, [key]: value }));
    trackEvent("effect_setting_changed", { effect, key, value: String(value) });
  };

  const enterFullscreen = useCallback(async () => {
    if (stageRef.current?.requestFullscreen) {
      try {
        await stageRef.current.requestFullscreen();
        trackEvent("fun_screen_started", { effect });
        return;
      } catch {
        // Some app webviews reject fullscreen. Use a safe in-page fallback.
      }
    }
    setFallbackFullscreen(true);
    setIsFullscreen(true);
    trackEvent("fun_screen_started", { effect });
  }, [effect]);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) await document.exitFullscreen?.();
    setFallbackFullscreen(false);
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") void exitFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [exitFullscreen]);

  useEffect(() => {
    document.body.style.overflow = fallbackFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [fallbackFullscreen]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (effect !== "code-rain" && effect !== "glitch") return;
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let animation = 0;
    let frame = 0;
    let columns: number[] = [];

    function resize() {
      if (!canvas || !stage) return;
      const rect = stage.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      columns = Array(Math.ceil(canvas.width / Number(values.density))).fill(0);
    }

    function draw() {
      if (!canvas || !context) return;
      frame += 1;
      if (effect === "code-rain") {
        const color = colorForRain(String(values.rainColor));
        context.fillStyle = "rgba(0,0,0,0.12)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = color;
        context.font = `${Number(values.density)}px monospace`;
        columns.forEach((y, index) => {
          const char = String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96));
          context.fillText(char, index * Number(values.density), y);
          columns[index] = y > canvas.height + Math.random() * 1000 ? 0 : y + Number(values.speed) * 2;
        });
      } else {
        const skip = Math.max(2, 8 - Number(values.speed));
        if (frame % skip === 0) {
          context.fillStyle = String(values.colorMode) === "Static" ? "#111" : "#050505";
          context.fillRect(0, 0, canvas.width, canvas.height);
          const blocks = Number(values.intensity) * 8;
          for (let i = 0; i < blocks; i += 1) {
            context.fillStyle = glitchColor(String(values.colorMode), i);
            context.globalAlpha = 0.35;
            context.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 30 + Math.random() * 180, 4 + Math.random() * 32);
          }
          context.globalAlpha = 1;
        }
      }
      animation = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, [effect, reducedMotion, values]);

  return (
    <section className="tool-panel overflow-hidden rounded" aria-label={title}>
      <div
        ref={stageRef}
        className={`${fallbackFullscreen ? "fixed inset-0 z-50 min-h-screen" : "relative min-h-[52vh]"} overflow-hidden`}
        onClick={(event) => {
          if (effect === "broken" && isFullscreen) {
            const rect = event.currentTarget.getBoundingClientRect();
            setExtraCracks((cracks) => [...cracks, { x: event.clientX - rect.left, y: event.clientY - rect.top }].slice(-8));
          }
        }}
      >
        <EffectCanvas effect={effect} values={values} canvasRef={canvasRef} cornerHits={cornerHits} setCornerHits={setCornerHits} extraCracks={extraCracks} reducedMotion={reducedMotion} />
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2 rounded bg-black/70 p-2 text-white">
          <button type="button" onClick={enterFullscreen} className="rounded px-3 py-2 text-sm font-bold hover:bg-white/20">Start Full Screen</button>
          <button type="button" onClick={exitFullscreen} className="rounded px-3 py-2 text-sm font-bold hover:bg-white/20">Exit</button>
        </div>
      </div>
      <div className="grid gap-4 p-4 sm:p-5">
        <p className="text-sm font-semibold text-gray-700">Press Esc to exit fullscreen. This is a visual effect only. Use it responsibly.</p>
        {motionWarning ? <p className="rounded bg-yellow-50 p-3 text-sm text-yellow-900">Contains motion. Avoid using this if you are sensitive to flashing or visual effects. Reduced motion settings are respected where possible.</p> : null}
        {effect === "dvd" ? <p className="text-sm font-semibold text-gray-700">Corner hits: {cornerHits}</p> : null}
        <EffectControls effect={effect} values={values} setValue={setValue} reset={() => setExtraCracks([])} />
      </div>
    </section>
  );
}

function EffectCanvas({ effect, values, canvasRef, cornerHits, setCornerHits, extraCracks, reducedMotion }: {
  effect: FunEffect;
  values: Record<string, string | number | boolean>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  cornerHits: number;
  setCornerHits: Dispatch<SetStateAction<number>>;
  extraCracks: Array<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  const [progress, setProgress] = useState(Number(values.percent));
  const [box, setBox] = useState({ x: 40, y: 40, dx: 2, dy: 2 });

  useEffect(() => {
    if (effect !== "update" && effect !== "loading") return;
    setProgress(Number(values.percent));
    const start = Date.now();
    const startPercent = Number(values.percent);
    const duration = durationMs[String(values.duration)] ?? 60000;
    const id = window.setInterval(() => {
      const ratio = Math.min(1, (Date.now() - start) / duration);
      setProgress(Math.min(100, Math.round(startPercent + (100 - startPercent) * ratio)));
    }, 500);
    return () => window.clearInterval(id);
  }, [effect, values.duration, values.percent]);

  useEffect(() => {
    if (reducedMotion) return;
    if (effect !== "dvd") return;
    const id = window.setInterval(() => {
      setBox((current) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const size = Number(values.size);
        let dx = current.dx;
        let dy = current.dy;
        let x = current.x + dx * Number(values.speed);
        let y = current.y + dy * Number(values.speed);
        const hitX = x <= 0 || x + size * 2 >= width;
        const hitY = y <= 0 || y + size >= height;
        if (hitX) dx *= -1;
        if (hitY) dy *= -1;
        if (hitX && hitY) setCornerHits((count) => count + 1);
        x = Math.max(0, Math.min(width - size * 2, x));
        y = Math.max(0, Math.min(height - size, y));
        return { x, y, dx, dy };
      });
    }, 30);
    return () => window.clearInterval(id);
  }, [effect, reducedMotion, setCornerHits, values.size, values.speed]);

  if (effect === "broken") {
    return (
      <div className="absolute inset-0" style={{ background: backgroundFor(String(values.background)) }}>
        <CrackPattern styleName={String(values.crackStyle)} />
        {extraCracks.map((crack, index) => <div key={`${crack.x}-${crack.y}-${index}`} className="absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2" style={{ left: crack.x, top: crack.y }}><CrackPattern styleName="Light crack" /></div>)}
      </div>
    );
  }

  if (effect === "update") {
    return <CenteredScreen className="bg-sky-700 text-white" title={String(values.message)} subtitle="Please keep this screen open" progress={progress} reveal={Boolean(values.reveal)} endMessage={String(values.endMessage)} />;
  }

  if (effect === "blue-crash") {
    return <CenteredScreen className="bg-blue-700 text-white" title={String(values.headline)} subtitle="This is a fake screen effect. Press Esc to exit." progress={Boolean(values.progress) ? progress : undefined} />;
  }

  if (effect === "dvd") {
    return <div className="absolute inset-0" style={{ background: String(values.backgroundColor) }}><div className="absolute rounded border-2 px-4 py-2 font-black" style={{ left: box.x, top: box.y, color: String(values.textColor), borderColor: String(values.textColor), fontSize: Number(values.size) / 3 }}>{String(values.text)}</div></div>;
  }

  if (effect === "glitch" || effect === "code-rain") {
    return reducedMotion ? (
      <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
        <p className="rounded border border-white/30 px-4 py-3 text-center text-sm font-semibold">Motion reduced. Start fullscreen to use this visual only if comfortable.</p>
      </div>
    ) : <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" aria-label={`${effect} visual effect`} />;
  }

  if (effect === "loading") {
    return <CenteredScreen className="bg-gray-950 text-white" title={String(values.message)} subtitle="This is a visual effect only" progress={progress} reveal={Boolean(values.reveal)} endMessage={String(values.endMessage)} spinner />;
  }

  if (effect === "frozen") {
    return (
      <div className="absolute inset-0 bg-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.8),transparent_18%),linear-gradient(135deg,rgba(255,255,255,.7),rgba(150,190,220,.6))]" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 rounded border border-slate-400 bg-white/80 px-5 py-3 text-slate-900 shadow">Screen paused - visual effect only</div>
        <div className="absolute left-[58%] top-[54%] h-0 w-0 border-b-[18px] border-l-[10px] border-r-[10px] border-b-black border-l-transparent border-r-transparent" />
      </div>
    );
  }

  return <CenteredScreen className={themeClass(String(values.theme))} title={String(values.headline)} subtitle={String(values.message)} progress={Boolean(values.progress) ? 42 : undefined} />;
}

function CenteredScreen({ className, title, subtitle, progress, reveal, endMessage, spinner }: { className: string; title: string; subtitle: string; progress?: number; reveal?: boolean; endMessage?: string; spinner?: boolean }) {
  const done = typeof progress === "number" && progress >= 100;
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-6 text-center ${className}`}>
      <div className="max-w-2xl">
        {spinner ? <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-white/30 border-t-white" /> : null}
        <p className="text-3xl font-bold sm:text-5xl">{done && reveal ? endMessage : title}</p>
        <p className="mt-5 text-lg opacity-90">{done && reveal ? "Use it responsibly." : subtitle}</p>
        {typeof progress === "number" ? (
          <div className="mt-8">
            <div className="h-3 overflow-hidden rounded bg-white/25"><div className="h-full bg-white" style={{ width: `${progress}%` }} /></div>
            <p className="mt-3 font-semibold">Progress: {progress}%</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CrackPattern({ styleName }: { styleName: string }) {
  const heavy = styleName.includes("Heavy") || styleName.includes("Spiderweb");
  const corner = styleName.includes("Corner");
  return (
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="rgba(255,255,255,.8)" strokeWidth={heavy ? 0.55 : 0.28}>
        <path d={corner ? "M5 5 L25 18 L40 12 M25 18 L30 42 M25 18 L12 35" : "M50 50 L20 15 M50 50 L80 12 M50 50 L90 65 M50 50 L42 92 M50 50 L8 70"} />
        <path d={heavy ? "M50 50 L30 30 L18 35 M50 50 L70 38 L84 42 M50 50 L62 70 L75 86 M50 50 L35 62 L20 82" : "M50 50 L60 40 M50 50 L44 66"} />
        {styleName.includes("Spiderweb") ? (
          <>
            <circle cx="50" cy="50" r="18" />
            <circle cx="50" cy="50" r="31" />
          </>
        ) : null}
      </g>
    </svg>
  );
}

function backgroundFor(value: string) {
  if (value === "Transparent") return "linear-gradient(45deg, #d1d5db 25%, transparent 25%), linear-gradient(-45deg, #d1d5db 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d1d5db 75%), linear-gradient(-45deg, transparent 75%, #d1d5db 75%) 0 0 / 32px 32px";
  if (value === "White") return "#fff";
  if (value === "Blue") return "#1d4ed8";
  if (value === "Gray") return "#808080";
  return "#050505";
}

function colorForRain(value: string) {
  if (value === "Blue") return "#7dd3fc";
  if (value === "White") return "#f8fafc";
  if (value === "Amber") return "#fbbf24";
  return "#22c55e";
}

function glitchColor(mode: string, index: number) {
  if (mode === "Green") return "#22c55e";
  if (mode === "Blue") return "#38bdf8";
  if (mode === "Static") return index % 2 ? "#fff" : "#777";
  return ["#ff004c", "#00e5ff", "#f7ff00"][index % 3];
}

function themeClass(theme: string) {
  if (theme === "Black") return "bg-black text-white";
  if (theme === "Red") return "bg-red-800 text-white";
  if (theme === "Gray") return "bg-gray-700 text-white";
  return "bg-blue-800 text-white";
}
