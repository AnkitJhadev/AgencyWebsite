import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, plan } = body as {
    name?: string;
    email?: string;
    message?: string;
    plan?: string;
  };

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const subject = `New message from ${name}${plan ? ` — interested in ${plan} plan` : ""}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${plan ? `<p><strong>Plan of interest:</strong> ${plan}</p>` : ""}
    <hr/>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Dev mode — log submission and succeed so the UI can be tested locally.
    // Add RESEND_API_KEY=re_xxxx to .env.local to enable real email sending.
    console.log("[Contact Form — dev mode, no RESEND_API_KEY set]", {
      name,
      email,
      plan,
      message,
    });
    return NextResponse.json({ success: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "CompanyApp <noreply@companyapp.dev>",
      to: "hello@companyapp.com",
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
