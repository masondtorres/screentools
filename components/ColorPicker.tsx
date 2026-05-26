"use client";

import { presetColors } from "@/lib/site";

type Props = {
  color: string;
  rgb: { r: number; g: number; b: number };
  onHexChange: (value: string) => void;
  onRgbChange: (value: { r: number; g: number; b: number }) => void;
  onPreset: (hex: string, name: string) => void;
  presets?: Array<{ name: string; hex: string }>;
};

export function ColorPicker({ color, rgb, onHexChange, onRgbChange, onPreset, presets = presetColors }: Props) {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {presets.map((preset) => (
          <button
            key={`${preset.name}-${preset.hex}`}
            type="button"
            onClick={() => onPreset(preset.hex, preset.name)}
            className="min-h-11 rounded border border-line px-2 py-2 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: preset.hex, color: isDark(preset.hex) ? "#ffffff" : "#111827" }}
            aria-label={`Use ${preset.name}`}
          >
            {preset.name}
          </button>
        ))}
      </div>
      <label className="grid gap-1 text-sm font-semibold">
        Custom HEX
        <input
          value={color}
          onChange={(event) => onHexChange(event.target.value)}
          className="min-h-11 rounded border border-line px-3"
          aria-label="Custom HEX color"
          placeholder="#ff0000"
        />
      </label>
      <div className="grid grid-cols-3 gap-2">
        {(["r", "g", "b"] as const).map((channel) => (
          <label key={channel} className="grid gap-1 text-sm font-semibold uppercase">
            {channel}
            <input
              type="number"
              min="0"
              max="255"
              value={rgb[channel]}
              onChange={(event) => onRgbChange({ ...rgb, [channel]: clamp(Number(event.target.value), 0, 255) })}
              className="min-h-11 rounded border border-line px-3"
              aria-label={`${channel.toUpperCase()} value`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function isDark(hex: string) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}
