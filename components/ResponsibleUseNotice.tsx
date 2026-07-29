export function ResponsibleUseNotice({ motion = false }: { motion?: boolean }) {
  return (
    <div className="rounded border border-line bg-white p-4 text-sm text-gray-700">
      <p className="font-bold text-ink">Responsible use</p>
      <p className="mt-1">This is a visual effect only. Nothing is actually broken, updating, loading or frozen. Use it responsibly.</p>
      {motion ? <p className="mt-2 text-yellow-900">Contains motion. Avoid using this if you are sensitive to flashing or visual effects.</p> : null}
    </div>
  );
}
