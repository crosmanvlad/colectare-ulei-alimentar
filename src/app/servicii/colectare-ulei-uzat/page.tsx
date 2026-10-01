import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Flame, Banknote } from 'lucide-react';
import styles from '../Servicii.module.scss';

export const metadata: Metadata = {
  title: 'Colectare Ulei Uzat Alimentar București & Ilfov | Recipiente Gratuite & Plată',
  description: 'Serviciu autorizat ANPM de colectare ulei alimentar uzat pentru restaurante, cantine și HoReCa în București și Ilfov. Recipiente ermetice gratuite, formular Anexa 3 pe loc și bonificație prin plată sau ulei proaspăt. Dispecerat: 0748 058 141.',
  keywords: [
    'colectare ulei uzat bucuresti',
    'colectare ulei alimentar uzat',
    'colectare ulei restaurante',
    'colectare ulei horeca',
    'reciclare ulei prajit bucuresti',
    'plata pe loc ulei uzat',
    'schimb ulei uzat cu ulei nou',
    'recipiente ulei uzat gratuite',
    'anexa 3 deseuri nepericuloase'
  ],
  alternates: {
    canonical: '/servicii/colectare-ulei-uzat',
  },
  openGraph: {
    title: 'Colectare Ulei Uzat Alimentar | TKM OIL GROUP',
    description: 'Colectare autorizată ANPM ulei vegetal uzat direct din bucătăria ta. Recipienți curați gratuiți, trasabilitate completă și plată pe loc.',
    url: 'https://www.colectareuleialimentar.ro/servicii/colectare-ulei-uzat',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Colectare Ulei Alimentar Uzat',
  serviceType: 'Waste Collection & Recycling',
  provider: {
    '@type': 'RecyclingCenter',
    name: 'TKM OIL GROUP SRL',
    telephone: '+40748058141',
    url: 'https://www.colectareuleialimentar.ro',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'București' },
    { '@type': 'AdministrativeArea', name: 'Ilfov' },
    { '@type': 'Country', name: 'România' },
  ],
  description: 'Preluare periodică direct de la locație a uleiului vegetal uzat, furnizare recipienți ermetici gratuiți, emitere Anexa 3 pe loc și plată sau schimb cu ulei proaspăt.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RON',
    description: 'Colectare gratuită și bonificație în bani sau produse pe litru de ulei predat.',
  },
};

export default function ColectareUleiUzatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Serviciu Principal</span>
            <h1 className={styles.title}>Colectarea Uleiului Alimentar Uzat</h1>
            <p className={styles.subtitle}>
              Colectare organizată, recipienți ermetici gratuit și valorificare prin ulei proaspăt sau plată pe loc.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.introCard}>
              <h2>Ne ocupăm de ridicarea uleiului alimentar uzat direct din bucătăria ta</h2>
              <p>
                Stabilim frecvența colectării în funcție de necesarul real al locației tale.
                Fără să aștepți până când recipientele devin o problemă. Fără să transformi bucătăria într-un spațiu de depozitare.
                Fără să îți distragi echipa de la ceea ce produce valoare.
              </p>
            </div>

            <div className={styles.detailSplit}>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: '#093826', marginBottom: '1.25rem' }}>
                  Sistemul Câștigător: <span style={{ color: '#c59b27' }}>Primești Valoare Înapoi</span>
                </h3>
                <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Una dintre diferențele importante ale modelului nostru este posibilitatea de a transforma uleiul uzat în produse pe care bucătăria ta le folosește din nou.
                  Este un circuit simplu: <strong>folosești → colectăm → valorificăm → primești valoare înapoi</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Flame size={28} style={{ color: '#c59b27' }} />
                    <div>
                      <strong style={{ color: '#093826', fontSize: '1.1rem', fontFamily: 'Outfit' }}>Ulei Palmier</strong>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Sun size={28} style={{ color: '#c59b27' }} />
                    <div>
                      <strong style={{ color: '#093826', fontSize: '1.1rem', fontFamily: 'Outfit' }}>Ulei Floarea Soarelui</strong>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Banknote size={28} style={{ color: '#0e8557' }} />
                    <div>
                      <strong style={{ color: '#093826', fontSize: '1.1rem', fontFamily: 'Outfit' }}>Contravaloarea în bani</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/tkm/barrel-real.jpeg"
                  alt="Recipient TKM OIL GROUP pentru colectare ulei alimentar uzat"
                  width={600}
                  height={800}
                  style={{ width: '100%', height: 'auto', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                />
              </div>
            </div>

            <div className={styles.ctaBox}>
              <div className={styles.ctaText}>
                <h3>Solicită Preluarea Uleiului Alimentar Uzat</h3>
                <p>Spune-ne cât ulei generezi și stabilim varianta optimă pentru afacerea ta.</p>
              </div>
              <Link href="/contact" className={styles.ctaBtn}>
                <span>CERE O OFERTĂ PERSONALIZATĂ</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
