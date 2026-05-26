export function AdPlaceholder({ label = "Advertisement" }: { label?: string }) {
  return (
    <aside className="my-6 rounded border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm text-gray-600" aria-label={label}>
      <span>{label}</span>
    </aside>
  );
}
