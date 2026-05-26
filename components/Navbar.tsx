import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="text-base font-bold">ScreenTools</Link>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/color-screens" className="rounded px-2 py-1 hover:bg-gray-100">Tools</Link>
          <Link href="/screen-tests" className="rounded px-2 py-1 hover:bg-gray-100">Tests</Link>
          <Link href="/fun-screens" className="rounded px-2 py-1 hover:bg-gray-100">Fun Screens</Link>
          <Link href="/guides" className="rounded px-2 py-1 hover:bg-gray-100">Guides</Link>
          <Link href="/about" className="rounded px-2 py-1 hover:bg-gray-100">About</Link>
        </div>
      </nav>
    </header>
  );
}
