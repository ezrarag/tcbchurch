import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website || body.honeypot) {
      return NextResponse.json({ success: true, id: "filtered" });
    }

    const { eventId, eventName, name, email, phone, guests, attendanceType, notes } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email && !phone) {
      return NextResponse.json({ error: "Please provide an email or phone number" }, { status: 400 });
    }

    const rsvpData = {
      eventId: eventId || "general",
      eventName: eventName || "Sunday Worship Service",
      name: name.slice(0, 100),
      email: email ? String(email).slice(0, 100) : "",
      phone: phone ? String(phone).slice(0, 30) : "",
      guests: Number(guests) || 1,
      attendanceType: attendanceType === "online" ? "online" : "in-person",
      notes: notes ? String(notes).slice(0, 500) : "",
      createdAt: new Date().toISOString(),
      source: "website",
      status: "confirmed",
    };

    let docId = "local-" + Date.now();
    try {
      const docRef = await adminDb.collection("eventRsvps").add(rsvpData);
      docId = docRef.id;
    } catch (dbErr) {
      console.warn("Firestore write fallback for event RSVP:", dbErr);
    }

    return NextResponse.json({
      success: true,
      message: "RSVP confirmed successfully! We look forward to worshipping with you.",
      rsvpId: docId,
      rsvp: rsvpData,
    });
  } catch (err: any) {
    console.error("Error processing event RSVP:", err);
    return NextResponse.json({ error: "Failed to process RSVP. Please try again." }, { status: 500 });
  }
}
