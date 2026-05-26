import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-gray-600 sm:grid-cols-3">
        <div>
          <p className="font-bold text-ink">ScreenTools</p>
          <p className="mt-2">Simple browser tools for screen colors, light and display checks.</p>
        </div>
        <div className="grid gap-2">
          <Link href="/color-screens">Color Screens</Link>
          <Link href="/screen-tests">Screen Tests</Link>
          <Link href="/screen-lighting">Screen Lighting</Link>
          <Link href="/focus-screens">Focus Screens</Link>
          <Link href="/fun-screens">Fun Screens</Link>
          <Link href="/guides">Guides</Link>
        </div>
        <div className="grid gap-2">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
