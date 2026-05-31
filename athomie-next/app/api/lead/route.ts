import { NextResponse } from "next/server";

function isEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;

  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isEmail(data.email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  // Next step: forward to Odoo and fallback email provider using environment variables.
  return NextResponse.json({ ok: true, mode: "prototype" });
}
