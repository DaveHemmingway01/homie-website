const tutorialSteps = [
  {
    part: "System",
    title: "Understand what you are building",
    summary:
      "Frame www.athomie.pt as a commercial website system: brand, content, lead capture, attribution, CRM, tracking, and sales follow-up.",
    outcome: "A clear mental model before files are created.",
    risk: "If this is treated as a brochure site, Odoo, tracking, and lead quality will be bolted on too late.",
    learn: [
      "The site is for the brand tiny home algarve and will live at www.athomie.pt.",
      "Codex produces code and structure, but a human approves claims, commercial logic, images, legal wording, and launch readiness.",
      "The operating model is Codex to GitHub to Vercel to Next.js to Odoo CRM to Meta and Google tracking."
    ],
    tasks: [
      "Write the primary business goal in one sentence.",
      "Confirm the first conversion: request brochure, contact request, or booked call.",
      "Confirm what Odoo should receive for every useful lead.",
      "Decide who approves copy, media, legal claims, CRM routing, and launch."
    ],
    verify: [
      "The user can explain the full visitor-to-Odoo flow.",
      "The tutorial owner knows what Codex can own and what needs human approval.",
      "The first version has a narrow lead-generation purpose."
    ],
    checklist: [
      "Business goal confirmed",
      "Primary conversion selected",
      "Lead data destination confirmed",
      "Human approval responsibilities assigned"
    ],
    prompt: `Task:
Summarize the website system we are building for www.athomie.pt.

Context:
The brand is tiny home algarve. The site should generate qualified leads for HOMIE tiny homes in the Algarve.

Acceptance criteria:
Explain the visitor journey from campaign link to website to form to Odoo CRM to tracking.
List what Codex can build and what a human must approve.`
  },
  {
    part: "Setup",
    title: "Prepare accounts and tools",
    summary:
      "Collect the accounts, access, and environment details needed before the project is built.",
    outcome: "A build checklist with no missing account blockers.",
    risk: "Missing access to Vercel, GitHub, Odoo, domain, GTM, or Meta will interrupt the build later.",
    learn: [
      "The minimum working stack is GitHub, Next.js, Vercel, Odoo credentials or test credentials, GTM, and Meta Pixel.",
      "Private Odoo credentials must stay server-side.",
      "Public tracking IDs can be exposed only when prefixed correctly for the frontend framework."
    ],
    tasks: [
      "Confirm GitHub account access.",
      "Confirm Vercel account access.",
      "Confirm Odoo CRM access or test credentials.",
      "Confirm access to www.athomie.pt DNS settings.",
      "Confirm GTM, GA4, and Meta Business Manager access."
    ],
    verify: [
      "Every required account has an owner.",
      "The domain owner can change DNS records.",
      "Odoo test submission credentials can be added to Vercel as private environment variables."
    ],
    checklist: [
      "GitHub ready",
      "Vercel ready",
      "Odoo access ready",
      "Domain DNS access ready",
      "Tracking accounts ready"
    ],
    prompt: `Task:
Create a setup readiness checklist for www.athomie.pt.

Context:
The project uses GitHub, Vercel, Next.js, Odoo CRM, Google Tag Manager, GA4, and Meta Pixel.

Acceptance criteria:
Separate required accounts, optional local tools, public environment variables, and private environment variables.
Flag anything that could block launch.`
  },
  {
    part: "Foundation",
    title: "Create the project foundation",
    summary:
      "Create the Next.js project, repository, deployment pipeline, and base folder structure for tiny home algarve.",
    outcome: "A clean source-controlled app with a preview deployment.",
    risk: "Poor structure makes later Codex tasks harder and increases the risk of broken pages or exposed secrets.",
    learn: [
      "Use a clean App Router structure with pages, reusable components, media components, forms, and isolated library functions.",
      "Keep API routes and Odoo code server-side.",
      "Use feature branches for meaningful work such as landing page, Odoo integration, tracking, and rich content."
    ],
    tasks: [
      "Create the Next.js app with TypeScript, ESLint, Tailwind, App Router, and import alias.",
      "Create the GitHub repository.",
      "Connect the repository to Vercel.",
      "Deploy a blank preview.",
      "Add .env.example with safe placeholder names only."
    ],
    verify: [
      "The app runs locally.",
      "The GitHub repository contains the source code.",
      "Vercel creates a preview deployment from the repository.",
      "No real secrets are committed."
    ],
    checklist: [
      "Next.js app created",
      "Repository pushed",
      "Vercel connected",
      "Preview deployment live",
      ".env.example added"
    ],
    code: `npx create-next-app@latest athomie-website
cd athomie-website
npm run dev`,
    prompt: `Task:
Create the project foundation for www.athomie.pt.

Context:
The public brand is tiny home algarve. The site is a lead-generation website for HOMIE tiny homes in the Algarve.

Requirements:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Clean folders for app, components, forms, media, lib, public images, downloads
- .env.example with no real secrets

Acceptance criteria:
The project runs locally, builds successfully, and is ready to connect to GitHub and Vercel.`
  },
  {
    part: "Architecture",
    title: "Map pages and components",
    summary:
      "Turn the website into clear routes and reusable sections instead of one fragile page.",
    outcome: "A route and component blueprint for the first production version.",
    risk: "If repeated sections are not components, every copy or design change becomes manual rework.",
    learn: [
      "Routes are pages such as /, /homie-models, /tiny-homes-algarve, /use-cases, /faq, /contact, and /thank-you.",
      "Components are reusable blocks such as Header, Footer, Hero, CTASection, ImageGallery, LeadForm, DownloadBlock, and FAQAccordion.",
      "The first version should stay focused and avoid portals, payments, full blog systems, and complex multilingual logic."
    ],
    tasks: [
      "Create the route list.",
      "Create the component list.",
      "Define which sections appear on the homepage.",
      "Define which pages include the lead form.",
      "Define the thank-you page download experience."
    ],
    verify: [
      "Every required route has a purpose.",
      "Repeated sections are listed as components.",
      "The thank-you page is included in the funnel.",
      "Out-of-scope features are explicitly deferred."
    ],
    checklist: [
      "Routes mapped",
      "Components mapped",
      "Homepage sections mapped",
      "Lead form locations chosen",
      "Out-of-scope list confirmed"
    ],
    prompt: `Task:
Create the website architecture for www.athomie.pt.

Required pages:
Home, HOMIE Models, Tiny Homes in the Algarve, Use Cases, Sustainability, FAQ, Contact, Thank You.

Required components:
Header, Footer, Hero, CTASection, TrustBlock, FAQAccordion, LeadForm, HeroImage, ImageGallery, VideoBlock, DownloadBlock, IconBenefitGrid, ImageComparison.

Acceptance criteria:
Return the route map, component map, homepage section order, and what is intentionally out of scope for version 1.`
  },
  {
    part: "Design",
    title: "Apply the brand and design system",
    summary:
      "Use a calm, architectural, premium design direction without generic real-estate styling.",
    outcome: "A consistent visual system that can scale across pages.",
    risk: "Over-designed luxury styling or generic templates will weaken trust and make the site feel less specific.",
    learn: [
      "Use warm mineral white, warm earth brown, neutral graphite, soft stone, and muted olive.",
      "Use the olive accent sparingly.",
      "Typography should be calm, readable, and light in headings. Avoid heavy decorative fonts and fake luxury effects."
    ],
    tasks: [
      "Add global color tokens.",
      "Define typography rules.",
      "Build header and footer.",
      "Build primary and secondary button styles.",
      "Create page spacing rules for desktop and mobile."
    ],
    verify: [
      "The site feels calm, architectural, and clear.",
      "Mobile text is readable.",
      "Buttons are visible and consistent.",
      "No fake certifications, exaggerated claims, or distorted logo treatment appear."
    ],
    checklist: [
      "Color tokens added",
      "Typography rules added",
      "Header and footer built",
      "Buttons styled",
      "Mobile spacing checked"
    ],
    prompt: `Task:
Implement the tiny home algarve design system.

Context:
The style should feel calm, architectural, clear, and premium without becoming cold or generic.

Design tokens:
- Background #F2F4F2
- Primary dark #584740
- Text #575757
- Stone #C3BAAC
- Accent #718A6F

Acceptance criteria:
Global styles, reusable buttons, header, footer, mobile-safe spacing, and no generic real estate template feeling.`
  },
  {
    part: "Content",
    title: "Build the homepage and core pages",
    summary:
      "Assemble the first funnel pages with focused copy, clear CTAs, and reusable sections.",
    outcome: "A navigable version 1 website with real page structure.",
    risk: "Trying to say everything on day one will dilute the lead funnel and slow launch.",
    learn: [
      "The homepage should move from desire to Algarve context to HOMIE solution to use cases to models to process to FAQ to lead form.",
      "The hero headline can use: Tiny homes for smart living in the Algarve.",
      "Primary CTA: Request the brochure. Secondary CTA: Explore HOMIE models."
    ],
    tasks: [
      "Build the homepage sections.",
      "Build the HOMIE Models page.",
      "Build the Tiny Homes in the Algarve page.",
      "Build Use Cases, Sustainability, FAQ, Contact, and Thank You pages.",
      "Add SEO titles and descriptions."
    ],
    verify: [
      "All navigation links work.",
      "The primary CTA is obvious.",
      "No page contains unsupported claims.",
      "Metadata is present on each page."
    ],
    checklist: [
      "Homepage built",
      "Subpages built",
      "CTA flow added",
      "SEO metadata added",
      "Claims reviewed"
    ],
    prompt: `Task:
Build the first content version of www.athomie.pt.

Context:
The public brand is tiny home algarve. The site generates leads for HOMIE tiny homes in the Algarve.

Homepage sections:
Hero, problem/desire, why tiny homes in the Algarve, HOMIE solution, use cases, models preview, sustainability and comfort, process, FAQ, lead form, footer.

Hero copy:
Headline: Tiny homes for smart living in the Algarve
Subheading: Compact, efficient, beautifully built homes for guest use, rental income, downsizing, or a second base in Portugal.
Primary CTA: Request the brochure
Secondary CTA: Explore HOMIE models

Acceptance criteria:
Responsive pages, clear CTAs, reusable sections, and no invented legal or technical claims.`
  },
  {
    part: "Media",
    title: "Add rich content and downloads",
    summary:
      "Create the media system for photography, galleries, maps, icons, videos, brochures, and floor plans.",
    outcome: "A media-ready site that can show quality, place, process, and proof.",
    risk: "Random images, bad filenames, and uncompressed assets will damage trust and performance.",
    learn: [
      "Every image should answer a visitor question about place, quality, materials, process, comfort, or trust.",
      "Use clean lowercase filenames with hyphens.",
      "Gate the main brochure after lead submission unless the campaign intentionally prioritizes reach."
    ],
    tasks: [
      "Create /public/images/brand, /homie, /cerro-mouro, /icons, and /maps.",
      "Create /public/downloads.",
      "Build HeroImage, ImageGallery, VideoBlock, DownloadBlock, IconBenefitGrid, and ImageComparison.",
      "Add accurate alt text.",
      "Add the brochure download on the thank-you page."
    ],
    verify: [
      "Images load without broken paths.",
      "Image crops work on mobile.",
      "Downloads open from the thank-you page.",
      "Media filenames are clean."
    ],
    checklist: [
      "Media folders created",
      "Reusable media components built",
      "Alt text added",
      "Brochure download gated",
      "Mobile crops checked"
    ],
    prompt: `Task:
Add the rich content system to www.athomie.pt.

Requirements:
- Create /public/images with folders for brand, homie, cerro-mouro, icons, and maps.
- Create /public/downloads for PDFs.
- Create HeroImage, ImageGallery, VideoBlock, DownloadBlock, IconBenefitGrid, ImageComparison.
- Use Next.js Image for local images.
- Use accurate alt text.
- Keep styling calm, architectural, natural, and restrained.
- Do not distort architecture or logos.
- Do not add fake claims.

Acceptance criteria:
Media components are reusable, responsive, accessible, and ready for real project assets.`
  },
  {
    part: "Lead Form",
    title: "Build the lead form and thank-you flow",
    summary:
      "Capture visible qualification fields and hidden attribution fields before showing the promised download.",
    outcome: "A working front-end lead capture flow ready for server validation.",
    risk: "A basic contact form will not give sales enough context or marketing enough attribution.",
    learn: [
      "Visible fields should qualify the person: name, email, phone, country, interest, use case, budget, timeline, contact preference, message, and consent.",
      "Hidden fields should capture UTM source, medium, campaign, content, term, landing page, referrer, fbclid, gclid, CTA clicked, and form source.",
      "Consent is required before submission."
    ],
    tasks: [
      "Build the LeadForm component.",
      "Add required field validation.",
      "Add honeypot anti-spam field.",
      "Capture hidden attribution fields.",
      "Redirect successful submissions to /thank-you."
    ],
    verify: [
      "Missing consent blocks submission.",
      "Invalid email blocks submission.",
      "UTM fields are included in the payload.",
      "The thank-you page displays the promised brochure download."
    ],
    checklist: [
      "Visible fields added",
      "Hidden fields added",
      "Validation added",
      "Honeypot added",
      "Thank-you redirect added"
    ],
    prompt: `Task:
Build the lead form and thank-you flow for www.athomie.pt.

Visible fields:
First name, last name, email, phone or WhatsApp, country, project interest, use case, budget range, timeline, preferred contact method, message, consent checkbox.

Hidden fields:
utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing_page, referrer, fbclid, gclid, cta_clicked, form_source, first_seen_at, last_seen_at.

Acceptance criteria:
Validation works, consent is required, attribution is included, spam honeypot exists, and successful submission reaches /thank-you.`
  },
  {
    part: "Odoo",
    title: "Connect Odoo CRM safely",
    summary:
      "Send validated lead submissions from a private server route to Odoo without exposing credentials.",
    outcome: "Odoo receives structured tiny home algarve leads.",
    risk: "Putting Odoo keys in browser-visible variables is a serious security mistake.",
    learn: [
      "The browser submits to /api/lead.",
      "The API route validates the payload server-side.",
      "Only the server route contacts Odoo and creates crm.lead records."
    ],
    tasks: [
      "Create /app/api/lead/route.ts.",
      "Validate required fields server-side.",
      "Map form data to Odoo crm.lead.",
      "Put extra attribution data in the lead description if custom fields are not ready.",
      "Return safe error messages to the visitor."
    ],
    verify: [
      "Real Odoo secrets are only in private environment variables.",
      "A test submission creates an Odoo lead.",
      "The Odoo lead includes visible fields and attribution fields.",
      "Browser source does not expose Odoo credentials."
    ],
    checklist: [
      "API route created",
      "Server validation added",
      "Odoo mapping added",
      "Safe errors added",
      "Test lead created"
    ],
    prompt: `Task:
Build the Odoo CRM lead submission system.

Requirements:
- Create /app/api/lead/route.ts.
- Validate form data server-side.
- Reject missing consent.
- Reject invalid email.
- Use private environment variables for Odoo credentials.
- Do not expose credentials to browser code.
- Map data to crm.lead.
- Include UTM and attribution fields in the lead description.
- Return safe success or error responses.
- Log technical errors server-side.

Acceptance criteria:
A test lead appears in Odoo with useful sales and campaign context, and no private values are exposed.`
  },
  {
    part: "Tracking",
    title: "Add attribution and behaviour tracking",
    summary:
      "Capture campaign source data and track the actions that matter commercially.",
    outcome: "Marketing can connect traffic sources to lead quality.",
    risk: "Traffic volume without lead quality data will produce weak decisions.",
    learn: [
      "Campaign links should use consistent UTM naming.",
      "The site should store attribution for around 30 days so source data survives page navigation.",
      "Track page_view, cta_click, form_start, generate_lead, brochure_request, and thank_you_view."
    ],
    tasks: [
      "Capture URL parameters on first landing.",
      "Persist UTMs, fbclid, gclid, landing page, and referrer in localStorage.",
      "Attach attribution to form payloads.",
      "Add GTM and Meta Pixel placeholders.",
      "Add tracking events to CTAs, form start, submission, and thank-you page."
    ],
    verify: [
      "UTM values survive navigation.",
      "CTA click events fire.",
      "Form start and lead events fire.",
      "Attribution appears in the Odoo lead."
    ],
    checklist: [
      "UTM capture added",
      "30-day persistence added",
      "GTM placeholder added",
      "Meta placeholder added",
      "Core events tracked"
    ],
    prompt: `Task:
Add social visitor behaviour tracking.

Requirements:
- Add Google Tag Manager placeholder.
- Add Meta Pixel placeholder.
- Track page_view, cta_click, form_start, generate_lead, brochure_request, and thank_you_view.
- Capture UTMs, fbclid, gclid, landing_page, referrer, and CTA clicked.
- Store attribution for 30 days.
- Include source data in form submissions.
- Do not add server-side tracking yet.

Acceptance criteria:
GTM, GA4, Meta Pixel, and Odoo attribution can be tested with a campaign URL.`
  },
  {
    part: "Launch",
    title: "Run launch QA and publish",
    summary:
      "Check the production deployment, domain, forms, tracking, privacy basics, and rollback path before launch.",
    outcome: "A production-ready launch decision.",
    risk: "Skipping QA can create broken forms, missing leads, exposed secrets, bad mobile layout, or false tracking data.",
    learn: [
      "The serious launch metric is cost per qualified Odoo lead, not traffic alone.",
      "Launch readiness covers technical, design, CRM, tracking, legal, and privacy checks.",
      "A known rollback path matters before production changes."
    ],
    tasks: [
      "Run npm run build.",
      "Test all pages on desktop and mobile.",
      "Submit a test lead and confirm Odoo data.",
      "Test tracking in GTM Preview, GA4 DebugView, and Meta Pixel Helper.",
      "Connect www.athomie.pt and confirm SSL.",
      "Update README with setup, environment variables, and deployment instructions."
    ],
    verify: [
      "Production URL loads correctly.",
      "No console errors or broken links are visible.",
      "Odoo receives a complete test lead.",
      "GTM and Meta events fire.",
      "No private Odoo values are visible in browser source.",
      "README explains how to operate the site."
    ],
    checklist: [
      "Build passes",
      "Mobile QA complete",
      "Odoo test passed",
      "Tracking test passed",
      "Domain and SSL ready",
      "README updated"
    ],
    prompt: `Task:
Run production readiness QA for www.athomie.pt.

Checklist:
- npm run build passes.
- All pages load.
- Mobile layout works.
- No broken links or images.
- Lead form validates fields and consent.
- Odoo receives a complete test lead.
- UTMs persist and appear in Odoo.
- GTM and Meta events fire.
- Thank-you page shows brochure download.
- No private Odoo values are visible in browser source.
- README explains setup and deployment.

Acceptance criteria:
Return launch status, blockers, risks, and exact fixes needed before public launch.`
  }
];

const state = {
  activeStep: Number(localStorage.getItem("tha.activeStep") || 0),
  activeTab: "learn",
  completed: JSON.parse(localStorage.getItem("tha.completed") || "{}")
};

const elements = {
  stepNav: document.querySelector("#stepNav"),
  progressPercent: document.querySelector("#progressPercent"),
  progressFill: document.querySelector("#progressFill"),
  stepPart: document.querySelector("#stepPart"),
  stepCount: document.querySelector("#stepCount"),
  stepTitle: document.querySelector("#stepTitle"),
  stepSummary: document.querySelector("#stepSummary"),
  learnPanel: document.querySelector("#learnPanel"),
  doPanel: document.querySelector("#doPanel"),
  verifyPanel: document.querySelector("#verifyPanel"),
  stepOutcome: document.querySelector("#stepOutcome"),
  stepRisk: document.querySelector("#stepRisk"),
  checklist: document.querySelector("#checklist"),
  checklistCount: document.querySelector("#checklistCount"),
  promptBlock: document.querySelector("#promptBlock"),
  toast: document.querySelector("#toast")
};

function stepKey(stepIndex, itemIndex) {
  return `${stepIndex}:${itemIndex}`;
}

function getStepCompletion(stepIndex) {
  const step = tutorialSteps[stepIndex];
  const done = step.checklist.filter((_, itemIndex) => state.completed[stepKey(stepIndex, itemIndex)]).length;
  return { done, total: step.checklist.length };
}

function getOverallCompletion() {
  const total = tutorialSteps.reduce((sum, step) => sum + step.checklist.length, 0);
  const done = tutorialSteps.reduce((sum, step, stepIndex) => sum + getStepCompletion(stepIndex).done, 0);
  return Math.round((done / total) * 100);
}

function saveState() {
  localStorage.setItem("tha.activeStep", String(state.activeStep));
  localStorage.setItem("tha.completed", JSON.stringify(state.completed));
}

function renderNav() {
  elements.stepNav.innerHTML = tutorialSteps
    .map((step, index) => {
      const completion = getStepCompletion(index);
      const isDone = completion.done === completion.total;
      const active = index === state.activeStep;
      return `
        <button class="step-button ${active ? "active" : ""} ${isDone ? "done" : ""}" type="button" data-step="${index}">
          <span class="step-text">
            <span class="step-kicker">${step.part}</span>
            <span class="step-label">${step.title}</span>
          </span>
          <span class="step-status">${isDone ? "✓" : index + 1}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeStep = Number(button.dataset.step);
      state.activeTab = "learn";
      saveState();
      render();
    });
  });
}

function renderList(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderPanel(step) {
  elements.learnPanel.innerHTML = `
    <h3 class="section-title">What this step teaches</h3>
    <p class="body-copy">${step.summary}</p>
    ${renderList(step.learn, "learn-list")}
    ${step.code ? `<pre class="code-block">${step.code}</pre>` : ""}
  `;

  elements.doPanel.innerHTML = `
    <h3 class="section-title">Actions to complete</h3>
    ${renderList(step.tasks, "task-list")}
    ${step.code ? `<pre class="code-block">${step.code}</pre>` : ""}
  `;

  elements.verifyPanel.innerHTML = `
    <h3 class="section-title">Acceptance checks</h3>
    ${renderList(step.verify, "verify-list")}
  `;
}

function renderChecklist(step) {
  const completion = getStepCompletion(state.activeStep);
  elements.checklistCount.textContent = `${completion.done}/${completion.total}`;
  elements.checklist.innerHTML = step.checklist
    .map((item, itemIndex) => {
      const key = stepKey(state.activeStep, itemIndex);
      return `
        <label class="check-item">
          <input type="checkbox" data-check="${itemIndex}" ${state.completed[key] ? "checked" : ""} />
          <span>${item}</span>
        </label>
      `;
    })
    .join("");

  document.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const key = stepKey(state.activeStep, Number(checkbox.dataset.check));
      state.completed[key] = checkbox.checked;
      saveState();
      render();
    });
  });
}

function renderTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.activeTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${state.activeTab}Panel`);
  });
}

function renderProgress() {
  const progress = getOverallCompletion();
  elements.progressPercent.textContent = `${progress}%`;
  elements.progressFill.style.width = `${progress}%`;
}

function render() {
  const step = tutorialSteps[state.activeStep];
  elements.stepPart.textContent = step.part;
  elements.stepCount.textContent = `Step ${state.activeStep + 1} of ${tutorialSteps.length}`;
  elements.stepTitle.textContent = step.title;
  elements.stepSummary.textContent = step.summary;
  elements.stepOutcome.textContent = step.outcome;
  elements.stepRisk.textContent = step.risk;
  elements.promptBlock.textContent = step.prompt;

  renderProgress();
  renderNav();
  renderPanel(step);
  renderChecklist(step);
  renderTabs();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.setTimeout(() => elements.toast.classList.remove("visible"), 1700);
}

function copyCurrentPrompt() {
  const step = tutorialSteps[state.activeStep];
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(step.prompt)
      .then(() => showToast("Prompt copied"))
      .catch(() => fallbackCopy(step.prompt));
    return;
  }

  fallbackCopy(step.prompt);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    showToast("Prompt copied");
  } catch {
    showToast("Copy failed");
  } finally {
    document.body.removeChild(textarea);
  }
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = button.dataset.tab;
    renderTabs();
  });
});

document.querySelector("#copyCurrentPrompt").addEventListener("click", copyCurrentPrompt);
document.querySelector("#copyCurrentPromptTop").addEventListener("click", copyCurrentPrompt);
document.querySelector("#resetProgress").addEventListener("click", () => {
  state.completed = {};
  saveState();
  render();
  showToast("Progress reset");
});

render();
