import { NextResponse } from "next/server";
import { getFacebookEvents } from "@/lib/facebook/client";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "6", 10);
  const events = await getFacebookEvents(limit);
  return NextResponse.json({ success: true, count: events.length, events });
}
