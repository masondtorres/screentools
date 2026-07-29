"use client";

export function TimerOverlay({ secondsLeft }: { secondsLeft: number | null }) {
  if (secondsLeft === null) return null;
  return (
    <div className="pointer-events-none absolute right-3 top-3 rounded bg-black/70 px-3 py-2 text-sm font-bold text-white">
      {formatTime(secondsLeft)}
    </div>
  );
}

function formatTime(value: number) {
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
