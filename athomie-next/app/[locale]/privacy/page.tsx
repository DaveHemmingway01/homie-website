import { legalNotice } from "@/content/site";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p>{legalNotice}</p>
      <p>
        This draft policy will describe how HOMIE collects lead form data, handles analytics consent, stores submissions,
        and responds to GDPR data requests.
      </p>
    </main>
  );
}
