import { NextResponse } from 'next/server';
import { 
  sendBrevoEmail, 
  generateAdminNotificationHtml, 
  generateClientConfirmationHtml, 
  ContactData 
} from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      phone, 
      email, 
      city, 
      company, 
      estimatedVolume, 
      message, 
      clientType, 
      honeypot,
      formType,
      address,
      oilType,
      quantityLiters
    } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Solicitare primită!' }, { status: 200 });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Vă rugăm să introduceți o adresă de email validă.' },
        { status: 400 }
      );
    }

    // Server-side validation
    if (formType === 'vanzare_ulei') {
      if (!name || !phone || !email || !company || !address || !oilType) {
        return NextResponse.json(
          { success: false, message: 'Vă rugăm să completați toate câmpurile obligatorii (Nume, Telefon, Email, Nume Firmă, Adresă, Tip Ulei).' },
          { status: 400 }
        );
      }
    } else {
      if (!name || !phone || !email || (!city && !address)) {
        return NextResponse.json(
          { success: false, message: 'Vă rugăm să completați toate câmpurile obligatorii (Nume, Telefon, Email, Adresă).' },
          { status: 400 }
        );
      }
    }

    const contactData: ContactData = {
      formType: formType === 'vanzare_ulei' ? 'vanzare_ulei' : 'colectare',
      clientType: clientType === 'persoana' ? 'persoana' : 'horeca',
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city?.trim(),
      company: company?.trim(),
      address: address?.trim(),
      oilType: oilType?.trim(),
      quantityLiters: quantityLiters?.trim(),
      estimatedVolume: estimatedVolume?.trim(),
      message: message?.trim(),
    };

    console.log(`[Contact API] Cerere nouă de la ${contactData.name} (${contactData.email})`);

    const adminEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'office@tkm-oil.ro';
    const isVanzare = contactData.formType === 'vanzare_ulei';
    const adminSubject = isVanzare
      ? `[Ofertă Vânzare Ulei] Solicitare nouă: ${contactData.company || contactData.name}`
      : `[Colectare Ulei Uzat] Solicitare nouă: ${contactData.name} (${contactData.clientType === 'horeca' ? 'HoReCa' : 'Pers. Fizică'})`;

    // 1. Send Admin Notification email to office@tkm-oil.ro
    const adminNotificationHtml = generateAdminNotificationHtml(contactData);
    await sendBrevoEmail({
      to: [{ email: adminEmail, name: 'TKM OIL GROUP' }],
      subject: adminSubject,
      htmlContent: adminNotificationHtml,
      replyTo: { email: contactData.email, name: contactData.name }
    });

    // 2. Send Client Confirmation email to user
    try {
      const clientConfirmationHtml = generateClientConfirmationHtml(contactData);
      await sendBrevoEmail({
        to: [{ email: contactData.email, name: contactData.name }],
        subject: 'Confirmare solicitare - TKM OIL GROUP SRL',
        htmlContent: clientConfirmationHtml,
        replyTo: { email: adminEmail, name: 'TKM OIL GROUP' }
      });
    } catch (clientEmailErr) {
      console.error('⚠️ [Brevo] Nu s-a putut trimite confirmarea către client:', clientEmailErr);
      // Non-blocking: we still return success because admin notification was sent
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitarea a fost înregistrată cu succes. Echipa noastră vă va contacta în scurt timp.' 
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('❌ [Contact API Error]:', error);
    const errorMessage = error instanceof Error ? error.message : 'A apărut o eroare la trimiterea mesajului.';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
