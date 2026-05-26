import { config } from "@/lib/config";

export function AdPlaceholder({ label = "Advertisement" }: { label?: string }) {
  if (!config.showAdPlaceholders) return null;

  return (
    <aside className="my-8 rounded border border-line bg-white p-5 text-center text-sm text-gray-600 shadow-sm" aria-label={label}>
      <span>{label}</span>
    </aside>
  );
}
