import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const cookieName = "homie_site_access";

function passwordPage(error = false) {
  return new NextResponse(
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Private preview | HOMIE</title>
        <style>
          :root {
            color-scheme: light;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #f7f5ef;
            color: #111;
          }

          * {
            box-sizing: border-box;
          }

          body {
            display: grid;
            min-height: 100svh;
            place-items: center;
            margin: 0;
            padding: 24px;
            background:
              linear-gradient(135deg, rgba(247, 245, 239, 0.96), rgba(232, 226, 215, 0.92)),
              radial-gradient(circle at 80% 12%, rgba(216, 184, 134, 0.24), transparent 28%);
          }

          main {
            width: min(100%, 420px);
            border: 1px solid rgba(17, 17, 17, 0.12);
            background: rgba(255, 253, 250, 0.86);
            box-shadow: 0 26px 90px rgba(47, 39, 31, 0.12);
            padding: clamp(28px, 6vw, 42px);
          }

          strong {
            display: block;
            margin-bottom: 28px;
            font-size: 1.8rem;
            letter-spacing: 0.12em;
          }

          h1 {
            margin: 0 0 12px;
            font-size: clamp(2rem, 8vw, 3rem);
            line-height: 0.98;
          }

          p {
            margin: 0 0 24px;
            color: #5e554f;
            line-height: 1.5;
          }

          label {
            display: grid;
            gap: 8px;
            margin-bottom: 14px;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          input {
            width: 100%;
            border: 1px solid rgba(17, 17, 17, 0.2);
            background: #fffdfa;
            color: #111;
            font: inherit;
            padding: 14px;
          }

          button {
            width: 100%;
            min-height: 48px;
            border: 1px solid #634136;
            background: #634136;
            color: #fffdfa;
            cursor: pointer;
            font: inherit;
            font-weight: 900;
          }

          .error {
            color: #8a2f22;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <main>
          <strong>HOMIE</strong>
          <h1>Private preview.</h1>
          <p>This site is temporarily password protected while the public launch is prepared.</p>
          ${error ? `<p class="error">Incorrect password. Try again.</p>` : ""}
          <form method="post">
            <label>
              Password
              <input name="password" type="password" autocomplete="current-password" autofocus required />
            </label>
            <button type="submit">Enter site</button>
          </form>
        </main>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      }
    }
  );
}

export default async function proxy(request: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    return intlMiddleware(request);
  }

  const hasAccess = request.cookies.get(cookieName)?.value === sitePassword;

  if (hasAccess) {
    return intlMiddleware(request);
  }

  if (request.method === "POST") {
    const formData = await request.formData().catch(() => null);
    const password = formData?.get("password");

    if (password === sitePassword) {
      const response = NextResponse.redirect(request.nextUrl, 303);
      response.cookies.set(cookieName, sitePassword, {
        httpOnly: true,
        sameSite: "lax",
        secure: request.nextUrl.protocol === "https:",
        maxAge: 60 * 60 * 24 * 14,
        path: "/"
      });

      return response;
    }

    return passwordPage(true);
  }

  return passwordPage();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)"
};
