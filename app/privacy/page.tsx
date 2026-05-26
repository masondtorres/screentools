import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | ScreenTools",
  description: "Read the ScreenTools privacy policy, including notes about future analytics and advertising.",
  alternates: { canonical: canonical("/privacy") },
  openGraph: { title: "Privacy Policy | ScreenTools", description: "ScreenTools privacy information.", url: canonical("/privacy") }
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])} />
      <h1>Privacy Policy</h1>
      <p>ScreenTools does not require an account, login or download to use the tools.</p>
      <p>Basic analytics may be added later to understand page visits and tool use. Display ads may also be added later. If ads or analytics are added, this policy should be updated with the active providers and opt-out details.</p>
      <p>Current tool controls, such as color fields and timer settings, run in the browser. Some settings may be saved locally in your browser when you choose to save a preset.</p>
      <p>Contact links use email. Do not send sensitive information unless you are comfortable sending it by email.</p>
    </main>
  );
}
