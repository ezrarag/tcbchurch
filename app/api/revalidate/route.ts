import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-revalidate-secret") || req.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.REVALIDATION_SECRET || "tcbchurch_revalidate_secret_2026";

    if (secret !== expectedSecret) {
      return NextResponse.json({ error: "Invalid revalidation secret" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const path = body.path || "/";

    revalidatePath(path, "page");

    return NextResponse.json({ revalidated: true, path, now: new Date().toISOString() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
