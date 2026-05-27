"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { EffectControls } from "@/components/EffectControls";
import { trackEvent } from "@/lib/analytics";
import type { FunEffect } from "@/lib/fun-screens";

type Props = {
  effect: FunEffect;
  title: string;
  motionWarning?: boolean;
};

type Point = { x: number; y: number };

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
  const [showExitHint, setShowExitHint] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cornerHits, setCornerHits] = useState(0);
  const [extraCracks, setExtraCracks] = useState<Point[]>([]);
  const [values, setValues] = useState<Record<string, string | number | boolean>>({
    crackStyle: "Light Crack",
    background: "Black",
    customBackground: "#111827",
    impact: "Center",
    crackIntensity: 5,
    seed: 1847,
    glare: true,
    vignette: true,
    message: effect === "update" ? "Working on updates" : "Loading",
    endMessage: "This was a visual effect.",
    percent: 12,
    duration: "1 minute",
    reveal: false,
    updateTheme: "Blue system",
    loadingTheme: "Minimal",
    headline: effect === "blue-crash" ? "Something went wrong." : "Unexpected screen message",
    progress: true,
    errorCode: true,
    text: "BOUNCE",
    backgroundColor: "#050505",
    textColor: "#ffffff",
    speed: 3,
    size: 96,
    trail: true,
    intensity: 4,
    colorMode: "RGB",
    scanlines: true,
    rainColor: "Green",
    density: 14,
    charSize: 18,
    glow: true,
    theme: "Blue"
  });

  const setValue = (key: string, value: string | number | boolean) => {
    setValues((current) => ({ ...current, [key]: value }));
    trackEvent("effect_setting_changed", { effect, key, value: String(value) });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next: Record<string, string | number | boolean> = {};
    for (const key of ["crackStyle", "background", "customBackground", "impact", "seed"]) {
      const value = params.get(key);
      if (value) next[key] = value;
    }
    const intensity = params.get("intensity");
    if (intensity) next.crackIntensity = Number(intensity);
    if (Object.keys(next).length) setValues((current) => ({ ...current, ...next }));
  }, []);

  useEffect(() => {
    if (effect !== "broken") return;
    const url = new URL(window.location.href);
    url.searchParams.set("crackStyle", String(values.crackStyle));
    url.searchParams.set("background", String(values.background));
    url.searchParams.set("impact", String(values.impact));
    url.searchParams.set("intensity", String(values.crackIntensity));
    url.searchParams.set("seed", String(values.seed));
    window.history.replaceState(null, "", url);
  }, [effect, values.background, values.crackIntensity, values.crackStyle, values.impact, values.seed]);

  const enterFullscreen = useCallback(async () => {
    setShowExitHint(true);
    if (stageRef.current?.requestFullscreen) {
      try {
        await stageRef.current.requestFullscreen();
        trackEvent("fun_screen_started", { effect });
        return;
      } catch {
        // Some webviews reject fullscreen. Use a safe in-page fallback.
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
    setShowExitHint(false);
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

  const fullscreenActive = isFullscreen || fallbackFullscreen;

  const revealExitHint = useCallback(() => {
    if (!fullscreenActive) return;
    setShowExitHint(true);
  }, [fullscreenActive]);

  useEffect(() => {
    if (!fullscreenActive || !showExitHint) return;
    const id = window.setTimeout(() => setShowExitHint(false), 2600);
    return () => window.clearTimeout(id);
  }, [fullscreenActive, showExitHint]);

  useEffect(() => {
    const onAnyKey = () => revealExitHint();
    window.addEventListener("keydown", onAnyKey);
    return () => window.removeEventListener("keydown", onAnyKey);
  }, [revealExitHint]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="tool-panel overflow-hidden rounded-2xl shadow-soft" aria-label={title}>
      <div
        ref={stageRef}
        className={`${fullscreenActive ? "fixed inset-0 z-50 h-screen min-h-screen" : "relative min-h-[58vh]"} overflow-hidden bg-black`}
        onMouseMove={revealExitHint}
        onTouchStart={revealExitHint}
        onClick={(event) => {
          revealExitHint();
          if (effect === "broken" && fullscreenActive) {
            const rect = event.currentTarget.getBoundingClientRect();
            setExtraCracks((cracks) => [...cracks, { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height }].slice(-8));
          }
        }}
      >
        <EffectCanvas effect={effect} values={values} canvasRef={canvasRef} cornerHits={cornerHits} setCornerHits={setCornerHits} extraCracks={extraCracks} reducedMotion={reducedMotion} />
        {!fullscreenActive ? <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
          Visual effect only
        </div> : null}
        {!fullscreenActive ? <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl bg-black/70 p-2 text-white shadow-xl backdrop-blur">
          <button type="button" onClick={enterFullscreen} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black hover:bg-gray-100">Start Full Screen</button>
          <button type="button" onClick={exitFullscreen} className="rounded-xl px-4 py-2 text-sm font-bold hover:bg-white/20">Exit</button>
        </div> : null}
        {fullscreenActive && showExitHint ? (
          <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <span>Esc to exit</span>
            <button type="button" onClick={exitFullscreen} className="rounded-full bg-white/15 px-2 py-0.5 hover:bg-white/25">Exit</button>
          </div>
        ) : null}
      </div>
      {!fullscreenActive ? <div className="grid gap-4 p-4 sm:p-5">
        <p className="text-sm font-semibold text-gray-700">Press Esc to exit fullscreen. This is a visual effect only. Use it responsibly.</p>
        {motionWarning ? <p className="rounded-xl bg-yellow-50 p-3 text-sm text-yellow-900">Contains motion. Avoid using this if you are sensitive to flashing or visual effects. Reduced motion settings are respected where practical.</p> : null}
        {effect === "dvd" ? <p className="text-sm font-semibold text-gray-700">Corner hits: {cornerHits}</p> : null}
        <EffectControls effect={effect} values={values} setValue={setValue} reset={() => setExtraCracks([])} />
      </div> : null}
    </section>
  );
}

function EffectCanvas({ effect, values, canvasRef, cornerHits, setCornerHits, extraCracks, reducedMotion }: {
  effect: FunEffect;
  values: Record<string, string | number | boolean>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  cornerHits: number;
  setCornerHits: Dispatch<SetStateAction<number>>;
  extraCracks: Point[];
  reducedMotion: boolean;
}) {
  const [progress, setProgress] = useState(Number(values.percent));
  const [box, setBox] = useState({ x: 40, y: 40, dx: 2, dy: 2, hue: 190 });
  const canvasEffect = effect === "broken" || effect === "glitch" || effect === "code-rain";

  useEffect(() => {
    if (effect !== "update" && effect !== "loading" && effect !== "blue-crash") return;
    setProgress(Number(values.percent));
    const start = Date.now();
    const startPercent = Number(values.percent);
    const duration = durationMs[String(values.duration)] ?? 60000;
    const id = window.setInterval(() => {
      const ratio = Math.min(1, (Date.now() - start) / duration);
      setProgress(Math.min(100, Math.round(startPercent + (100 - startPercent) * ratio)));
    }, 350);
    return () => window.clearInterval(id);
  }, [effect, values.duration, values.percent]);

  useCanvasEffect(effect, canvasRef, values, extraCracks, reducedMotion);

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
        let hue = current.hue;
        if (hitX) {
          dx *= -1;
          hue = (hue + 47) % 360;
        }
        if (hitY) {
          dy *= -1;
          hue = (hue + 71) % 360;
        }
        if (hitX && hitY) setCornerHits((count) => count + 1);
        x = Math.max(0, Math.min(width - size * 2, x));
        y = Math.max(0, Math.min(height - size, y));
        return { x, y, dx, dy, hue };
      });
    }, 24);
    return () => window.clearInterval(id);
  }, [effect, reducedMotion, setCornerHits, values.size, values.speed]);

  if (canvasEffect) {
    return reducedMotion && effect !== "broken" ? (
      <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
        <p className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-center text-sm font-semibold">Motion reduced. Use this visual only if comfortable.</p>
      </div>
    ) : <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" aria-label={`${effect} visual effect`} />;
  }

  if (effect === "update") {
    return <UpdateScreen values={values} progress={progress} />;
  }

  if (effect === "blue-crash") {
    return <BlueCrash values={values} progress={progress} />;
  }

  if (effect === "dvd") {
    const color = `hsl(${box.hue} 90% 62%)`;
    return (
      <div className="absolute inset-0 overflow-hidden" style={{ background: String(values.backgroundColor) }}>
        {Boolean(values.trail) ? <div className="absolute rounded-xl blur-xl opacity-30" style={{ left: box.x - 18, top: box.y - 18, width: Number(values.size) * 2.2, height: Number(values.size) * 1.1, background: color }} /> : null}
        <div className="absolute rounded-2xl border-2 px-5 py-3 font-black shadow-[0_0_24px_rgba(255,255,255,.18)]" style={{ left: box.x, top: box.y, color: String(values.textColor) || color, borderColor: color, fontSize: Number(values.size) / 3 }}>
          {String(values.text)}
        </div>
      </div>
    );
  }

  if (effect === "loading") {
    return <LoadingScreen values={values} progress={progress} />;
  }

  if (effect === "frozen") {
    return <FrozenScreen />;
  }

  return <ErrorScreen values={values} />;
}

function useCanvasEffect(effect: FunEffect, canvasRef: RefObject<HTMLCanvasElement | null>, values: Record<string, string | number | boolean>, extraCracks: Point[], reducedMotion: boolean) {
  const crackKey = useMemo(() => JSON.stringify({ values, extraCracks }), [values, extraCracks]);

  useEffect(() => {
    if (effect !== "broken" && effect !== "glitch" && effect !== "code-rain") return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !parent || !context) return;
    const activeCanvas = canvas;
    const activeParent = parent;
    const activeContext = context;
    let frame = 0;
    let animation = 0;
    let columns: number[] = [];

    function resize() {
      const rect = activeParent.getBoundingClientRect();
      const ratio = Math.min(2.5, window.devicePixelRatio || 1);
      activeCanvas.width = Math.max(1, Math.floor(rect.width * ratio));
      activeCanvas.height = Math.max(1, Math.floor(rect.height * ratio));
      activeCanvas.style.width = `${rect.width}px`;
      activeCanvas.style.height = `${rect.height}px`;
      activeContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = Array(Math.ceil(rect.width / Number(values.charSize || values.density))).fill(0).map(() => Math.random() * rect.height);
    }

    function draw() {
      const rect = activeParent.getBoundingClientRect();
      if (effect === "broken") {
        drawCrackedGlass(activeContext, rect.width, rect.height, values, extraCracks);
        return;
      }
      if (reducedMotion) return;
      frame += 1;
      if (effect === "code-rain") drawCodeRain(activeContext, rect.width, rect.height, values, columns);
      if (effect === "glitch") drawGlitch(activeContext, rect.width, rect.height, values, frame);
      animation = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef, crackKey, effect, extraCracks, reducedMotion, values]);
}

function drawCrackedGlass(context: CanvasRenderingContext2D, width: number, height: number, values: Record<string, string | number | boolean>, extraCracks: Point[]) {
  const bg = backgroundFor(String(values.background), String(values.customBackground));
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, shade(bg, 18));
  gradient.addColorStop(0.55, bg);
  gradient.addColorStop(1, shade(bg, -18));
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  const seed = Number(values.seed) || 1;
  const rng = mulberry32(seed);
  const impacts = [impactPoint(String(values.impact), width, height, rng), ...extraCracks.map((p) => ({ x: p.x * width, y: p.y * height }))];
  const intensity = Number(values.crackIntensity) || 5;
  const style = String(values.crackStyle);

  impacts.forEach((impact, impactIndex) => {
    const count = crackCount(style, intensity, impactIndex);
    drawImpact(context, impact, style, intensity, rng);
    for (let i = 0; i < count; i += 1) {
      const angle = baseAngle(style, i, count, impact, width, height, rng);
      const length = (0.28 + rng() * 0.62) * Math.max(width, height) * (impactIndex ? 0.38 : 1);
      const path = jaggedPath(impact, angle, length, width, height, rng);
      drawGlassLine(context, path, 0.8 + rng() * 1.8, 0.5 + intensity / 12);
      if (rng() < 0.75) drawBranch(context, path, width, height, rng, intensity);
      if (rng() < 0.35) drawShard(context, path, impact, rng);
    }
  });

  if (Boolean(values.glare)) {
    const glare = context.createLinearGradient(0, 0, width, height * 0.45);
    glare.addColorStop(0, "rgba(255,255,255,0)");
    glare.addColorStop(0.48, "rgba(255,255,255,0.18)");
    glare.addColorStop(0.56, "rgba(255,255,255,0.04)");
    glare.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glare;
    context.beginPath();
    context.moveTo(0, height * 0.12);
    context.lineTo(width, 0);
    context.lineTo(width, height * 0.24);
    context.lineTo(0, height * 0.42);
    context.closePath();
    context.fill();
  }

  if (Boolean(values.vignette)) {
    const vignette = context.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.25, width / 2, height / 2, Math.max(width, height) * 0.75);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.36)");
    context.fillStyle = vignette;
    context.fillRect(0, 0, width, height);
  }
}

function drawImpact(context: CanvasRenderingContext2D, point: Point, style: string, intensity: number, rng: () => number) {
  const radius = (style.includes("Heavy") || style.includes("Spiderweb") ? 28 : 15) + intensity * 2;
  const glow = context.createRadialGradient(point.x, point.y, 1, point.x, point.y, radius * 2);
  glow.addColorStop(0, "rgba(255,255,255,.62)");
  glow.addColorStop(0.18, "rgba(255,255,255,.20)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(point.x, point.y, radius * 2, 0, Math.PI * 2);
  context.fill();
  for (let i = 0; i < 22 + intensity * 3; i += 1) {
    const a = rng() * Math.PI * 2;
    const r = radius * (0.15 + rng() * 0.85);
    context.fillStyle = `rgba(255,255,255,${0.12 + rng() * 0.28})`;
    context.beginPath();
    context.ellipse(point.x + Math.cos(a) * r, point.y + Math.sin(a) * r, 1 + rng() * 3, 0.6 + rng() * 2, a, 0, Math.PI * 2);
    context.fill();
  }
}

function drawGlassLine(context: CanvasRenderingContext2D, path: Point[], width: number, alpha: number) {
  context.lineCap = "round";
  context.lineJoin = "round";
  strokePath(context, path, width + 2.4, `rgba(0,0,0,${0.16 * alpha})`, 1.2, 1.2);
  strokePath(context, path, width + 0.8, `rgba(255,255,255,${0.36 * alpha})`, -0.8, -0.8);
  strokePath(context, path, Math.max(0.45, width * 0.42), `rgba(255,255,255,${0.82 * alpha})`, 0, 0);
}

function strokePath(context: CanvasRenderingContext2D, path: Point[], lineWidth: number, strokeStyle: string, ox: number, oy: number) {
  context.beginPath();
  path.forEach((point, index) => {
    if (index === 0) context.moveTo(point.x + ox, point.y + oy);
    else context.lineTo(point.x + ox, point.y + oy);
  });
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.stroke();
}

function drawBranch(context: CanvasRenderingContext2D, path: Point[], width: number, height: number, rng: () => number, intensity: number) {
  const start = path[Math.max(1, Math.floor(rng() * (path.length - 2)))];
  const prev = path[Math.max(0, path.indexOf(start) - 1)];
  const angle = Math.atan2(start.y - prev.y, start.x - prev.x) + (rng() > 0.5 ? 1 : -1) * (0.45 + rng() * 0.95);
  const branch = jaggedPath(start, angle, (0.08 + rng() * 0.22) * Math.max(width, height), width, height, rng);
  drawGlassLine(context, branch, 0.35 + rng() * 0.65, 0.34 + intensity / 20);
}

function drawShard(context: CanvasRenderingContext2D, path: Point[], impact: Point, rng: () => number) {
  const p = path[Math.floor(path.length * (0.45 + rng() * 0.4))];
  const dx = p.x - impact.x;
  const dy = p.y - impact.y;
  const len = Math.max(1, Math.hypot(dx, dy));
  const nx = -dy / len;
  const ny = dx / len;
  context.fillStyle = `rgba(255,255,255,${0.035 + rng() * 0.055})`;
  context.strokeStyle = `rgba(255,255,255,${0.08 + rng() * 0.14})`;
  context.lineWidth = 0.7;
  context.beginPath();
  context.moveTo(p.x, p.y);
  context.lineTo(p.x - dx * 0.12 + nx * (12 + rng() * 34), p.y - dy * 0.12 + ny * (12 + rng() * 34));
  context.lineTo(p.x - dx * 0.3 - nx * (8 + rng() * 22), p.y - dy * 0.3 - ny * (8 + rng() * 22));
  context.closePath();
  context.fill();
  context.stroke();
}

function drawCodeRain(context: CanvasRenderingContext2D, width: number, height: number, values: Record<string, string | number | boolean>, columns: number[]) {
  context.fillStyle = Boolean(values.glow) ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.18)";
  context.fillRect(0, 0, width, height);
  const color = colorForRain(String(values.rainColor));
  context.font = `${Number(values.charSize)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
  context.shadowColor = Boolean(values.glow) ? color : "transparent";
  context.shadowBlur = Boolean(values.glow) ? 10 : 0;
  const step = Number(values.charSize) || 18;
  columns.forEach((y, index) => {
    const char = randomCodeChar(index + y);
    context.fillStyle = index % 9 === 0 ? "#ffffff" : color;
    context.fillText(char, index * step, y);
    columns[index] = y > height + Math.random() * 800 ? 0 : y + Number(values.speed) * 2.4;
  });
  context.shadowBlur = 0;
}

function drawGlitch(context: CanvasRenderingContext2D, width: number, height: number, values: Record<string, string | number | boolean>, frame: number) {
  const speed = Number(values.speed);
  const intensity = Number(values.intensity);
  if (frame % Math.max(2, 9 - speed) !== 0) return;
  const base = context.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "#030712");
  base.addColorStop(0.5, "#111827");
  base.addColorStop(1, "#020617");
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);
  if (Boolean(values.scanlines)) {
    context.fillStyle = "rgba(255,255,255,0.045)";
    for (let y = 0; y < height; y += 4) context.fillRect(0, y, width, 1);
  }
  for (let i = 0; i < intensity * 10; i += 1) {
    const y = Math.random() * height;
    const bandH = 3 + Math.random() * 34;
    const offset = (Math.random() - 0.5) * intensity * 28;
    context.fillStyle = glitchColor(String(values.colorMode), i);
    context.globalAlpha = 0.08 + Math.random() * 0.23;
    context.fillRect(offset, y, width, bandH);
  }
  for (let i = 0; i < intensity * 60; i += 1) {
    context.fillStyle = `rgba(255,255,255,${Math.random() * 0.18})`;
    context.fillRect(Math.random() * width, Math.random() * height, 1 + Math.random() * 2, 1);
  }
  context.globalAlpha = 1;
}

function UpdateScreen({ values, progress }: { values: Record<string, string | number | boolean>; progress: number }) {
  const theme = updateThemeClass(String(values.updateTheme));
  const done = progress >= 100 && Boolean(values.reveal);
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-6 text-center ${theme}`}>
      <div className="w-full max-w-xl">
        <div className="mx-auto mb-8 grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_60px_rgba(255,255,255,.12)]">
          <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-white/25 border-t-white text-lg font-bold">{progress}%</div>
        </div>
        <p className="text-3xl font-bold sm:text-5xl">{done ? values.endMessage : values.message}</p>
        <p className="mt-4 text-base opacity-85">This is a visual effect only.</p>
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-white transition-all duration-300" style={{ width: `${progress}%` }} /></div>
      </div>
    </div>
  );
}

function BlueCrash({ values, progress }: { values: Record<string, string | number | boolean>; progress: number }) {
  return (
    <div className="absolute inset-0 bg-[#1557d6] p-8 text-white sm:p-14">
      <div className="max-w-4xl">
        <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl border border-white/30 text-4xl">!</div>
        <p className="text-3xl font-semibold sm:text-5xl">{String(values.headline)}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">This is a fake screen effect. Press Esc to exit. Nothing is actually crashing.</p>
        {Boolean(values.progress) ? <p className="mt-8 text-lg">Restart progress: {progress}%</p> : null}
        {Boolean(values.errorCode) ? <p className="mt-4 font-mono text-sm text-white/75">FAKE_ERROR_CODE: SCREEN_EFFECT_{Math.max(1000, Number(values.seed) || 1847)}</p> : null}
      </div>
    </div>
  );
}

function LoadingScreen({ values, progress }: { values: Record<string, string | number | boolean>; progress: number }) {
  const theme = loadingThemeClass(String(values.loadingTheme));
  const done = progress >= 100 && Boolean(values.reveal);
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-6 text-center ${theme}`}>
      <div className="w-full max-w-lg">
        <div className="mx-auto mb-7 h-16 w-16 animate-spin rounded-full border-4 border-current/20 border-t-current" />
        <p className="text-3xl font-bold sm:text-5xl">{done ? values.endMessage : values.message}</p>
        <p className="mt-4 opacity-75">This is a visual effect only.</p>
        <div className="mt-8 h-3 overflow-hidden rounded-full bg-current/15"><div className="h-full rounded-full bg-current transition-all duration-300" style={{ width: `${progress}%` }} /></div>
      </div>
    </div>
  );
}

function FrozenScreen() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),transparent_18%),radial-gradient(circle_at_70%_35%,rgba(210,235,255,.8),transparent_22%),linear-gradient(135deg,rgba(255,255,255,.75),rgba(125,180,220,.58))]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(35deg, transparent 42%, rgba(255,255,255,.55) 43%, transparent 45%), linear-gradient(125deg, transparent 48%, rgba(255,255,255,.35) 49%, transparent 51%)", backgroundSize: "120px 120px" }} />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 rounded-2xl border border-slate-300 bg-white/75 px-5 py-3 text-slate-900 shadow-xl backdrop-blur">Not responding - visual effect only</div>
      <div className="absolute left-[58%] top-[54%] h-0 w-0 rotate-[-18deg] border-b-[22px] border-l-[12px] border-r-[12px] border-b-black border-l-transparent border-r-transparent drop-shadow" />
    </div>
  );
}

function ErrorScreen({ values }: { values: Record<string, string | number | boolean> }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-6 text-center ${themeClass(String(values.theme))}`}>
      <div className="max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
        <p className="text-3xl font-bold sm:text-5xl">{String(values.headline)}</p>
        <p className="mt-5 text-lg opacity-90">{String(values.message)}</p>
        {Boolean(values.progress) ? <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full w-2/5 rounded-full bg-white" /></div> : null}
      </div>
    </div>
  );
}

function jaggedPath(start: Point, angle: number, length: number, width: number, height: number, rng: () => number) {
  const points = [start];
  const steps = 5 + Math.floor(rng() * 7);
  let current = start;
  let drift = angle;
  for (let i = 1; i <= steps; i += 1) {
    drift += (rng() - 0.5) * 0.36;
    const step = length / steps;
    current = {
      x: Math.max(-10, Math.min(width + 10, current.x + Math.cos(drift) * step)),
      y: Math.max(-10, Math.min(height + 10, current.y + Math.sin(drift) * step))
    };
    points.push(current);
    if (current.x <= 0 || current.x >= width || current.y <= 0 || current.y >= height) break;
  }
  return points;
}

function crackCount(style: string, intensity: number, index: number) {
  const base = style.includes("Light") ? 8 : style.includes("Corner") ? 13 : style.includes("Shattered") ? 22 : style.includes("Phone") ? 17 : 18;
  return Math.max(5, Math.round((base + intensity * 2) * (index ? 0.55 : 1)));
}

function impactPoint(value: string, width: number, height: number, rng: () => number): Point {
  const insetX = width * 0.16;
  const insetY = height * 0.16;
  if (value === "Top left") return { x: insetX, y: insetY };
  if (value === "Top right") return { x: width - insetX, y: insetY };
  if (value === "Bottom left") return { x: insetX, y: height - insetY };
  if (value === "Bottom right") return { x: width - insetX, y: height - insetY };
  if (value === "Random") return { x: width * (0.2 + rng() * 0.6), y: height * (0.18 + rng() * 0.62) };
  if (value === "Shattered Edge") return { x: width * 0.88, y: height * 0.55 };
  return { x: width * 0.5, y: height * 0.48 };
}

function baseAngle(style: string, index: number, count: number, impact: Point, width: number, height: number, rng: () => number) {
  if (style.includes("Corner") || impact.x < width * 0.2 || impact.x > width * 0.8 || impact.y < height * 0.2 || impact.y > height * 0.8) {
    const target = { x: width / 2, y: height / 2 };
    return Math.atan2(target.y - impact.y, target.x - impact.x) + (rng() - 0.5) * Math.PI * 1.4;
  }
  return (index / count) * Math.PI * 2 + (rng() - 0.5) * 0.46;
}

function backgroundFor(value: string, custom: string) {
  if (value === "White") return "#f8fafc";
  if (value === "Blue") return "#1d4ed8";
  if (value === "Gray") return "#64748b";
  if (value === "Custom color") return /^#[0-9a-fA-F]{6}$/.test(custom) ? custom : "#111827";
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
  return ["#ff3b6b", "#00e5ff", "#f7ff00"][index % 3];
}

function randomCodeChar(seed: number) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|";
  return chars[Math.abs(Math.floor(Math.sin(seed * 999) * chars.length)) % chars.length];
}

function themeClass(theme: string) {
  if (theme === "Black") return "bg-black text-white";
  if (theme === "Red") return "bg-red-900 text-white";
  if (theme === "Gray") return "bg-slate-700 text-white";
  if (theme === "Terminal") return "bg-black font-mono text-emerald-300";
  return "bg-blue-900 text-white";
}

function updateThemeClass(theme: string) {
  if (theme === "Dark system") return "bg-slate-950 text-white";
  if (theme === "Minimal white") return "bg-slate-50 text-slate-950";
  if (theme === "Retro terminal") return "bg-black font-mono text-emerald-300";
  return "bg-[radial-gradient(circle_at_50%_15%,#3b82f6,#0f3d91_58%,#071d49)] text-white";
}

function loadingThemeClass(theme: string) {
  if (theme === "System dark") return "bg-slate-950 text-white";
  if (theme === "Retro terminal") return "bg-black font-mono text-emerald-300";
  if (theme === "Neon") return "bg-[#09031a] text-fuchsia-200";
  return "bg-slate-50 text-slate-950";
}

function mulberry32(seed: number) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shade(hex: string, amount: number) {
  const clean = hex.replace("#", "");
  const values = [0, 2, 4].map((i) => Math.max(0, Math.min(255, parseInt(clean.slice(i, i + 2), 16) + amount)));
  return `#${values.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}
