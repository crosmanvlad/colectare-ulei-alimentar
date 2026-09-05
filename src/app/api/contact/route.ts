import { NextResponse } from 'next/server';

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

    // Server-side validation
    if (formType === 'vanzare_ulei') {
      if (!name || !phone || !email || !company || !address || !oilType) {
        return NextResponse.json(
          { success: false, message: 'Vă rugăm să completați toate câmpurile obligatorii (Nume, Telefon, Email, Nume Firmă, Adresă, Tip Ulei).' },
          { status: 400 }
        );
      }
    } else {
      if (!name || !phone || !email || !city) {
        return NextResponse.json(
          { success: false, message: 'Vă rugăm să completați toate câmpurile obligatorii (Nume, Telefon, Email, Oraș).' },
          { status: 400 }
        );
      }
    }

    // Log contact form submission in server log
    console.log(`--- NOUĂ SOLICITARE (${formType === 'vanzare_ulei' ? 'VÂNZARE ȘI DISTRIBUȚIE ULEI' : 'PRELUARE ULEI UZAT'}) ---`);
    if (clientType) console.log(`Tip Client: ${clientType}`);
    console.log(`Nume: ${name}`);
    console.log(`Telefon: ${phone}`);
    console.log(`Email: ${email}`);
    if (city) console.log(`Oraș/Județ: ${city}`);
    if (company) console.log(`Companie/Firmă: ${company}`);
    if (address) console.log(`Adresă: ${address}`);
    if (oilType) console.log(`Tip Ulei Solicitat: ${oilType}`);
    if (quantityLiters) console.log(`Cantitate (Litri): ${quantityLiters}`);
    if (estimatedVolume) console.log(`Volum Estimat: ${estimatedVolume}`);
    if (message) console.log(`Mesaj: ${message}`);
    console.log('-----------------------------------------');

    // Here you can integrate with Resend, SendGrid, EmailJS or Web3Forms
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitarea a fost înregistrată cu succes. Echipa noastră vă va contacta în scurt timp.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Eroare procesare contact:', error);
    return NextResponse.json(
      { success: false, message: 'A apărut o eroare de server. Vă rugăm încercați din nou.' },
      { status: 500 }
    );
  }
}
