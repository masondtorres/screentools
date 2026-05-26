"use client";

type Props = {
  effect: string;
  values: Record<string, string | number | boolean>;
  setValue: (key: string, value: string | number | boolean) => void;
  reset?: () => void;
};

export function EffectControls({ effect, values, setValue, reset }: Props) {
  return (
    <div className="grid gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm sm:grid-cols-2">
      {effect === "broken" ? (
        <>
          <Select label="Crack style" value={String(values.crackStyle)} onChange={(value) => setValue("crackStyle", value)} options={["Light Crack", "Heavy Crack", "Corner Impact", "Spiderweb Impact", "Shattered Edge", "Phone Drop"]} />
          <Select label="Background" value={String(values.background)} onChange={(value) => setValue("background", value)} options={["Black", "White", "Blue", "Gray", "Custom color"]} />
          {values.background === "Custom color" ? <Input label="Custom background" value={String(values.customBackground)} onChange={(value) => setValue("customBackground", value)} /> : null}
          <Select label="Impact position" value={String(values.impact)} onChange={(value) => setValue("impact", value)} options={["Center", "Top left", "Top right", "Bottom left", "Bottom right", "Random"]} />
          <Range label="Crack intensity" value={Number(values.crackIntensity)} min={1} max={10} onChange={(value) => setValue("crackIntensity", value)} />
          <NumberInput label="Share seed" value={Number(values.seed)} min={1} max={999999} onChange={(value) => setValue("seed", value)} />
          <Toggle label="Screen glare" checked={Boolean(values.glare)} onChange={(value) => setValue("glare", value)} />
          <Toggle label="Edge vignette" checked={Boolean(values.vignette)} onChange={(value) => setValue("vignette", value)} />
          <button type="button" onClick={reset} className="min-h-11 rounded-xl border border-line px-4 py-2 text-sm font-semibold hover:border-gray-500">Reset cracks</button>
        </>
      ) : null}
      {effect === "update" ? (
        <>
          <Input label="Message" value={String(values.message)} onChange={(value) => setValue("message", value)} />
          <NumberInput label="Starting percentage" value={Number(values.percent)} min={0} max={99} onChange={(value) => setValue("percent", value)} />
          <Select label="Duration" value={String(values.duration)} onChange={(value) => setValue("duration", value)} options={["30 seconds", "1 minute", "5 minutes", "10 minutes", "30 minutes"]} />
          <Select label="Theme" value={String(values.updateTheme)} onChange={(value) => setValue("updateTheme", value)} options={["Blue system", "Dark system", "Minimal white", "Retro terminal"]} />
          <Input label="End message" value={String(values.endMessage)} onChange={(value) => setValue("endMessage", value)} />
          <Toggle label="Reveal message at end" checked={Boolean(values.reveal)} onChange={(value) => setValue("reveal", value)} />
        </>
      ) : null}
      {effect === "loading" ? (
        <>
          <Input label="Message" value={String(values.message)} onChange={(value) => setValue("message", value)} />
          <NumberInput label="Starting percentage" value={Number(values.percent)} min={0} max={99} onChange={(value) => setValue("percent", value)} />
          <Select label="Duration" value={String(values.duration)} onChange={(value) => setValue("duration", value)} options={["30 seconds", "1 minute", "5 minutes", "10 minutes", "30 minutes"]} />
          <Select label="Theme" value={String(values.loadingTheme)} onChange={(value) => setValue("loadingTheme", value)} options={["Minimal", "System dark", "Retro terminal", "Neon"]} />
          <Input label="End message" value={String(values.endMessage)} onChange={(value) => setValue("endMessage", value)} />
          <Toggle label="Reveal message at end" checked={Boolean(values.reveal)} onChange={(value) => setValue("reveal", value)} />
        </>
      ) : null}
      {effect === "blue-crash" ? (
        <>
          <Input label="Error title" value={String(values.headline)} onChange={(value) => setValue("headline", value)} />
          <NumberInput label="Starting percentage" value={Number(values.percent)} min={0} max={99} onChange={(value) => setValue("percent", value)} />
          <Toggle label="Show fake progress" checked={Boolean(values.progress)} onChange={(value) => setValue("progress", value)} />
          <Toggle label="Show generic error code" checked={Boolean(values.errorCode)} onChange={(value) => setValue("errorCode", value)} />
        </>
      ) : null}
      {effect === "dvd" ? (
        <>
          <Input label="Text" value={String(values.text)} onChange={(value) => setValue("text", value)} />
          <Input label="Background color" value={String(values.backgroundColor)} onChange={(value) => setValue("backgroundColor", value)} />
          <Input label="Text color" value={String(values.textColor)} onChange={(value) => setValue("textColor", value)} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={8} onChange={(value) => setValue("speed", value)} />
          <Range label="Size" value={Number(values.size)} min={40} max={160} onChange={(value) => setValue("size", value)} />
          <Toggle label="Trail" checked={Boolean(values.trail)} onChange={(value) => setValue("trail", value)} />
        </>
      ) : null}
      {effect === "glitch" ? (
        <>
          <Range label="Intensity" value={Number(values.intensity)} min={1} max={8} onChange={(value) => setValue("intensity", value)} />
          <Select label="Color mode" value={String(values.colorMode)} onChange={(value) => setValue("colorMode", value)} options={["RGB", "Green", "Blue", "Static"]} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={6} onChange={(value) => setValue("speed", value)} />
          <Toggle label="Scanlines" checked={Boolean(values.scanlines)} onChange={(value) => setValue("scanlines", value)} />
        </>
      ) : null}
      {effect === "code-rain" ? (
        <>
          <Select label="Color" value={String(values.rainColor)} onChange={(value) => setValue("rainColor", value)} options={["Green", "Blue", "White", "Amber"]} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={8} onChange={(value) => setValue("speed", value)} />
          <Range label="Density" value={Number(values.density)} min={6} max={24} onChange={(value) => setValue("density", value)} />
          <Range label="Character size" value={Number(values.charSize)} min={12} max={28} onChange={(value) => setValue("charSize", value)} />
          <Toggle label="Glow" checked={Boolean(values.glow)} onChange={(value) => setValue("glow", value)} />
        </>
      ) : null}
      {effect === "error" ? (
        <>
          <Input label="Headline" value={String(values.headline)} onChange={(value) => setValue("headline", value)} />
          <Input label="Message" value={String(values.message)} onChange={(value) => setValue("message", value)} />
          <Select label="Theme" value={String(values.theme)} onChange={(value) => setValue("theme", value)} options={["Blue", "Black", "Red", "Gray", "Terminal"]} />
          <Toggle label="Show progress bar" checked={Boolean(values.progress)} onChange={(value) => setValue("progress", value)} />
        </>
      ) : null}
    </div>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<input className="min-h-11 rounded-xl border border-line px-3 shadow-inner" value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function NumberInput({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<input type="number" min={min} max={max} className="min-h-11 rounded-xl border border-line px-3 shadow-inner" value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function Range({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}: {value}<input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<select className="min-h-11 rounded-xl border border-line px-3 shadow-inner" value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return <label className="flex min-h-11 items-center gap-2 rounded-xl border border-line px-3 text-sm font-semibold"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /> {label}</label>;
}
