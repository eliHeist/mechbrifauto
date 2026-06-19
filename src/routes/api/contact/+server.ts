import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACT_TO
} from '$env/static/private';

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/** Strip HTML tags and trim whitespace — prevent injection via message body */
function sanitize(str = '') {
    return String(str).replace(/<[^>]*>/g, '').trim();
}

/** Validate a basic phone pattern — digits, spaces, +, dashes, parens */
function isValidPhone(str = '') {
    return /^[\d\s+\-().]{7,20}$/.test(str.trim());
}

/** Validate email loosely */
function isValidEmail(str = '') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
}

// ─── NODEMAILER TRANSPORTER ───────────────────────────────────────────────────

function createTransporter() {
    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,   // true for 465, false for 587/25
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        },
        tls: {
            rejectUnauthorized: true           // flip to false only during local dev if needed
        }
    });
}

// ─── EMAIL TEMPLATES ──────────────────────────────────────────────────────────

/**
 * HTML email sent to Mechbrif staff — formatted notification.
 */
type StaffEmailParams = {
  name?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  serviceMode?: string;
  service?: string;
  message?: string;
};

function buildStaffEmail({ name, phone, email, vehicle, serviceMode, service, message }: StaffEmailParams) {
    const modeLabel = serviceMode === 'onsite' ? 'On-Site / Mobile' : 'Visit Garage';
    const modeColour = serviceMode === 'onsite' ? '#f59e0b' : '#22c55e';

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Booking Request — Mechbrif Auto</title>
</head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:'Inter',Arial,sans-serif;color:#E8E8E8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#141414;padding:32px 40px;border-top:3px solid #DC2626;">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#DC2626;font-weight:600;">
                New Booking Request
              </p>
              <h1 style="margin:0;font-size:28px;font-weight:900;text-transform:uppercase;color:#ffffff;letter-spacing:0.02em;">
                Mechbrif Auto
              </h1>
            </td>
          </tr>

          <!-- Service mode badge -->
          <tr>
            <td style="background:#0D0D0D;padding:24px 40px 0;">
              <span style="display:inline-block;background:${modeColour};color:#000;
                           font-size:10px;font-weight:700;letter-spacing:0.3em;
                           text-transform:uppercase;padding:6px 14px;">
                ${modeLabel}
              </span>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="background:#0D0D0D;padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">

                ${buildRow('Name', name)}
                ${buildRow('Phone / WhatsApp', phone)}
                ${email ? buildRow('Email', email) : ''}
                ${vehicle ? buildRow('Vehicle', vehicle) : ''}
                ${buildRow('Service Requested', service)}

              </table>
            </td>
          </tr>

          <!-- Message -->
          ${message ? `
          <tr>
            <td style="background:#0D0D0D;padding:24px 40px 0;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#666;">
                Additional Details
              </p>
              <div style="background:#141414;border-left:2px solid #DC2626;padding:16px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#ccc;">
                  ${sanitize(message).replace(/\n/g, '<br/>')}
                </p>
              </div>
            </td>
          </tr>` : ''}

          <!-- Quick reply links -->
          <tr>
            <td style="background:#0D0D0D;padding:32px 40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  ${phone ? `
                  <td style="padding-right:12px;">
                    <a href="https://wa.me/${phone.replace(/\D/g, '')}"
                       style="display:inline-block;background:#DC2626;color:#fff;
                              font-size:11px;font-weight:700;letter-spacing:0.2em;
                              text-transform:uppercase;padding:12px 24px;text-decoration:none;">
                      WhatsApp Client
                    </a>
                  </td>` : ''}
                  ${email ? `
                  <td>
                    <a href="mailto:${email}"
                       style="display:inline-block;border:1px solid #333;color:#999;
                              font-size:11px;font-weight:700;letter-spacing:0.2em;
                              text-transform:uppercase;padding:12px 24px;text-decoration:none;">
                      Reply by Email
                    </a>
                  </td>` : ''}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#141414;padding:20px 40px;border-top:1px solid #1f1f1f;">
              <p style="margin:0;font-size:11px;color:#444;line-height:1.5;">
                Mechbrif Auto · Plot 7, Namugongo Kyaliwajjala, Kampala ·
                <a href="https://mechbrifauto.com" style="color:#DC2626;text-decoration:none;">
                  mechbrifauto.com
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildRow(label: string, value?: string) {
    return `
    <tr>
      <td style="padding-bottom:20px;vertical-align:top;width:40%;">
        <p style="margin:0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;">
          ${label}
        </p>
      </td>
      <td style="padding-bottom:20px;vertical-align:top;">
        <p style="margin:0;font-size:16px;font-weight:600;color:#ffffff;">
          ${sanitize(value) || '—'}
        </p>
      </td>
    </tr>`;
}

/**
 * Plain-text acknowledgement sent to the client (if they provided an email).
 */
type ClientEmailParams = { name?: string };

function buildClientEmail({ name }: ClientEmailParams) {
  const firstName = sanitize(name).split(' ')[0] || 'there';
    return {
        subject: 'We got your booking request — Mechbrif Auto',
        text: `Hi ${firstName},

Thanks for getting in touch with Mechbrif Auto.

We've received your booking request and will confirm your appointment via WhatsApp or phone call within the hour (Mon-Sat, 8AM-6PM).

If it's urgent, WhatsApp us directly: +256 759 158049

See you soon,
The Mechbrif Team
Plot 7, Namugongo Kyaliwajjala, Kampala
mechbrifauto.com`,

        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:'Inter',Arial,sans-serif;color:#E8E8E8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        <tr>
          <td style="background:#141414;padding:32px 40px;border-top:3px solid #DC2626;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#DC2626;font-weight:600;">
              Booking Received
            </p>
            <h1 style="margin:0;font-size:26px;font-weight:900;text-transform:uppercase;color:#fff;">
              We've Got You, ${firstName}.
            </h1>
          </td>
        </tr>
        <tr>
          <td style="background:#0D0D0D;padding:32px 40px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#aaa;">
              Thanks for reaching out. We'll confirm your appointment via
              <strong style="color:#fff;">WhatsApp or phone</strong> within the hour
              during working hours (Mon-Sat, 8AM-6PM).
            </p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#777;">
              Need us sooner? Message us directly on WhatsApp.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#0D0D0D;padding:0 40px 32px;">
            <a href="https://wa.me/256759158049"
               style="display:inline-block;background:#DC2626;color:#fff;
                      font-size:11px;font-weight:700;letter-spacing:0.2em;
                      text-transform:uppercase;padding:14px 28px;text-decoration:none;">
              WhatsApp Us Now
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#141414;padding:20px 40px;border-top:1px solid #1f1f1f;">
            <p style="margin:0;font-size:11px;color:#444;line-height:1.5;">
              Mechbrif Auto · Plot 7, Namugongo Kyaliwajjala, Kampala ·
              <a href="https://mechbrifauto.com" style="color:#DC2626;text-decoration:none;">
                mechbrifauto.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
    };
}

// ─── POST HANDLER ─────────────────────────────────────────────────────────────

export async function POST({ request }) {
    // ── Parse body ─────────────────────────────────────────────────────────────
    let body;
    try {
        body = await request.json();
    } catch {
        return json({ success: false, error: 'Invalid request body.' }, { status: 400 });
    }

    const { name, phone, email, vehicle, serviceMode, service, message } = body;

    // ── Validate required fields ────────────────────────────────────────────────
    if (!name?.trim()) {
        return json({ success: false, error: 'Name is required.' }, { status: 422 });
    }
    if (!phone?.trim() || !isValidPhone(phone)) {
        return json({ success: false, error: 'A valid phone number is required.' }, { status: 422 });
    }
    if (!service?.trim()) {
        return json({ success: false, error: 'Please select a service.' }, { status: 422 });
    }
    if (email && !isValidEmail(email)) {
        return json({ success: false, error: 'Please enter a valid email address.' }, { status: 422 });
    }

    // ── Sanitize ────────────────────────────────────────────────────────────────
    const data = {
        name: sanitize(name),
        phone: sanitize(phone),
        email: sanitize(email || ''),
        vehicle: sanitize(vehicle || ''),
        serviceMode: serviceMode === 'onsite' ? 'onsite' : 'garage',
        service: sanitize(service),
        message: sanitize(message || '')
    };

    // ── Send emails ─────────────────────────────────────────────────────────────
    try {
        const transporter = createTransporter();
        await transporter.verify(); // throws if SMTP config is wrong

        // 1. Staff notification
        await transporter.sendMail({
            from: `"Mechbrif Website" <${SMTP_FROM}>`,
            to: CONTACT_TO,
            replyTo: data.email || data.phone,
            subject: `New Booking: ${data.service} — ${data.name}`,
            html: buildStaffEmail(data)
        });

        // 2. Client acknowledgement (only if they gave an email)
        if (data.email) {
            const clientMail = buildClientEmail(data);
            await transporter.sendMail({
                from: `"Mechbrif Auto" <${SMTP_FROM}>`,
                to: data.email,
                subject: clientMail.subject,
                text: clientMail.text,
                html: clientMail.html
            });
        }

        return json({ success: true });

    } catch (err) {
        console.error('[contact/api] Email send failed:', err);
        return json(
            { success: false, error: 'Failed to send message. Please call or WhatsApp us directly.' },
            { status: 500 }
        );
    }
}