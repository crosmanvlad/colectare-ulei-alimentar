import type { Metadata, Viewport } from 'next';
import '../styles/globals.scss';

export const viewport: Viewport = {
  themeColor: '#040d0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'TKM OIL GROUP SRL | Colectare Ulei Uzat Alimentar & Separatoare Grăsimi',
  description: 'TKM OIL GROUP SRL - „Ulei uzat, resurse pentru viitor”. Colectare autorizată ANPM de ulei uzat alimentar și grăsimi pentru restaurante, HORECA și persoane fizice. Recipienti gratuiți, certificat mediu pe loc și plată pe loc. Telefon: 0746 405 259.',
  keywords: [
    'TKM OIL GROUP SRL',
    'ulei uzat resurse pentru viitor',
    'colectare ulei uzat',
    'colectare ulei alimentar',
    'colectare separatoare grasimi',
    'plata pe loc ulei uzat',
    'schimb si valorificare recipienti',
    'www.colectareuleialimentar.ro',
    'office@tkm-oil.ro',
    '0746405269'
  ],
  authors: [{ name: 'TKM OIL GROUP SRL' }],
  creator: 'TKM OIL GROUP SRL',
  publisher: 'TKM OIL GROUP SRL',
  metadataBase: new URL('https://www.colectareuleialimentar.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TKM OIL GROUP SRL | Colectare Ulei Uzat Alimentar & Separatoare Grăsimi',
    description: 'TKM OIL GROUP SRL - Ulei uzat, resurse pentru viitor. Colectare autorizată ANPM, recipienți gratuiți, eliberare certificat mediu și plată pe loc.',
    url: 'https://www.colectareuleialimentar.ro',
    siteName: 'TKM OIL GROUP SRL',
    images: [
      {
        url: '/images/tkm/hero-tkm.png',
        width: 1200,
        height: 675,
        alt: 'TKM OIL GROUP SRL Colectare si Reciclare Ulei Uzat',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TKM OIL GROUP SRL | Colectare Ulei Uzat Alimentar',
    description: 'Colectare autorizată ANPM ulei uzat alimentar și separatoare de grăsimi pentru HORECA & Persoane Fizice.',
    images: ['/images/tkm/hero-tkm.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RecyclingCenter',
    name: 'TKM OIL GROUP SRL',
    alternateName: 'Colectare Ulei Alimentar Uzat',
    slogan: 'Ulei uzat, resurse pentru viitor',
    image: 'https://www.colectareuleialimentar.ro/images/tkm/hero-tkm.png',
    '@id': 'https://www.colectareuleialimentar.ro',
    url: 'https://www.colectareuleialimentar.ro',
    telephone: '+40746405269',
    email: 'office@tkm-oil.ro',
    priceRange: 'Gratuit / Bonificație pe Loc',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'București',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.4323,
      longitude: 26.1063,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: 'RO',
    description: 'Serviciu național autorizat de TKM OIL GROUP SRL pentru colectarea, transportul și reciclarea ecologică a uleiurilor uzate vegetale și curățarea separatoarelor de grăsimi.',
  };

  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
