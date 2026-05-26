"use client";

export function BrightnessSlider({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      Brightness: {value}%
      <input
        type="range"
        min="10"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full"
        aria-label="Brightness"
      />
    </label>
  );
}
