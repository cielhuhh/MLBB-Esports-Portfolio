"use server";

type ContactState = { ok: boolean; error: string };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Missing fields" };
  }

  try {
    // 1) Discord webhook (opsional)
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📩 **New Contact**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
        }),
      });
    }

    // 2) SMTP (opsional)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        subject: "New contact — MLBB Esports Portfolio",
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
    }

    return { ok: true, error: "" };
  } catch {
    return { ok: false, error: "Failed to submit" };
  }
}
