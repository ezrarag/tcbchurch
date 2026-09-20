import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website || body.honeypot) {
      return NextResponse.json({ success: true, id: "filtered" });
    }

    const { type, name, email, phone, message, private: isPrivate } = body;

    // Strict validation
    if (!type || !["visit", "contact", "prayer"].includes(type)) {
      return NextResponse.json({ error: "Invalid submission type" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length > 2000) {
      return NextResponse.json({ error: "Message is required (max 2000 chars)" }, { status: 400 });
    }

    const docData = {
      type,
      name: (name || "Anonymous").slice(0, 100),
      email: email ? String(email).slice(0, 100) : "",
      phone: phone ? String(phone).slice(0, 30) : "",
      message: String(message).slice(0, 2000),
      private: Boolean(isPrivate),
      createdAt: new Date().toISOString(),
      handled: false,
    };

    const docRef = await adminDb.collection("submissions").add(docData);

    // Pluggable Email Dispatcher Notification (Resend / Nodemailer / Stub)
    const emailProvider = process.env.EMAIL_PROVIDER || "stub";
    const resendKey = process.env.RESEND_API_KEY;
    const inboxEmail = process.env.CHURCH_INBOX_EMAIL || "office@tcb-church.com";

    if (emailProvider === "resend" && resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "TCBC Website <noreply@tcb-church.com>",
            to: [inboxEmail],
            subject: `New ${type.toUpperCase()} Submission from ${docData.name}`,
            text: `Type: ${type}\nName: ${docData.name}\nEmail: ${docData.email}\nPhone: ${docData.phone}\nPrivate: ${docData.private}\nMessage:\n${docData.message}`,
          }),
        });
      } catch (emailErr) {
        console.warn("Resend email dispatch error:", emailErr);
      }
    } else {
      console.log(`[STUB EMAIL DISPATCHER] Sent notification for submission ${docRef.id} to ${inboxEmail}`);
    }

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (err) {
    console.error("Error creating submission:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
