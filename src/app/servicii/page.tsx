import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Servicii.module.scss';

export default function ServiciiOverview() {
  return (
    <>
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
                  <li><CheckCircle2 size={18} /><span>Spălare sub presiune & vidanjare profesională a separatoarelor</span></li>
                  <li><CheckCircle2 size={18} /><span>Documentație tehnică conformă DSVSA & ISU</span></li>
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/servicii/separatoare-grasimi" className={styles.detailBtn}>
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
