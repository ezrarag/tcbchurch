import { NextResponse } from "next/server";
import { getFacebookSermons } from "@/lib/facebook/client";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const sermons = await getFacebookSermons(limit);
  return NextResponse.json({ success: true, count: sermons.length, sermons });
}
