# Building Lead-Generation Websites with Codex, GitHub, Vercel, and Odoo

A practical field manual for Living by CO

Version: 2.0  
Audience: founder, creative director, marketing lead, web producer, developer, CRM manager  
Primary use case: building functional lead-generation websites with rich content, forms, CRM integration, and social traffic behaviour tracking

## Preface

This tutorial teaches a repeatable way to build commercial lead-generation websites for Living by CO.

It is not a generic website checklist. It is a working field manual for a specific operating model:

- Codex assists with coding, refactoring, debugging, tests, and documentation.
- GitHub stores the source code and tracks changes.
- Vercel hosts the site, deploys previews, manages domains, and runs server-side functions.
- Next.js provides the application framework.
- Odoo CRM receives structured lead records.
- Meta and Google tracking connect campaigns to visitor behaviour and lead quality.

The goal is not only to publish pages. The goal is to create a website machine that can support Living by CO projects, funnel sites, campaign landing pages, rich content, lead capture, source attribution, and sales follow-up.

By the end, you should be able to direct the build of a production-ready website, brief Codex clearly, review the code structure, understand how forms reach Odoo, and know what to test before launch.

## How to Use This Tutorial

Read Part I first if you need the system logic.

Use Part II to create the project foundation.

Use Part III to build the first funnel site.

Use Part IV to add rich content.

Use Part V to connect forms to Odoo.

Use Part VI to add tracking and attribution.

Use Part VII before production launch.

Use Part VIII when something breaks.

Use Part IX as a prompt library for Codex.

## Reader Assumptions

You do not need to become a full-time developer. You do need enough technical understanding to make good decisions, brief Codex properly, review outputs, and recognise when a developer should step in.

You should understand these topics by the end:

- What Codex can and cannot own.
- Why GitHub and Vercel are part of the workflow.
- How a Next.js website is structured.
- How images, videos, PDFs, galleries, and maps are added.
- How a lead form sends data to Odoo CRM.
- How campaign links preserve source data.
- How Meta and Google tracking fit into the system.
- How to brief Codex in a way that produces usable code.
- How to test the site before launch.
- How to avoid common mistakes.

---

# Part I. The System

## Chapter 1. What You Are Building

You are building a commercial website system, not a brochure website.

A brochure website mainly says:

- This is who we are.
- This is what we sell.
- Contact us.

A commercial website system does more:

- Presents the brand.
- Explains the offer.
- Handles rich content.
- Captures lead information.
- Records visitor source and campaign data.
- Sends structured leads into Odoo CRM.
- Tracks visitor behaviour.
- Gives sales useful context.
- Gives marketing learning data.
- Can be reused for future projects.

### The Core Flow

```text
Social post, ad, search result, newsletter, or referral link
  ↓
Visitor lands on the website
  ↓
Website records source and campaign information
  ↓
Visitor reads, scrolls, views rich content, clicks CTA
  ↓
Visitor submits a lead form
  ↓
Website sends lead data to Odoo CRM
  ↓
Meta and Google receive conversion signals
  ↓
Sales follows up
  ↓
Marketing learns what content and channels produce serious leads
```

### The Practical Stack

Codex is the production assistant. It writes code, fixes errors, creates components, reviews structure, and helps document the project.

GitHub is the code record. It stores every file, every change, and every branch.

Vercel is the hosting and deployment layer. It turns GitHub branches into live preview sites and production websites.

Next.js is the website framework. It provides pages, components, API routes, metadata, and performance features.

Odoo CRM is the commercial destination. It stores leads, qualification information, campaign data, ownership, and sales stage.

Meta and Google provide behaviour and campaign measurement. They help answer where visitors came from and what they did.

## Chapter 2. Why This Stack Is the Correct Direction

This stack is not the easiest visual-editing route. It is the stronger ownership route.

Compared with no-code website tools, this stack gives more control over:

- Design system.
- Page structure.
- Landing page variants.
- SEO.
- Form logic.
- Odoo integration.
- Tracking.
- Rich content architecture.
- Performance.
- Future AI workflows.
- Source ownership.
- Reusable components.

The trade-off is discipline. A coded stack needs clean prompts, testing, version control, and clear ownership.

### Use This Stack When

- The site is a serious commercial website.
- The site is a lead funnel.
- The site needs project-specific landing pages.
- The site must connect to Odoo CRM.
- Campaign attribution matters.
- Future AI-assisted lead qualification is likely.
- Reusable templates are valuable across Living by CO projects.

### Do Not Use This Stack When

- The goal is a disposable one-page site.
- The goal is only a visual mockup.
- Nobody will review technical output.
- The team needs a visual editor more than source ownership.

## Chapter 3. Roles and Responsibilities

Codex is not the owner of the website. Codex is a production assistant.

The human owner decides:

- Business goal.
- Brand direction.
- Audience.
- Offer.
- Copy quality.
- Image and media quality.
- Legal claims.
- CRM rules.
- Launch approval.

Codex helps with:

- Creating files.
- Writing components.
- Fixing errors.
- Building forms.
- Adding tracking placeholders.
- Structuring code.
- Writing tests.
- Improving mobile layout.
- Generating README documentation.
- Preparing deployment.

A developer may still be needed for:

- Complex Odoo authentication.
- Custom Odoo fields.
- Advanced security.
- Server-side tracking.
- Performance tuning.
- CMS integration.
- Code review before major launches.

### Rule of Ownership

Codex can produce the work. A human must approve the claims, commercial logic, data handling, and launch readiness.

---

# Part II. Setup

## Chapter 4. Required Accounts and Tools

### Required Accounts

- OpenAI account with Codex access.
- GitHub account.
- Vercel account.
- Odoo CRM access.
- Meta Business Manager.
- Google Analytics 4.
- Google Tag Manager.
- Google Search Console.
- Domain registrar access.

### Recommended Local Tools

- VS Code.
- Node.js.
- Git.
- GitHub Desktop, optional.
- Vercel CLI, optional.
- Codex CLI, optional.

### Minimum Working Setup

For the first project, the minimum stack is:

- GitHub repository.
- Next.js project.
- Vercel deployment.
- Odoo CRM API credentials or test credentials.
- Google Tag Manager container.
- Meta Pixel ID.

## Chapter 5. Choose the First Project

Do not start with the full Living by CO website.

Start with one narrow funnel site:

```text
tinyhomealgarve.com
```

This is the right first test because:

- It has a clear audience.
- It has a clear offer.
- It can be launched quickly.
- It can test forms and Odoo integration.
- It can test social CTAs.
- It is easier to review than a full corporate site.
- It can become the model for future funnels.

### Recommended Version 1 Scope

Pages:

- Home.
- HOMIE Models.
- Tiny Homes in the Algarve.
- Use Cases.
- Sustainability.
- FAQ.
- Contact.
- Thank You.

Version 1 must include:

- Responsive design.
- Rich hero image.
- Project image gallery.
- Lead form.
- Hidden source and campaign capture.
- Odoo CRM submission.
- Thank-you page.
- Brochure download logic.
- Meta and Google tracking placeholders.
- SEO metadata.
- Vercel deployment.

Version 1 should not include:

- Login portals.
- Client dashboards.
- Payment systems.
- Full blog engine.
- Complex multilingual system.
- Advanced AI scoring.
- Automated campaign management.

## Chapter 6. Repository Structure

A clean project structure makes Codex more useful and reduces future chaos.

Recommended structure:

```text
tinyhomealgarve-website/
  app/
    page.tsx
    homie-models/
      page.tsx
    tiny-homes-algarve/
      page.tsx
    use-cases/
      page.tsx
    sustainability/
      page.tsx
    faq/
      page.tsx
    contact/
      page.tsx
    thank-you/
      page.tsx
    api/
      lead/
        route.ts
    layout.tsx
    globals.css
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      CTASection.tsx
      TrustBlock.tsx
      FAQAccordion.tsx
    forms/
      LeadForm.tsx
    media/
      HeroImage.tsx
      ImageGallery.tsx
      VideoBlock.tsx
      DownloadBlock.tsx
      IconBenefitGrid.tsx
      ImageComparison.tsx
  lib/
    odoo.ts
    tracking.ts
    validation.ts
    utm.ts
    constants.ts
  public/
    images/
      brand/
      homie/
      cerro-mouro/
      icons/
      maps/
    downloads/
  .env.example
  package.json
  README.md
  next.config.ts
```

This structure works because:

- Pages are easy to find.
- Components are reusable.
- Media logic is separated.
- Form logic is separated.
- Odoo logic is isolated.
- Tracking logic is isolated.
- Codex can work on one part without damaging the whole project.
- Future projects can reuse the same structure.

## Chapter 7. Create the First Project

### Step 1. Create the Next.js App

Run:

```bash
npx create-next-app@latest tinyhomealgarve-website
```

Recommended choices:

- TypeScript: Yes.
- ESLint: Yes.
- Tailwind CSS: Yes.
- App Router: Yes.
- Import alias: Yes.

### Step 2. Run Locally

```bash
cd tinyhomealgarve-website
npm run dev
```

Open:

```text
http://localhost:3000
```

### Step 3. Create the GitHub Repository

In GitHub:

1. Create a new repository.
2. Name it `tinyhomealgarve-website`.
3. Set it to private while building.
4. Push the local project to GitHub.

Recommended branches:

- `main`: production-ready branch.
- `development`: working branch.
- `feature/landing-page`: landing page work.
- `feature/odoo-integration`: CRM connection work.
- `feature/tracking`: tracking work.
- `feature/rich-content`: image and media work.

### Step 4. Connect to Vercel

In Vercel:

1. Create a new project.
2. Import from GitHub.
3. Select the repository.
4. Confirm the Next.js framework settings.
5. Add environment variables.
6. Deploy.

Deployment flow:

```text
Feature branch
  ↓
Preview deployment
  ↓
Review and test
  ↓
Merge to development
  ↓
Final review
  ↓
Merge to main
  ↓
Production deployment
```

---

# Part III. Building the Website

## Chapter 8. Website Architecture

The website is made of pages and components.

Pages are routes. A route is a web address.

Examples:

- `/` is the homepage.
- `/homie-models` is the HOMIE Models page.
- `/contact` is the contact page.
- `/thank-you` is the thank-you page.

Components are reusable page blocks.

Examples:

- Header.
- Footer.
- Hero.
- LeadForm.
- ImageGallery.
- DownloadBlock.
- FAQAccordion.
- CTASection.

### Why Components Matter

If the same CTA appears on five pages, it should be one reusable component. If you improve it once, it improves everywhere.

## Chapter 9. Page Blueprint for the First Funnel

### Homepage Structure

1. Hero.
2. Problem or desire.
3. Why tiny homes in the Algarve.
4. HOMIE solution.
5. Use cases.
6. Models preview.
7. Sustainability and comfort.
8. Process.
9. FAQ.
10. Lead form.
11. Footer.

### Hero Example

Headline:

```text
Tiny homes for smart living in the Algarve
```

Subheading:

```text
Compact, efficient, beautifully built homes for guest use, rental income, downsizing, or a second base in Portugal.
```

Primary CTA:

```text
Request the brochure
```

Secondary CTA:

```text
Explore HOMIE models
```

### Use Case Cards

- Guest house.
- Rental unit.
- Private studio.
- Downsizing home.
- Family overflow space.
- Land activation.

## Chapter 10. Brand and Design System

The design system should feel calm, architectural, clear, and premium without becoming cold or overdesigned.

Living by CO visual direction:

- Warm off-white background.
- Dark charcoal or warm earth text.
- Muted beige accents.
- Large calm headlines.
- Generous spacing.
- Documentary photography.
- Minimal iconography.
- Clear CTA buttons.
- No clutter.
- No fake luxury styling.
- No generic real estate templates.

### Core Colour Logic

```text
Primary background: Light Mineral White, #F2F4F2
Primary dark: Warm Earth Brown, #584740
Neutral text: Neutral Graphite Grey, #575757
Supporting background: Soft Stone Beige, #C3BAAC
Accent: Muted Olive, #718A6F
```

Use the accent sparingly. The site should not become a green-themed interface.

### Typography Direction

Use Avenir if available. If unavailable, use a close system-safe alternative such as Inter or Helvetica.

Rules:

- Headlines should be light, calm, and spacious.
- Body text should be readable.
- Avoid heavy decorative fonts.
- Avoid all caps for long text.
- Avoid shadows, outlines, and visual tricks.
- Use hierarchy through size, spacing, and structure.

## Chapter 11. Codex Prompting Discipline

### Bad Prompt

```text
Make me a nice website.
```

This is too vague. Codex will make assumptions about style, scope, and structure.

### Better Prompt

```text
Build the homepage for tinyhomealgarve.com using Next.js, TypeScript, and Tailwind CSS.

Requirements:

- Use a calm Living by CO design system.
- Create sections for hero, use cases, model preview, sustainability, FAQ, and lead form.
- Use reusable components.
- Use responsive layout.
- Use placeholder images from /public/images/homie.
- Do not add Odoo integration yet.
- Do not invent certifications or legal claims.
- Run npm run build and report errors.
```

### Codex Task Template

Use this structure when briefing Codex:

```text
Task:
What needs to be built or changed.

Context:
Business purpose and brand logic.

Constraints:
What not to change.

Files:
Which files can be modified.

Acceptance criteria:
How we know the task is finished.

Testing:
What command or manual check must be run.
```

### Example Brief

```text
Task:
Create a reusable DownloadBlock component.

Context:
The website needs a brochure and floor plan download section for HOMIE leads.

Constraints:
Do not make brochure download the first action on the landing page. The main brochure should be shown after lead submission on the thank-you page.

Files:
components/media/DownloadBlock.tsx
app/thank-you/page.tsx

Acceptance criteria:
Download buttons work, copy is calm and clear, layout works on mobile.

Testing:
Run npm run build and test download links.
```

---

# Part IV. Rich Content

## Chapter 12. Rich Content Strategy

Rich content is not decoration. It should help the visitor understand:

- Place.
- Quality.
- Materials.
- Construction progress.
- Design intent.
- Comfort.
- Energy performance.
- Process.
- Trust.

For Living by CO, every image should answer one question:

```text
What does this help the visitor understand?
```

If the answer is unclear, do not use the image.

### Core Rich Content Types

- Hero images.
- Project photography.
- Interior renders.
- Construction progress images.
- Image galleries.
- Video embeds.
- Icons.
- PDF brochures.
- Floor plans.
- Maps.
- Diagrams.
- Charts.
- Material detail cards.
- Image comparison sections.

## Chapter 13. Media Folder Structure

Recommended `public` folder:

```text
public/
  images/
    brand/
      living-by-co-logo-dark.svg
      living-by-co-logo-white.svg
    homie/
      homie-hero.jpg
      homie-exterior-01.jpg
      homie-interior-01.jpg
      homie-detail-01.jpg
    cerro-mouro/
      cerro-mouro-hero.jpg
      cerro-mouro-site-progress-01.jpg
      cerro-mouro-site-progress-02.jpg
      cerro-mouro-loft-t2-interior.jpg
    icons/
      low-energy.svg
      low-carbon.svg
      comfort.svg
      prefab.svg
      natural-materials.svg
    maps/
      homie-algarve-map.jpg
      cerro-mouro-location-map.jpg
  downloads/
    homie-brochure.pdf
    homie-spec-sheet.pdf
    loft-t2-floorplan.pdf
```

### File Naming Rules

- Use lowercase.
- Use hyphens.
- Use clear names.
- Avoid spaces.
- Avoid random phone filenames.
- Avoid `final-final-final` naming.

Good file names:

```text
cerro-mouro-site-progress-01.jpg
homie-interior-kitchen-01.jpg
low-energy-icon.svg
loft-t2-floorplan.pdf
```

Bad file names:

```text
IMG_9981.jpeg
WhatsApp Image 2026-05-23 at 10.31.44.jpeg
finalfinalnew2.png
```

## Chapter 14. Adding Images in Next.js

Basic image component:

```tsx
import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      src="/images/homie/homie-hero.jpg"
      alt="HOMIE tiny home exterior in the Algarve"
      width={1600}
      height={1000}
      priority
      className="w-full rounded-2xl object-cover"
    />
  );
}
```

What each part means:

- `src` is the image path.
- `alt` describes the image for accessibility and search engines.
- `width` and `height` help layout stability.
- `priority` should be used only for the most important hero image.
- `object-cover` keeps photography visually clean inside its frame.

### Hero Image Checklist

- High quality.
- Strong composition.
- Not too busy.
- Good crop on mobile.
- No distorted architecture.
- No over-edited colour.
- Enough quiet space if text overlays are used.
- Aligned with Living by CO photography rules.

## Chapter 15. Image Galleries

Use galleries for:

- Project progress.
- Interiors.
- Exteriors.
- Construction phases.
- Materials.
- Communal spaces.
- Factory production.

Simple gallery component:

```tsx
import Image from 'next/image';

const images = [
  {
    src: '/images/cerro-mouro/site-progress-01.jpg',
    alt: 'Cerro Mouro infrastructure works in progress',
  },
  {
    src: '/images/cerro-mouro/site-progress-02.jpg',
    alt: 'Earthworks and road preparation at Cerro Mouro',
  },
  {
    src: '/images/cerro-mouro/site-progress-03.jpg',
    alt: 'Construction preparation at Cerro Mouro',
  },
];

export function ImageGallery() {
  return (
    <section className="bg-[#F2F4F2] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-light text-[#584740]">
          Progress on site
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Gallery rules:

- Use consistent ratios.
- Do not mix random crops.
- Do not overload pages with too many images.
- Use captions when the image explains a process.
- Use progress galleries to build trust.
- Compress images before launch.

## Chapter 16. PDFs, Brochures, and Gated Downloads

Use PDFs for:

- Brochures.
- Floor plans.
- Specification sheets.
- Buyer guides.
- Technical summaries.

Public folder:

```text
public/downloads/
```

Example files:

```text
public/downloads/homie-brochure.pdf
public/downloads/loft-t2-floorplan.pdf
```

Simple download button:

```tsx
<a
  href="/downloads/homie-brochure.pdf"
  download
  className="inline-flex rounded-full bg-[#584740] px-6 py-3 text-[#F2F4F2]"
>
  Download brochure
</a>
```

Recommended lead funnel logic:

```text
Visitor clicks Request brochure
  ↓
Lead form opens
  ↓
Visitor submits details
  ↓
Odoo lead is created
  ↓
Visitor lands on thank-you page
  ↓
Brochure download appears
```

Do not give away the main brochure before the lead capture moment unless the campaign intentionally prioritises reach over qualification.

## Chapter 17. Icons and Benefit Grids

Icons should clarify. They should not decorate.

Good topics:

- Low energy demand.
- Low carbon materials.
- Prefabrication.
- Comfort.
- Healthy indoor climate.
- Natural materials.
- Reduced waste.
- Predictable process.

Use SVG where possible.

Example icon card:

```tsx
import Image from 'next/image';

export function BenefitCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <Image
        src="/images/icons/low-energy.svg"
        alt="Low energy icon"
        width={40}
        height={40}
        className="mb-5"
      />
      <h3 className="mb-3 text-xl font-light text-[#584740]">
        Low energy demand
      </h3>
      <p className="text-[#575757]">
        Designed to reduce everyday energy use through insulation, careful
        detailing, and efficient systems.
      </p>
    </div>
  );
}
```

## Chapter 18. Video, Maps, and Comparison Blocks

### Video

Use video for:

- Factory production.
- Site progress.
- Project explanation.
- Location mood film.
- Short walkthroughs.

Avoid:

- Heavy autoplay video.
- Loud sound.
- Generic stock video.
- Slow mobile loading.
- Overproduced lifestyle clichés.

Video embed component:

```tsx
export function VideoBlock() {
  return (
    <section className="bg-[#F2F4F2] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="aspect-video overflow-hidden rounded-3xl">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Living by CO project video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
```

### Maps

Use maps to show:

- Project location.
- Nearby villages.
- Distance to coast.
- Distance to Lagos.
- Distance to airport.
- Local context.

Start with a static designed map image. Add interactive maps later only if the use case requires it.

### Image Comparisons

Use comparison blocks for:

- Before and after construction.
- Render versus current progress.
- Factory panel to finished home.
- Material layers.
- Raw site to finished vision.

Rule:

Clearly label what is real photography, what is a render, and what is future vision.

## Chapter 19. Rich Content Codex Prompt

```text
Add a rich content system to the website.

Requirements:

- Create /public/images with subfolders for brand, homie, cerro-mouro, icons, and maps.
- Create /public/downloads for PDFs.
- Create reusable components: HeroImage, ImageGallery, VideoBlock, DownloadBlock, IconBenefitGrid, ImageComparison.
- Use Next.js Image for local images.
- Use accurate alt text.
- Use responsive aspect ratios.
- Use object-cover for photography.
- Use SVG for icons and logos.
- Keep all styling aligned with Living by CO: calm, architectural, natural, restrained.
- Do not distort architecture or logos.
- Do not add fake claims.
- Run npm run build after changes.
- Explain where future media files should be placed.
```

---

# Part V. Forms and Odoo CRM

## Chapter 20. Lead Form Strategy

A website form is not just a contact form. It is a qualification and attribution tool.

### Visible Fields

- First name.
- Last name.
- Email.
- Phone or WhatsApp.
- Country.
- Project interest.
- Use case.
- Budget range.
- Timeline.
- Preferred contact method.
- Message.
- Consent checkbox.

### Hidden Fields

- `utm_source`.
- `utm_medium`.
- `utm_campaign`.
- `utm_content`.
- `utm_term`.
- `landing_page`.
- `referrer`.
- `fbclid`.
- `gclid`.
- `cta_clicked`.
- `form_source`.
- `first_seen_at`.
- `last_seen_at`.

### Useful Lead Example

```text
Name: John Smith
Country: Germany
Interest: HOMIE
Use case: Guest house or rental
Budget: €100k to €150k
Timeline: 3 to 6 months
Source: Instagram
Campaign: homie_guesthouse_may_2026
CTA clicked: Download brochure
Landing page: /tiny-homes-algarve
```

This is the standard Odoo should receive.

## Chapter 21. Odoo Integration Logic

Recommended flow:

```text
Visitor submits form
  ↓
Next.js sends data to /api/lead
  ↓
/api/lead validates data server-side
  ↓
/api/lead sends lead data to Odoo API
  ↓
Odoo creates crm.lead
  ↓
Website redirects to thank-you page
```

### Why Server-Side Matters

Odoo API keys must not be visible in the browser.

The browser sends the form to your own API route. The API route sends the data to Odoo privately.

### Environment Variables

Public variables, visible to the browser:

```env
NEXT_PUBLIC_SITE_URL=https://tinyhomealgarve.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Private variables, server-side only:

```env
ODOO_BASE_URL=https://your-odoo-domain.com
ODOO_DATABASE=your_database_name
ODOO_API_KEY=your_odoo_api_key
ODOO_USER_LOGIN=your_email@example.com
```

Rule:

Only `NEXT_PUBLIC_` variables are browser-visible. Never put Odoo API keys into `NEXT_PUBLIC_` variables.

## Chapter 22. Odoo Field Mapping

Recommended mapping:

```text
Lead name:
HOMIE Lead, First Name Last Name, Country

Contact name:
First Name + Last Name

Email:
email_from

Phone:
phone

Description:
Use case
Budget
Timeline
Message
Landing page
Referrer
UTM source
UTM medium
UTM campaign
UTM content
UTM term
CTA clicked
fbclid
gclid

Tags:
HOMIE
Tiny Home Algarve
Instagram
Facebook
Google
Organic
Budget range
Timeline range
```

Future custom fields:

- `x_project_interest`.
- `x_use_case`.
- `x_budget_range`.
- `x_timeline`.
- `x_utm_source`.
- `x_utm_medium`.
- `x_utm_campaign`.
- `x_utm_content`.
- `x_landing_page`.
- `x_cta_clicked`.
- `x_form_source`.
- `x_lead_quality_score`.

First version rule:

If custom fields are not ready, store the extra data in the lead description. Do not block launch because Odoo is not perfectly customised yet.

## Chapter 23. Anti-Spam and Error Handling

Minimum protection:

- Honeypot field.
- Consent checkbox.
- Server-side validation.
- Email format validation.
- Rate limiting.
- Suspicious submission logging.

Good error message to the visitor:

```text
Lead submission failed. Please try again or contact us directly.
```

Bad error message:

```text
Odoo API key invalid at https://your-odoo-domain.com.
```

Reason:

Do not expose technical details, private endpoints, tokens, or integration internals to visitors.

### Minimal API Route Shape

Use this as a structural reference, not final production code:

```ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload.consent) {
      return NextResponse.json(
        { ok: false, message: 'Consent is required.' },
        { status: 400 },
      );
    }

    if (!payload.email || !payload.email.includes('@')) {
      return NextResponse.json(
        { ok: false, message: 'A valid email is required.' },
        { status: 400 },
      );
    }

    // Call Odoo from the server only.
    // Do not expose Odoo credentials to browser code.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead submission failed', error);

    return NextResponse.json(
      { ok: false, message: 'Lead submission failed.' },
      { status: 500 },
    );
  }
}
```

---

# Part VI. Social Visitor Behaviour and Tracking

## Chapter 24. Campaign Links and UTM Structure

Every CTA link from social media should carry source information.

Instagram bio link:

```text
https://tinyhomealgarve.com/?utm_source=instagram&utm_medium=social&utm_campaign=homie_launch&utm_content=bio_link
```

Instagram carousel link:

```text
https://tinyhomealgarve.com/homie-models?utm_source=instagram&utm_medium=social&utm_campaign=homie_models&utm_content=carousel_post_01
```

Meta ad link:

```text
https://tinyhomealgarve.com/tiny-homes-algarve?utm_source=meta&utm_medium=paid_social&utm_campaign=homie_guest_house&utm_content=video_ad_01
```

### Naming Rules

Use these values consistently.

`utm_source`:

```text
instagram, facebook, linkedin, google, newsletter, partner, organic
```

`utm_medium`:

```text
social, paid_social, search, email, referral, organic
```

`utm_campaign`:

```text
homie_launch, homie_guesthouse, tiny_living_algarve, brochure_download
```

`utm_content`:

```text
carousel_01, reel_01, story_cta, bio_link, video_ad_01
```

## Chapter 25. Tracking Events

Track these website events:

- `page_view`.
- `cta_click`.
- `form_start`.
- `generate_lead`.
- `brochure_request`.
- `thank_you_view`.

Meta standard events:

- `PageView`.
- `ViewContent`.
- `Lead`.
- `Contact`.

Custom events:

- `CTA_Click`.
- `Form_Start`.
- `Brochure_Request`.
- `Project_Interest_HOMIE`.
- `High_Intent_Lead`.

Visitor journey example:

```text
Visitor lands from Instagram
  ↓
PageView fires
  ↓
Visitor scrolls
  ↓
CTA_Click fires
  ↓
Form_Start fires
  ↓
Lead fires after submission
  ↓
Thank You page loads
  ↓
Odoo lead exists
```

## Chapter 26. What the Dashboard Should Answer

The dashboard should not only show traffic. It should show commercial movement.

Questions to answer:

- Which post brought visitors?
- Which CTA got clicked?
- Which page converted best?
- Which campaign generated Odoo leads?
- Which country produces serious leads?
- Which budget range came from which campaign?
- Which leads booked calls?
- Which campaign produced cheap but weak leads?
- Which campaign produced fewer but better leads?

Minimum metrics:

- Sessions.
- Landing page views.
- CTA clicks.
- Form starts.
- Form submissions.
- Odoo leads created.
- Qualified leads.
- Calls booked.
- Cost per lead.
- Cost per qualified lead.

The serious metric:

```text
Cost per qualified Odoo lead
```

### UTM Capture Pattern

The site should store attribution for approximately 30 days so source data survives page navigation.

Core logic:

```text
Read URL parameters on page load
  ↓
Save UTMs, fbclid, gclid, landing page, and referrer
  ↓
Store in localStorage with timestamp
  ↓
Attach values to lead form payload
  ↓
Send values to Odoo description or custom fields
```

---

# Part VII. Production Readiness

## Chapter 27. First Week Execution Plan

### Day 1. Foundation

- Create GitHub repository.
- Create Next.js project.
- Connect to Vercel.
- Deploy blank project.
- Confirm domain strategy.

### Day 2. Design System and Homepage

- Build homepage.
- Build core components.
- Build page templates.
- Add brand colours and typography rules.

### Day 3. Pages and Rich Content

- Build subpages.
- Add copy.
- Add placeholder images.
- Add media folder structure.
- Add gallery, icon grid, and download components.
- Add SEO metadata.

### Day 4. Lead Form

- Build lead form.
- Add validation.
- Add thank-you page.
- Add hidden UTM capture.
- Add gated brochure download logic.

### Day 5. Odoo

- Connect Odoo test environment.
- Create test leads.
- Map fields.
- Fix failed submissions.
- Confirm sales team routing.

### Day 6. Tracking

- Install Google Tag Manager.
- Install Meta Pixel.
- Track CTA clicks.
- Track form starts.
- Track form submissions.
- Test events.

### Day 7. Launch QA

- Full QA.
- Mobile testing.
- Odoo testing.
- Tracking testing.
- Image testing.
- Domain testing.
- Launch first public version.

## Chapter 28. Launch Checklist

### Technical Checklist

- GitHub repository clean.
- Vercel production deployment live.
- Domain connected.
- SSL active.
- All pages tested.
- No console errors.
- No broken links.
- No broken images.
- No secrets exposed.
- README updated.
- Rollback path known.

### Design Checklist

- Mobile layout works.
- Images crop well.
- Logo is not distorted.
- Typography is consistent.
- Colours match the Living by CO palette.
- Spacing is calm and generous.
- Buttons are visible and clear.
- No cheap template feeling.

### CRM Checklist

- Lead form works.
- Odoo lead is created.
- Lead has name, email, phone, and message.
- Lead has project interest.
- Lead has source and campaign data.
- Lead has correct sales team or tag.
- Duplicate handling is considered.
- Fallback email notification is considered.

### Tracking Checklist

- UTMs captured.
- GTM active.
- GA4 active.
- Meta Pixel active.
- CTA click event fires.
- Form start event fires.
- Lead event fires.
- Thank-you page conversion fires.
- Test traffic appears in analytics.

### Legal and Privacy Checklist

- Privacy page present.
- Cookie logic considered.
- Consent checkbox present.
- Claims reviewed.
- No fake certifications.
- No misleading render presentation.
- GDPR implications reviewed with legal counsel before advanced tracking.

---

# Part VIII. Troubleshooting and Maintenance

## Chapter 29. Common Problems and Fixes

### Problem: The Site Works Locally but Fails on Vercel

Likely causes:

- Missing environment variables.
- Case-sensitive file path mismatch.
- Build script error.
- Wrong import path.
- Code uses browser-only APIs on the server.

Fix:

1. Read the Vercel build logs.
2. Ask Codex to fix the exact error message.
3. Run `npm run build` locally.

Codex prompt:

```text
The Vercel deployment failed with this build error:

[paste error]

Diagnose the cause, fix the code, explain the changed files, and make sure npm run build passes.
```

### Problem: Images Do Not Load

Likely causes:

- Wrong file path.
- Wrong folder.
- Spaces in file name.
- Case mismatch.
- Image not committed to GitHub.
- External image domain not configured.

Fix:

1. Check `/public/images`.
2. Use clean filenames.
3. Confirm the image exists in GitHub.
4. Use a path starting with `/images/`.

### Problem: Form Submits but No Odoo Lead Appears

Likely causes:

- Wrong Odoo credentials.
- Wrong Odoo model or endpoint.
- Validation blocks submission.
- Environment variables missing in Vercel.
- Odoo API response not handled correctly.

Fix:

1. Check Vercel function logs.
2. Test with a fake lead.
3. Confirm Odoo API credentials.
4. Confirm the server-side route receives data.
5. Do not expose error details to the browser.

### Problem: UTMs Are Missing in Odoo

Likely causes:

- UTM capture not implemented.
- UTMs not stored before form submit.
- Hidden fields not included in payload.
- Visitor navigated to another page and UTMs were lost.

Fix:

1. Store UTMs in localStorage for 30 days.
2. Include UTMs in the form payload.
3. Add a manual UTM test.

### Problem: Meta or Google Events Do Not Fire

Likely causes:

- GTM not installed.
- Wrong container ID.
- Consent mode blocking events.
- Events not triggered on button click.
- Thank-you page not reached.

Fix:

1. Use GTM preview mode.
2. Use Meta Pixel helper.
3. Use GA4 debug view.
4. Test from a clean browser session.

## Chapter 30. Maintenance Rhythm

### Weekly

- Check form submissions.
- Check Odoo lead quality.
- Check broken links.
- Review campaign source data.
- Review page conversion rates.
- Review top landing pages.

### Monthly

- Refresh images.
- Improve weak pages.
- Add new project progress content.
- Review SEO pages.
- Update FAQs.
- Check tracking health.
- Review privacy and consent logic.

### Quarterly

- Review full funnel performance.
- Review Odoo fields.
- Review campaign attribution.
- Review website speed.
- Review brand consistency.
- Plan next page templates.

---

# Part IX. Master Prompts

## Chapter 31. Master Codex Setup Prompt

```text
You are the senior full-stack developer for a Living by CO lead-generation website.

Your task is to build and maintain a production-ready Next.js website deployed on Vercel and connected to Odoo CRM.

Core stack:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Vercel.
- GitHub.
- Odoo CRM API.
- Google Tag Manager.
- Meta Pixel.

Business goal:

Generate qualified leads for Living by CO projects, starting with HOMIE tiny homes in the Algarve.

The website must:

- Look premium, calm, architectural, and practical.
- Work perfectly on mobile.
- Support rich content, including images, galleries, icons, video embeds, brochures, and floor plans.
- Capture visible lead qualification fields.
- Capture hidden attribution fields.
- Submit leads securely to Odoo CRM.
- Track visitor behaviour from social CTAs.
- Use environment variables correctly.
- Avoid exposing secrets.
- Pass npm run build.
- Include README setup and deployment instructions.

Never:

- Hardcode API keys.
- Expose private tokens to the browser.
- Invent legal claims.
- Invent certifications.
- Modify unrelated files without explaining why.
- Skip validation.
- Skip mobile checks.
- Distort architecture or logos.
- Use generic stock-photo style.

After every task:

- Summarize files changed.
- Explain the reasoning.
- List test steps.
- Run or recommend npm run build.
- Mention risks or unfinished items.
```

## Chapter 32. Master Media Prompt

```text
Add a rich content system to the website.

Requirements:

- Create /public/images with folders for brand, homie, cerro-mouro, icons, and maps.
- Create /public/downloads for PDFs.
- Create reusable components: HeroImage, ImageGallery, VideoBlock, DownloadBlock, IconBenefitGrid, ImageComparison.
- Use Next.js Image for local images.
- Use accurate alt text.
- Use responsive aspect ratios.
- Use object-cover for photography.
- Use SVG for icons and logos.
- Keep all styling aligned with Living by CO: calm, architectural, natural, restrained.
- Do not distort architecture or logos.
- Do not add fake claims.
- Run npm run build after changes.
- Explain where future media files should be placed.
```

## Chapter 33. Master Odoo Prompt

```text
Build the Odoo CRM lead submission system.

Requirements:

- Create /app/api/lead/route.ts.
- Validate form data server-side.
- Reject missing consent.
- Reject invalid email.
- Use environment variables for Odoo credentials.
- Do not expose credentials to the browser.
- Map form data to crm.lead.
- Include hidden UTM and attribution fields in the lead description.
- Return safe success or error responses.
- Log technical errors server-side.
- Add a manual test procedure.
- Run npm run build.
```

## Chapter 34. Master Tracking Prompt

```text
Add social visitor behaviour tracking.

Requirements:

- Add Google Tag Manager placeholder.
- Add Meta Pixel placeholder.
- Track page_view, cta_click, form_start, generate_lead, brochure_request, and thank_you_view.
- Capture UTMs, fbclid, gclid, landing_page, referrer, and CTA clicked.
- Store source data for 30 days.
- Include source data in form submissions.
- Do not add server-side tracking yet unless explicitly requested.
- Add a test checklist for GTM, GA4, Meta Pixel, and Odoo attribution.
```

---

# Appendix A. Production Brief Template

Use this before starting a new funnel site.

```text
Project name:

Domain:

Primary audience:

Primary offer:

Primary conversion:

Secondary conversion:

Required pages:

Required media:

Required downloads:

Required form fields:

Required Odoo tags:

Required campaigns:

Tracking requirements:

Legal or claim restrictions:

Launch deadline:

Known risks:
```

# Appendix B. First Funnel Acceptance Criteria

The first funnel is ready for launch when:

- Production URL loads correctly.
- Mobile layout has been checked on common phone widths.
- All pages have correct titles and metadata.
- Hero image and main galleries load.
- Lead form validates required fields.
- Consent is required.
- UTM values are captured and persist across navigation.
- Odoo receives a test lead with visible and hidden fields.
- Thank-you page displays the promised download.
- GTM and Meta events fire in test tools.
- No private Odoo values are visible in browser source.
- `npm run build` passes.
- README explains setup, environment variables, and deployment.

# Appendix C. Final System Summary

The operating model is:

```text
Codex
  ↓
GitHub
  ↓
Vercel
  ↓
Next.js website
  ↓
Rich content system
  ↓
Lead forms
  ↓
Odoo CRM
  ↓
Meta and Google tracking
  ↓
Sales feedback
```

This infrastructure gives Living by CO ownership, design control, lead capture, attribution, and future AI readiness. The first project should remain focused, prove the system, and become the repeatable model for future Living by CO funnels.
