import type { Metadata, Viewport } from 'next';
import '../styles/globals.scss';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'TKM OIL GROUP | Colectare Ulei Uzat Alimentar & Separatoare Grăsimi',
    template: '%s | TKM OIL GROUP',
  },
  description: 'TKM OIL GROUP SRL - „Ulei uzat, resurse pentru viitor”. Serviciu autorizat ANPM de colectare gratuită ulei uzat alimentar, golire separatoare grăsimi și distribuție ulei proaspăt pentru restaurante, HoReCa și persoane fizice. Recipiente gratuite, Anexa 3 pe loc și plată directă. Dispecerat: 0748 058 141.',
  keywords: [
    'TKM OIL GROUP SRL',
    'colectare ulei uzat',
    'colectare ulei alimentar',
    'colectare ulei alimentar uzat bucuresti',
    'colectare ulei uzat ilfov',
    'colectare separatoare grasimi',
    'curatare separatoare grasimi bucuresti',
    'ulei uzat restaurante horeca',
    'recipiente gratuite ulei uzat',
    'anexa 3 deseurilor nepericuloase',
    'autorizatie mediu ANPM colectare ulei',
    'plata pe loc ulei uzat',
    'schimb ulei uzat cu ulei proaspat',
    'furnizor ulei floarea soarelui horeca',
    'furnizor ulei palmier bucatarii profesionale',
    'reciclare ulei prajit bucuresti',
    '0748058141',
    'colectareuleialimentar.ro'
  ],
  authors: [{ name: 'TKM OIL GROUP SRL', url: 'https://www.colectareuleialimentar.ro' }],
  creator: 'TKM OIL GROUP SRL',
  publisher: 'TKM OIL GROUP SRL',
  metadataBase: new URL('https://www.colectareuleialimentar.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TKM OIL GROUP | Colectare Ulei Uzat Alimentar & Separatoare Grăsimi',
    description: 'Colectare autorizată ANPM de ulei alimentar uzat și separatoare de grăsimi pentru restaurante, cantine și unități HoReCa. Recipienți gratuiți, Anexa 3 pe loc și plată pe loc.',
    url: 'https://www.colectareuleialimentar.ro',
    siteName: 'TKM OIL GROUP SRL',
    images: [
      {
        url: '/images/tkm/hero-tkm.png',
        width: 1200,
        height: 675,
        alt: 'TKM OIL GROUP SRL - Colectare și Reciclare Ulei Uzat Alimentar',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TKM OIL GROUP | Colectare Ulei Uzat Alimentar & Separatoare Grăsimi',
    description: 'Colectare autorizată ANPM ulei uzat alimentar și separatoare de grăsimi pentru HoReCa & Persoane Fizice. Recipiente gratuite și plată pe loc.',
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
  verification: {
    google: '1nfCUM1pGwE4Mgp-f7AcjQKFXQCam4eZWZBE-zmhzvA',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
    alternateName: ['TKM Oil', 'Colectare Ulei Alimentar Uzat', 'TKM OIL GROUP'],
    slogan: 'Ulei uzat, resurse pentru viitor',
    image: 'https://www.colectareuleialimentar.ro/images/tkm/hero-tkm.png',
    '@id': 'https://www.colectareuleialimentar.ro/#organization',
    url: 'https://www.colectareuleialimentar.ro',
    telephone: '+40748058141',
    email: 'office@tkm-oil.ro',
    priceRange: 'Gratuit / Bonificație pe Loc',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'București',
      addressRegion: 'București / Ilfov',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.4323,
      longitude: 26.1063,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'București' },
      { '@type': 'AdministrativeArea', name: 'Ilfov' },
      { '@type': 'Country', name: 'România' },
    ],
    description: 'Serviciu național autorizat de TKM OIL GROUP SRL pentru colectarea ecologică a uleiurilor uzate vegetale, curățarea separatoarelor de grăsimi și furnizarea de ulei proaspăt pentru bucătării HoReCa.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii Principale TKM OIL GROUP',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Colectare Ulei Alimentar Uzat',
            description: 'Preluare autorizată ANPM direct de la locație, recipienți ermetici gratuiți, emitere Anexa 3 pe loc și plată sau compensare cu ulei proaspăt.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Curățare și Colectare Separatoare de Grăsimi',
            description: 'Vidanjare, curățare și transport ecologic pentru conținutul separatoarelor de grăsimi ale restaurantelor și unităților alimentare.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vânzare și Distribuție Ulei Alimentar Profesional',
            description: 'Distribuție de ulei de floarea-soarelui și palmier fracționat pentru bucătării profesionale, cu opțiune de schimb cu uleiul uzat.',
          },
        },
      ],
    },
  };

  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
