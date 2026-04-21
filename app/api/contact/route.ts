import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2, "Imię jest za krótkie").max(100),
  phone: z.string().min(9, "Numer telefonu jest za krótki").max(20),
  service: z.enum(["landing", "business", "pro", "other"]),
  message: z.string().min(5, "Wiadomość jest za krótka").max(2000),
  website: z.string().optional(),
});

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true, // (Opcjonalnie) pozwala sprawdzić w panelu Upstash wykresy zablokowanych IP
});

export async function POST(req: NextRequest) {
  try {
    // 1. Sprawdzanie Rate Limit przez Upstash Redis
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(`contact_form_${ip}`);

    if (!success) {
      console.log(`[Rate Limit Zablokował] IP: ${ip}`);
      return NextResponse.json(
        { error: "Wysłałeś już zapytanie. Spróbuj ponownie za godzinę." },
        { status: 429 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Pusty payload." }, { status: 400 });
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane formularza." },
        { status: 400 },
      );
    }

    const { name, phone, service, message, website } = parsed.data;

    if (website) {
      console.log(`[Honeypot zablokował bota] IP: ${ip}, Wartość: ${website}`);
      // Zwracamy fałszywy sukces, żeby bot myślał, że formularz przeszedł
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const serviceLabels: Record<string, string> = {
      landing: "Landing page",
      business: "Wizytówka firmowa",
      pro: "Strona Pro",
      other: "Inne",
    };

    const cleanPhone = phone.replace(/\D/g, "");

    const emailFrom = process.env.EMAIL_FROM;
    if (!emailFrom) {
      throw new Error(`[ENV ERROR] Missing EMAIL_FROM`);
    }

    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
      throw new Error(`[ENV ERROR] Missing EMAIL_TO`);
    }
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Nowe pytanie od ${name} — ${serviceLabels[service]}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:12px;">
          <h2 style="color:#7c3aed;margin-bottom:24px;font-weight:bold;">Nowe zapytanie z rafbob.dev</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:12px 0;color:#666;width:120px;border-bottom:1px solid #eee;">Imię / Firma</td><td style="padding:12px 0;font-weight:600;color:#111;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:12px 0;color:#666;border-bottom:1px solid #eee;">Telefon</td><td style="padding:12px 0;font-weight:600;border-bottom:1px solid #eee;"><a href="tel:${phone}" style="color:#7c3aed;text-decoration:none;">${phone}</a></td></tr>
            <tr><td style="padding:12px 0;color:#666;border-bottom:1px solid #eee;">Usługa</td><td style="padding:12px 0;color:#111;border-bottom:1px solid #eee;">${serviceLabels[service]}</td></tr>
          </table>
          <p style="color:#444;white-space:pre-wrap;line-height:1.6;background:#fff;padding:16px;border-radius:8px;border:1px solid #eee;">${message}</p>
          
          <div style="margin-top:32px;text-align:center;">
            <a href="https://wa.me/${cleanPhone}" style="background:#25D366;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;box-shadow: 0 4px 14px rgba(37,211,102,0.3);">
              Napisz na WhatsApp
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Błąd po stronie serwera e-mail." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unhandled error in contact API:", err);
    return NextResponse.json(
      { error: "Wystąpił nieoczekiwany błąd." },
      { status: 500 },
    );
  }
}
