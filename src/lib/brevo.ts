interface EmailRecipient {
  email: string;
  name?: string;
}

interface SendEmailParams {
  to: EmailRecipient[];
  subject: string;
  htmlContent: string;
  replyTo?: EmailRecipient;
}

export async function sendBrevoEmail({ to, subject, htmlContent, replyTo }: SendEmailParams) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || process.env.CONTACT_SENDER_EMAIL?.trim() || 'office@tkm-oil.ro';
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || process.env.CONTACT_SENDER_NAME?.trim() || 'TKM OIL GROUP';

  if (!apiKey) {
    console.warn('⚠️ [Brevo] BREVO_API_KEY is not set. Email will not be sent.');
    return { success: false, skipped: true, error: 'BREVO_API_KEY missing' };
  }

  const payload = {
    sender: {
      name: senderName,
      email: senderEmail
    },
    to,
    subject,
    htmlContent,
    ...(replyTo ? { replyTo } : {})
  };

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('❌ [Brevo API Error]:', response.status, errorData);
    throw new Error(errorData.message || `Eroare Brevo API (${response.status})`);
  }

  const result = await response.json();
  return { success: true, messageId: result.messageId };
}

export interface ContactData {
  formType?: 'vanzare_ulei' | 'colectare';
  clientType?: 'horeca' | 'persoana';
  name: string;
  phone: string;
  email: string;
  city?: string;
  company?: string;
  address?: string;
  oilType?: string;
  quantityLiters?: string;
  estimatedVolume?: string;
  message?: string;
}

export function generateAdminNotificationHtml(data: ContactData): string {
  const isVanzare = data.formType === 'vanzare_ulei';
  const formTitle = isVanzare ? 'Comandă / Ofertă Vânzare Ulei Alimentar' : 'Solicitare Colectare Ulei Uzat';
  const clientTypeLabel = data.clientType === 'horeca' ? 'HORECA / Operator Economic' : 'Persoană Fizică / Bloc';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(90deg, #051e14 0%, #093826 50%, #051e14 100%); padding: 28px 24px; text-align: center; border-bottom: 2px solid #c59b27; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { color: #c59b27; margin: 6px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; }
    .content { padding: 28px 24px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
    .table td.label { font-weight: 600; color: #4b5563; width: 35%; background: #f9fafb; border-right: 1px solid #f3f4f6; }
    .table td.value { color: #111827; font-weight: 500; }
    .message-box { background: #f9fafb; border-left: 4px solid #093826; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-top: 18px; font-size: 14px; color: #374151; line-height: 1.6; }
    .footer { padding: 18px 24px; background: #f9fafb; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${formTitle}</h1>
      <p>TKM OIL GROUP SRL • Notificare Nouă</p>
    </div>
    <div class="content">
      <p style="margin: 0 0 16px 0; font-size: 15px; color: #374151;">
        A fost înregistrată o nouă solicitare prin intermediul site-ului:
      </p>
      <table class="table">
        ${!isVanzare && data.clientType ? `
        <tr>
          <td class="label">Tip Client</td>
          <td class="value"><strong>${clientTypeLabel}</strong></td>
        </tr>` : ''}
        <tr>
          <td class="label">Nume & Prenume</td>
          <td class="value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Telefon</td>
          <td class="value"><a href="tel:${data.phone}" style="color: #093826; font-weight: 700; text-decoration: none;">${data.phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${data.email}" style="color: #093826; text-decoration: none;">${data.email}</a></td>
        </tr>
        ${data.company ? `
        <tr>
          <td class="label">Companie / Restaurant</td>
          <td class="value">${data.company}</td>
        </tr>` : ''}
        ${data.address ? `
        <tr>
          <td class="label">Adresă / Locație</td>
          <td class="value">${data.address}</td>
        </tr>` : ''}
        ${data.city ? `
        <tr>
          <td class="label">Oraș / Județ</td>
          <td class="value">${data.city}</td>
        </tr>` : ''}
        ${data.oilType ? `
        <tr>
          <td class="label">Tip Ulei Solicitat</td>
          <td class="value"><strong>${data.oilType}</strong></td>
        </tr>` : ''}
        ${data.quantityLiters ? `
        <tr>
          <td class="label">Cantitate Estimată</td>
          <td class="value">${data.quantityLiters}</td>
        </tr>` : ''}
        ${data.estimatedVolume ? `
        <tr>
          <td class="label">Volum Estimat</td>
          <td class="value">${data.estimatedVolume}</td>
        </tr>` : ''}
      </table>

      ${data.message ? `
      <div style="margin-top: 20px;">
        <strong style="font-size: 14px; color: #111827;">Mesaj / Detalii suplimentare:</strong>
        <div class="message-box">${data.message.replace(/\n/g, '<br/>')}</div>
      </div>` : ''}
    </div>
    <div class="footer">
      Email generat automat de pe site-ul TKM OIL GROUP SRL. Pentru a răspunde clientului, puteți da direct Reply la acest mesaj.
    </div>
  </div>
</body>
</html>
  `;
}

export function generateClientConfirmationHtml(data: ContactData): string {
  const isVanzare = data.formType === 'vanzare_ulei';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 24px; color: #1f2937; }
    .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(90deg, #051e14 0%, #093826 50%, #051e14 100%); padding: 32px 24px; text-align: center; border-bottom: 2px solid #c59b27; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .header p { color: #c59b27; margin: 6px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .content { padding: 32px 26px; }
    .badge { display: inline-block; background: rgba(14, 133, 87, 0.1); color: #093826; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 13px; margin-bottom: 16px; }
    .highlight-card { background: #f9fafb; border-left: 4px solid #c59b27; padding: 16px 18px; border-radius: 0 8px 8px 0; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #374151; }
    .contact-box { background: #051e14; color: #ffffff; border-radius: 10px; padding: 20px; text-align: center; margin-top: 24px; }
    .contact-box h3 { color: #c59b27; margin: 0 0 8px 0; font-size: 16px; }
    .contact-box p { color: rgba(255, 255, 255, 0.85); margin: 4px 0; font-size: 14px; }
    .contact-box a { color: #ffffff; font-weight: 700; text-decoration: underline; }
    .footer { padding: 18px 24px; background: #f9fafb; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>TKM OIL GROUP SRL</h1>
      <p>Confirmare Preluare Solicitare</p>
    </div>
    <div class="content">
      <span class="badge">✓ Solicitare înregistrată cu succes</span>
      
      <p style="font-size: 16px; margin: 0 0 14px 0; color: #111827;">
        Bună ziua, <strong>${data.name}</strong>,
      </p>

      <p style="font-size: 14px; line-height: 1.6; color: #374151; margin: 0 0 14px 0;">
        Vă mulțumim pentru interesul acordat serviciilor noastre. Solicitarea dumneavoastră privind <strong>${isVanzare ? 'vânzarea și distribuția de ulei alimentar' : 'colectarea uleiului alimentar uzat'}</strong> a fost transmisă cu succes către echipa noastră operativă.
      </p>

      <div class="highlight-card">
        <strong>Ce urmează:</strong><br/>
        Un reprezentant comercial TKM OIL GROUP va analiza datele transmise și vă va contacta în cel mai scurt timp (de regulă în maximum 2 ore în timpul programului de lucru) la numărul de telefon <strong>${data.phone}</strong>.
      </div>

      <div class="contact-box">
        <h3>Aveți o urgență operațională?</h3>
        <p>Ne puteți apela direct la dispecerat:</p>
        <p style="font-size: 18px; margin-top: 8px;">
          📞 <a href="tel:0748058141">0748 058 141</a>
        </p>
        <p style="font-size: 12px; color: rgba(255, 255, 255, 0.7); margin-top: 6px;">
          Email: <a href="mailto:office@tkm-oil.ro">office@tkm-oil.ro</a> • Luni - Vineri: 08:00 - 18:00
        </p>
      </div>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} TKM OIL GROUP SRL • Colectare și Valorificare Ulei Alimentar Uzat • Toate drepturile rezervate.
    </div>
  </div>
</body>
</html>
  `;
}
