import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldAlert, CheckCircle2, ArrowRight, Wrench, FileCheck, Layers } from 'lucide-react';
import styles from '../Servicii.module.scss';

export default function SeparatoareGrasimiPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Serviciu Integrat</span>
            <h1 className={styles.title}>Colectarea Separatoarelor de Grăsimi</h1>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.introCard}>
              <h2>Un singur partener. Mai puține lucruri de administrat.</h2>
              <p>
                Pentru clienții de la care colectăm ulei alimentar uzat, oferim, contra cost, și serviciul de colectare a conținutului din separatoarele de grăsimi.
                Serviciul poate fi integrat în colaborarea existentă, astfel încât să reduci numărul furnizorilor cu care trebuie să lucrezi.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: '#093826', marginBottom: '1.25rem' }}>
                  De ce să integrezi <span style={{ color: '#c59b27' }}>Curățarea Separatoarelor</span> cu TKM OIL?
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                    <FileCheck size={24} style={{ color: '#c59b27', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#093826', fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem', fontFamily: 'Outfit' }}>Documentație Tehnică Completă</strong>
                      <div style={{ color: '#4b5563', fontSize: '0.9rem' }}>Proces-verbal și documente legale valabile pentru controalele DSVSA și ISU.</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                    <Layers size={24} style={{ color: '#c59b27', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#093826', fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem', fontFamily: 'Outfit' }}>Management Simplificat</strong>
                      <div style={{ color: '#4b5563', fontSize: '0.9rem' }}>Cu cât procesul este mai simplu pentru client, cu atât serviciul este mai bun. Administrare unică.</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/tkm/services-tkm.png"
                  alt="Colectare Separatoare de Grasimi TKM OIL GROUP"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                />
              </div>
            </div>

            <div className={styles.ctaBox}>
              <div className={styles.ctaText}>
                <h3>Adaugă Serviciul de Separatoare la Contractul Tău</h3>
                <p>Simplifică operarea bucătăriei tale cu un singur partener autorizat.</p>
              </div>
              <Link href="/contact" className={styles.ctaBtn}>
                <span>SOLICITĂ OFERTĂ INTEGRATĂ</span>
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
