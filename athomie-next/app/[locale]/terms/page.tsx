import { legalNotice } from "@/content/site";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <h1>Terms &amp; Conditions</h1>
      <p>{legalNotice}</p>
      <p>
        This draft page will define website use, brochure request terms, non-binding product information, and the fact
        that site, permit, transport, and installation assumptions require separate confirmation.
      </p>
    </main>
  );
}
