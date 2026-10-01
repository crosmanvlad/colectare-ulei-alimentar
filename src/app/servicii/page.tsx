import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { Droplets, ShieldAlert, ArrowRight, CheckCircle2, Sun } from 'lucide-react';
import styles from './Servicii.module.scss';

export const metadata: Metadata = {
  title: 'Servicii Colectare Ulei Uzat & Separatoare Grăsimi',
  description: 'Gama completă de servicii TKM OIL GROUP: colectare autorizată ANPM ulei alimentar uzat, igienizare separatoare de grăsimi și distribuție ulei proaspăt de palmier și floarea-soarelui.',
  keywords: [
    'servicii colectare ulei',
    'colectare ulei alimentar uzat bucuresti',
    'curatare separatoare grasimi',
    'furnizor ulei alimentar',
    'recipiente gratuite ulei',
    'anexa 3 deseurilor'
  ],
  alternates: {
    canonical: '/servicii',
  },
  openGraph: {
    title: 'Servicii Colectare Ulei Uzat & Separatoare Grăsimi | TKM OIL GROUP',
    description: 'Servicii complete de colectare și valorificare ecologică a uleiurilor uzate pentru HoReCa și companii. Recipiente gratuite și plată pe loc.',
    url: 'https://www.colectareuleialimentar.ro/servicii',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Servicii TKM OIL GROUP',
  description: 'Servicii de colectare a uleiului alimentar uzat, mentenanță separatoare de grăsimi și aprovizionare HoReCa.',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Colectarea Uleiului Alimentar Uzat',
      url: 'https://www.colectareuleialimentar.ro/servicii/colectare-ulei-uzat',
      description: 'Preluare periodică sau la cerere a uleiului de gătit uzat, recipienți ermetici gratuiți, emitere Anexa 3 și plată/schimb pe loc.',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Colectarea Separatoarelor de Grăsimi',
      url: 'https://www.colectareuleialimentar.ro/servicii/separatoare-grasimi',
      description: 'Vidanjare și curățare specializată a separatoarelor de grăsimi pentru restaurante, cantine și laboratoare alimentare.',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Vânzare și Distribuție Ulei Alimentar',
      url: 'https://www.colectareuleialimentar.ro/servicii/vanzare-ulei',
      description: 'Furnizare ulei proaspăt de floarea-soarelui și palmier fracționat cu opțiune de compensare directă cu uleiul uzat predat.',
    },
  ],
};

export default function ServiciiOverview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Servicii TKM OIL GROUP</span>
            <h1 className={styles.title}>SERVICIILE NOASTRE</h1>
            <p className={styles.subtitle}>
              Noi nu îți oferim doar un serviciu de colectare. Îți eliminăm o problemă din operațiunile zilnice.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.introCard}>
              <h2>Sistem Simplu. Colectare Organizată. Condiții Transparente.</h2>
              <p>
                Uleiul alimentar uzat trebuie depozitat, gestionat și predat. Dar asta nu înseamnă că trebuie să îți consume timpul.
                TKM OIL GROUP îți oferă un sistem simplu prin care uleiul uzat este colectat și valorificat în condiții stabilite de la început.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {/* Service 1 */}
              <div className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Droplets size={32} />
                  </div>
                  <h3>Colectarea Uleiului Alimentar Uzat</h3>
                </div>

                <p className={styles.cardDesc}>
                  Ne ocupăm de ridicarea uleiului alimentar uzat generat de activitatea ta și stabilim frecvența colectării în funcție de necesarul real al locației.
                  Transformăm uleiul uzat în ulei proaspăt de palmier/floarea-soarelui sau în contravaloarea în bani.
                </p>

                <ul className={styles.featureList}>
                  <li><CheckCircle2 size={18} /><span>Ridicări programate fără să transformi bucătăria în spațiu de depozitare</span></li>
                  <li><CheckCircle2 size={18} /><span>Furnizare bidoane ermetice & recipienți speciali 100% gratuit</span></li>
                  <li><CheckCircle2 size={18} /><span>Compensare prin produse (ulei proaspăt) sau plată directă pe loc</span></li>
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/servicii/colectare-ulei-uzat" className={styles.detailBtn}>
                    <span>Află Toate Detaliile</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <ShieldAlert size={32} />
                  </div>
                  <h3>Colectarea Separatoarelor de Grăsimi</h3>
                </div>

                <p className={styles.cardDesc}>
                  Pentru clienții de la care colectăm ulei alimentar uzat, oferim, contra cost, și serviciul de colectare a conținutului din separatoarele de grăsimi.
                  Un singur partener integrat — mai puține lucruri de administrat.
                </p>

                <ul className={styles.featureList}>
                  <li><CheckCircle2 size={18} /><span>Integrat în colaborarea existentă pentru reducerea numărului de furnizori</span></li>
                  <li><CheckCircle2 size={18} /><span>Documentație tehnică conformă DSVSA & ISU</span></li>
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/servicii/separatoare-grasimi" className={styles.detailBtn}>
                    <span>Află Toate Detaliile</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
              <div className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Sun size={32} />
                  </div>
                  <h3>Vânzare & Distribuție Ulei</h3>
                </div>

                <p className={styles.cardDesc}>
                  Aprovizionare sigură cu uleiuri alimentare de calitate superioară (floarea-soarelui, palmier, high-oleic) pentru restaurante și rețele HoReCa. Livrare promptă și posibilitate de compensare cu ulei uzat.
                </p>

                <ul className={styles.featureList}>
                  <li><CheckCircle2 size={18} /><span>Floarea-soarelui, palmier fracționat și high-oleic</span></li>
                  <li><CheckCircle2 size={18} /><span>Livrare directă la locație cu autospeciale autorizate</span></li>
                  <li><CheckCircle2 size={18} /><span>Prețuri de distribuitor & opțiune compensare cu ulei uzat</span></li>
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/servicii/vanzare-ulei" className={styles.detailBtn}>
                    <span>Află Toate Detaliile</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <div className={styles.ctaText}>
                <h3>Spune-ne cât ulei generezi. Noi îți spunem ce variantă are sens.</h3>
                <p>Proces simplu, decizii rapide. Fără întreruperi în bucătărie.</p>
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
