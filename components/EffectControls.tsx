"use client";

type Props = {
  effect: string;
  values: Record<string, string | number | boolean>;
  setValue: (key: string, value: string | number | boolean) => void;
  reset?: () => void;
};

export function EffectControls({ effect, values, setValue, reset }: Props) {
  return (
    <div className="grid gap-3 rounded border border-line bg-white p-4">
      {effect === "broken" ? (
        <>
          <Select label="Crack style" value={String(values.crackStyle)} onChange={(value) => setValue("crackStyle", value)} options={["Light crack", "Heavy crack", "Corner crack", "Spiderweb crack"]} />
          <Select label="Background" value={String(values.background)} onChange={(value) => setValue("background", value)} options={["Transparent", "Black", "White", "Blue", "Gray"]} />
          <button type="button" onClick={reset} className="min-h-11 rounded border border-line px-4 py-2 text-sm font-semibold">Reset cracks</button>
        </>
      ) : null}
      {effect === "update" || effect === "loading" ? (
        <>
          <Input label="Message" value={String(values.message)} onChange={(value) => setValue("message", value)} />
          <NumberInput label="Starting percentage" value={Number(values.percent)} min={0} max={99} onChange={(value) => setValue("percent", value)} />
          <Select label="Duration" value={String(values.duration)} onChange={(value) => setValue("duration", value)} options={["30 seconds", "1 minute", "5 minutes", "10 minutes", "30 minutes"]} />
          <Input label="End message" value={String(values.endMessage)} onChange={(value) => setValue("endMessage", value)} />
          <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={Boolean(values.reveal)} onChange={(event) => setValue("reveal", event.target.checked)} /> Reveal prank at end</label>
        </>
      ) : null}
      {effect === "blue-crash" ? (
        <>
          <Input label="Error title" value={String(values.headline)} onChange={(value) => setValue("headline", value)} />
          <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={Boolean(values.progress)} onChange={(event) => setValue("progress", event.target.checked)} /> Show fake restart progress</label>
        </>
      ) : null}
      {effect === "dvd" ? (
        <>
          <Input label="Text" value={String(values.text)} onChange={(value) => setValue("text", value)} />
          <Input label="Background color" value={String(values.backgroundColor)} onChange={(value) => setValue("backgroundColor", value)} />
          <Input label="Text color" value={String(values.textColor)} onChange={(value) => setValue("textColor", value)} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={8} onChange={(value) => setValue("speed", value)} />
          <Range label="Size" value={Number(values.size)} min={40} max={160} onChange={(value) => setValue("size", value)} />
        </>
      ) : null}
      {effect === "glitch" ? (
        <>
          <Range label="Intensity" value={Number(values.intensity)} min={1} max={8} onChange={(value) => setValue("intensity", value)} />
          <Select label="Color mode" value={String(values.colorMode)} onChange={(value) => setValue("colorMode", value)} options={["RGB", "Green", "Blue", "Static"]} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={6} onChange={(value) => setValue("speed", value)} />
        </>
      ) : null}
      {effect === "code-rain" ? (
        <>
          <Select label="Color" value={String(values.rainColor)} onChange={(value) => setValue("rainColor", value)} options={["Green", "Blue", "White", "Amber"]} />
          <Range label="Speed" value={Number(values.speed)} min={1} max={8} onChange={(value) => setValue("speed", value)} />
          <Range label="Density" value={Number(values.density)} min={6} max={24} onChange={(value) => setValue("density", value)} />
        </>
      ) : null}
      {effect === "error" ? (
        <>
          <Input label="Headline" value={String(values.headline)} onChange={(value) => setValue("headline", value)} />
          <Input label="Message" value={String(values.message)} onChange={(value) => setValue("message", value)} />
          <Select label="Theme" value={String(values.theme)} onChange={(value) => setValue("theme", value)} options={["Blue", "Black", "Red", "Gray"]} />
          <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={Boolean(values.progress)} onChange={(event) => setValue("progress", event.target.checked)} /> Show progress bar</label>
        </>
      ) : null}
    </div>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<input className="min-h-11 rounded border border-line px-3" value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function NumberInput({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<input type="number" min={min} max={max} className="min-h-11 rounded border border-line px-3" value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function Range({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}: {value}<input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="grid gap-1 text-sm font-semibold">{label}<select className="min-h-11 rounded border border-line px-3" value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
