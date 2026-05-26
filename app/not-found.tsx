import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-700">This ScreenTools page does not exist. Try one of the main tools instead.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="rounded bg-ink px-4 py-2 text-sm font-bold text-white">Home</Link>
        <Link href="/color-screen" className="rounded border border-line bg-white px-4 py-2 text-sm font-bold">Color Screen</Link>
        <Link href="/dead-pixel-test" className="rounded border border-line bg-white px-4 py-2 text-sm font-bold">Dead Pixel Test</Link>
      </div>
    </main>
  );
}
