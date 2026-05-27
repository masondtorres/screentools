import Link from "next/link";

export function FunScreenCard({ title, href, description }: { title: string; href: string; description: string }) {
  const preview = previewFor(title);

  return (
    <Link href={href} className="group overflow-hidden rounded-2xl border border-slate-800/10 bg-white shadow-sm hover:-translate-y-1 hover:border-slate-400 hover:shadow-soft focus-visible:ring-4 focus-visible:ring-blue-200">
      <div className={`relative h-32 overflow-hidden ${preview.base}`} aria-hidden="true">
        {preview.kind === "crack" ? <CrackPreview /> : null}
        {preview.kind === "update" ? <UpdatePreview /> : null}
        {preview.kind === "blue" ? <BluePreview /> : null}
        {preview.kind === "dvd" ? <DvdPreview /> : null}
        {preview.kind === "glitch" ? <GlitchPreview /> : null}
        {preview.kind === "rain" ? <RainPreview /> : null}
        {preview.kind === "loading" ? <LoadingPreview /> : null}
        {preview.kind === "frozen" ? <FrozenPreview /> : null}
        {preview.kind === "error" ? <ErrorPreview /> : null}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-extrabold tracking-tight group-hover:text-blue-700">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

function previewFor(title: string) {
  if (title.includes("Crack") || title.includes("Broken")) return { kind: "crack", base: "bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.42),transparent_8%),linear-gradient(135deg,#020617,#1e293b)]" };
  if (title.includes("Update")) return { kind: "update", base: "bg-[radial-gradient(circle_at_50%_35%,rgba(96,165,250,.45),transparent_28%),linear-gradient(135deg,#1d4ed8,#0f172a)]" };
  if (title.includes("Blue")) return { kind: "blue", base: "bg-[#1557d6]" };
  if (title.includes("DVD")) return { kind: "dvd", base: "bg-[radial-gradient(circle_at_70%_35%,rgba(103,232,249,.28),transparent_18%),linear-gradient(135deg,#020617,#111827)]" };
  if (title.includes("Glitch")) return { kind: "glitch", base: "bg-[linear-gradient(135deg,#020617,#111827)]" };
  if (title.includes("Rain")) return { kind: "rain", base: "bg-[linear-gradient(135deg,#020617,#052e16)]" };
  if (title.includes("Loading")) return { kind: "loading", base: "bg-[linear-gradient(135deg,#111827,#334155)]" };
  if (title.includes("Frozen")) return { kind: "frozen", base: "bg-[linear-gradient(135deg,#e0f2fe,#64748b)]" };
  return { kind: "error", base: "bg-[linear-gradient(135deg,#111827,#7f1d1d)]" };
}

function CrackPreview() {
  return <div className="absolute inset-0 bg-[radial-gradient(circle_at_49%_43%,rgba(255,255,255,.85)_0_2px,transparent_3px),linear-gradient(112deg,transparent_38%,rgba(15,23,42,.85)_39%,rgba(255,255,255,.7)_40%,transparent_42%),linear-gradient(42deg,transparent_47%,rgba(255,255,255,.6)_48%,transparent_50%),linear-gradient(154deg,transparent_50%,rgba(15,23,42,.55)_51%,rgba(255,255,255,.5)_52%,transparent_55%),linear-gradient(72deg,transparent_55%,rgba(255,255,255,.45)_56%,transparent_58%)] opacity-90" />;
}

function UpdatePreview() {
  return <div className="absolute inset-0 flex items-center justify-center"><div className="grid size-20 place-items-center rounded-full border-[7px] border-white/20 border-t-white/80 text-xs font-bold text-white">42%</div></div>;
}

function BluePreview() {
  return <div className="absolute left-6 top-6 max-w-52 text-white"><div className="text-4xl font-light">:(</div><div className="mt-2 h-2 w-36 rounded bg-white/70" /><div className="mt-2 h-2 w-24 rounded bg-white/40" /></div>;
}

function DvdPreview() {
  return <div className="absolute left-7 top-7 rounded-xl border border-cyan-200/70 bg-cyan-300/15 px-5 py-3 text-sm font-black tracking-wide text-cyan-100 shadow-[0_0_32px_rgba(103,232,249,.35)]">BOUNCE</div>;
}

function GlitchPreview() {
  return <><div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_5px,rgba(255,255,255,.08)_5px_6px)]" /><div className="absolute left-7 top-8 h-5 w-40 bg-cyan-300/70 mix-blend-screen" /><div className="absolute left-10 top-10 h-5 w-40 bg-rose-500/70 mix-blend-screen" /><div className="absolute bottom-8 left-4 h-3 w-52 bg-white/25" /></>;
}

function RainPreview() {
  return <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,197,94,.85)_0_2px,transparent_2px_15px),repeating-linear-gradient(0deg,transparent_0_8px,rgba(187,247,208,.28)_8px_10px)] opacity-80" />;
}

function LoadingPreview() {
  return <div className="absolute inset-0 flex items-center justify-center"><div className="w-40 rounded-full bg-white/15 p-1"><div className="h-3 w-2/3 rounded-full bg-white/80" /></div></div>;
}

function FrozenPreview() {
  return <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.7),transparent_22%),repeating-linear-gradient(135deg,rgba(255,255,255,.35)_0_1px,transparent_1px_14px)]" />;
}

function ErrorPreview() {
  return <div className="absolute left-5 top-6 rounded-xl border border-red-200/30 bg-black/45 p-4 text-red-100"><div className="h-2 w-28 rounded bg-red-300/80" /><div className="mt-3 h-2 w-44 rounded bg-white/30" /><div className="mt-2 h-2 w-32 rounded bg-white/20" /></div>;
}
