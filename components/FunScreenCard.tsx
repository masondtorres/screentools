import Link from "next/link";

export function FunScreenCard({ title, href, description }: { title: string; href: string; description: string }) {
  const preview = previewClass(title);

  return (
    <Link href={href} className="group overflow-hidden rounded-2xl border border-slate-800/10 bg-white shadow-sm hover:border-slate-400 hover:shadow-soft">
      <div className={`h-28 ${preview}`} aria-hidden="true" />
      <div className="p-4">
      <h3 className="font-extrabold tracking-tight group-hover:text-blue-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

function previewClass(title: string) {
  if (title.includes("Crack") || title.includes("Broken")) return "bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.75),transparent_6%),linear-gradient(135deg,transparent_46%,rgba(255,255,255,.75)_47%,transparent_49%),linear-gradient(45deg,#020617,#1e293b)]";
  if (title.includes("Update")) return "bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.35),transparent_18%),linear-gradient(135deg,#1d4ed8,#0f172a)]";
  if (title.includes("Blue")) return "bg-[#1557d6]";
  if (title.includes("DVD")) return "bg-[radial-gradient(circle_at_70%_35%,#67e8f9,transparent_12%),linear-gradient(135deg,#020617,#111827)]";
  if (title.includes("Glitch")) return "bg-[linear-gradient(90deg,rgba(255,0,80,.55),transparent_18%,rgba(0,229,255,.5)_32%,transparent_48%),linear-gradient(135deg,#020617,#111827)]";
  if (title.includes("Rain")) return "bg-[repeating-linear-gradient(90deg,rgba(34,197,94,.8)_0_2px,transparent_2px_18px),linear-gradient(135deg,#020617,#052e16)]";
  return "bg-[linear-gradient(135deg,#111827,#334155)]";
}
