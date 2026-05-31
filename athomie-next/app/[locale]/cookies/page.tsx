import { legalNotice } from "@/content/site";

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <h1>Cookie Policy</h1>
      <p>{legalNotice}</p>
      <p>
        Cookie consent and GTM consent mode will be added before analytics, Meta Pixel, or conversion tracking are
        enabled.
      </p>
    </main>
  );
}
