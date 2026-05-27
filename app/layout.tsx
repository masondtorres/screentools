import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ScreenTools | Simple Full-Screen Color Tools",
    template: "%s"
  },
  description: site.description,
  manifest: "/manifest.webmanifest",
  openGraph: {
    siteName: site.name,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Add Google Analytics or AdSense scripts here later when they are active. */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
