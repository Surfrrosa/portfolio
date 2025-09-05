import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime

const resend = new Resend(process.env.RESEND_API_KEY!);
const TO = process.env.CONTACT_TO_EMAIL!;
const FROM = process.env.CONTACT_FROM_EMAIL!; // must be a verified sender in Resend

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}