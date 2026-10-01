import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './ContactPage.module.scss';

export const metadata: Metadata = {
  title: 'Contact & Solicitare Ridicare Ulei Uzat | 0748 058 141',
  description: 'Contactează dispeceratul TKM OIL GROUP la 0748 058 141 sau trimite formularul online pentru colectare gratuită a uleiului alimentar uzat și curățare separatoare de grăsimi în București și Ilfov.',
  keywords: [
    'contact colectare ulei uzat',
    'telefon colectare ulei alimentar 0748058141',
    'solicitare ridicare ulei restaurante',
    'adresa colectare ulei bucuresti',
    'dispecerat tkm oil group'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dispecerat Colectare Ulei Uzat | TKM OIL GROUP',
    description: 'Solicită recipienți gratuiți și programarea primei ridicări. Răspundem prompt la 0748 058 141.',
    url: 'https://www.colectareuleialimentar.ro/contact',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact TKM OIL GROUP',
  description: 'Pagină oficială de contact și dispecerat pentru colectarea uleiurilor alimentare uzate.',
  url: 'https://www.colectareuleialimentar.ro/contact',
  mainEntity: {
    '@type': 'RecyclingCenter',
    name: 'TKM OIL GROUP SRL',
    telephone: '+40748058141',
    email: 'office@tkm-oil.ro',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'București',
      addressRegion: 'București / Ilfov',
      addressCountry: 'RO',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Dispecerat & Preluări</span>
            <h1 className={styles.title}>CONTACT TKM OIL GROUP</h1>
            <p className={styles.subtitle}>
              Primul pas durează mai puțin de un minut. Spune-ne unde ești și aproximativ cât ulei generezi — de acolo ne ocupăm noi.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
