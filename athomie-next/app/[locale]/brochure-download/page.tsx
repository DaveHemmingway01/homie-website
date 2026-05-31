import { Button } from "@/components/Button";

export default function BrochureDownloadPage() {
  return (
    <main className="legal-page">
      <h1>Download the HOMIE brochure</h1>
      <p>
        This page will host the approved brochure PDF. For now it links to the prototype placeholder download.
      </p>
      <Button href="/downloads/brochure-placeholder.html">Open placeholder brochure</Button>
    </main>
  );
}
