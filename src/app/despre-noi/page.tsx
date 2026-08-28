import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Award, ArrowRight } from 'lucide-react';
import styles from './DespreNoi.module.scss';

export default function DespreNoi() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Subpage Banner */}
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Misiune & Viziune</span>
            <h1 className={styles.title}>DESPRE TKM OIL GROUP</h1>
            <p className={styles.subtitle}>
              Transformăm o obligație de mediu într-un parteneriat economic sănătos și transparent.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Cine Suntem & Ce Ne <span className={styles.goldText}>Ghidează</span>
                </h2>
                
                <p className={styles.leadParagraph}>
                  În domeniul colectării deșeurilor, foarte multe companii văd doar o obligație legală. 
                  La TKM OIL GROUP, noi vedem o oportunitate de optimizare pentru afacerea ta.
                </p>

                <p className={styles.paragraph}>
                  Experiența alături de TKM OIL GROUP este concepută să fie exact opusul birocrației complicate: 
                  **contact simplu, comunicare clară, colectare organizată și condiții comerciale transparente**. 
                  Businessul și responsabilitatea de mediu nu trebuie să fie două lucruri separate.
                </p>

                <div className={styles.quoteBox}>
                  <p>
                    „Credem că modelul câștigător este cel în care toate părțile au de câștigat. Clientul recuperează valoare dintr-o resursă pe care altfel ar considera-o deșeu, iar noi transformăm uleiul uzat în biocombustibil ecologic.”
                  </p>
                </div>

                <h3 className={styles.subTitle}>Ambiția Noastră</h3>
                <p className={styles.paragraph}>
                  Vrem ca numele **TKM OIL GROUP** să însemne un singur lucru pentru fiecare restaurant sau partener HORECA:
                </p>
                
                <div className={styles.ambitionBadge}>
                  <Award size={28} />
                  <div>
                    <strong>„Sunt acoperit. Se ocupă ei.”</strong>
                    <span>Reputația pe care o construim zi de zi, colectare cu colectare.</span>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    <span>Solicită o Ofertă Personalizată</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.visualContent}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/tkm/authorization.jpeg"
                    alt="TKM OIL GROUP Autenticitate si Responsabilitate"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                  />
                </div>

                <div className={styles.pillarsGrid}>
                  <div className={styles.pillarItem}>
                    <ShieldCheck size={24} />
                    <div>
                      <strong>Parteneriat Sănătos</strong>
                      <p>Relație comercială avantajoasă, nu doar o tranzacție de deșeu.</p>
                    </div>
                  </div>

                  <div className={styles.pillarItem}>
                    <HeartHandshake size={24} />
                    <div>
                      <strong>Economie Circulară</strong>
                      <p>Transformare directă a deșeurilor în resurse energetice curate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
