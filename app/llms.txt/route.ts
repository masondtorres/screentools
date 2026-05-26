import { site } from "@/lib/site";

export function GET() {
  const body = `# ScreenTools

ScreenTools is a free collection of browser-based screen tools for full-screen colors, display testing, lighting, focus and harmless visual effects. The tools run in the browser and do not require accounts, payments or downloads.

Main clusters:
- Color Screens: ${site.url}/color-screens
- Screen Tests: ${site.url}/screen-tests
- Screen Lighting: ${site.url}/screen-lighting
- Focus Screens: ${site.url}/focus-screens
- Fun Screens: ${site.url}/fun-screens
- Guides: ${site.url}/guides

Important URLs:
- White Screen: ${site.url}/white-screen
- Black Screen: ${site.url}/black-screen
- Color Screen: ${site.url}/color-screen
- Dead Pixel Test: ${site.url}/dead-pixel-test
- Monitor Test: ${site.url}/monitor-test
- Screen Flashlight: ${site.url}/screen-flashlight
- Zoom Light: ${site.url}/zoom-light

Contact: ${site.url}/contact
Privacy: ${site.url}/privacy
Terms: ${site.url}/terms
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
