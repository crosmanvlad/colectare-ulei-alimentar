import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, CheckCircle2, ArrowRight, Sun, Flame, Banknote } from 'lucide-react';
import styles from '../Servicii.module.scss';

export default function ColectareUleiUzatPage() {
  return (
    <>
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: '#f9fafb', marginBottom: '1.25rem' }}>
                  Sistemul Câștigător: <span style={{ color: '#d4af37' }}>Primești Valoare Înapoi</span>
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Una dintre diferențele importante ale modelului nostru este posibilitatea de a transforma uleiul uzat în produse pe care bucătăria ta le folosește din nou. 
                  Este un circuit simplu: **folosești → colectăm → valorificăm → primești valoare înapoi**.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ padding: '1.25rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Flame size={28} style={{ color: '#d4af37' }} />
                    <div>
                      <strong style={{ color: '#fff', fontSize: '1.1rem' }}>18 L Ulei Palmier (Mr. Chef)</strong>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>pentru fiecare 50 kg de ulei alimentar uzat predat</div>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Sun size={28} style={{ color: '#d4af37' }} />
                    <div>
                      <strong style={{ color: '#fff', fontSize: '1.1rem' }}>20 L Ulei Floarea Soarelui (Spornic/Surâsul Soarelui)</strong>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>pentru fiecare 50 kg de ulei alimentar uzat predat</div>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem', background: 'rgba(14, 133, 87, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Banknote size={28} style={{ color: '#34d399' }} />
                    <div>
                      <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Achiziție cu Plată pe Loc (2,50 - 3,00 LEI + TVA / KG)</strong>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Dacă preferi banii, decontăm direct contravaloarea uleiului alimentar uzat</div>
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
