import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Flame, Sparkles, Truck, RefreshCw, BadgePercent, ArrowRight } from 'lucide-react';
import styles from '../Servicii.module.scss';
import VanzareContactForm from '@/components/VanzareContactForm/VanzareContactForm';

export default function VanzareUleiPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Banner */}
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Distribuție & Aprovizionare HoReCa</span>
            <h1 className={styles.title}>Vânzare și Distribuție Ulei Alimentar</h1>
            <p className={styles.subtitle}>
              Furnizor direct de uleiuri alimentare premium pentru bucătării profesionale. Calitate constantă, livrare promptă și posibilitate avantajoasă de compensare cu uleiul uzat.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.introCard}>
              <h2>Calitate Certificată pentru Fiecare Bucătărie Profesională</h2>
              <p>
                Asigurăm aprovizionarea continuă a restaurantelor, hotelurilor, cantinelor și producătorilor alimentari cu uleiuri proaspete de înaltă performanță termică. Livrăm rapid, direct la sediul sau punctele dumneavoastră de lucru.
              </p>
            </div>

            <div className={styles.detailSplit}>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: '#093826', marginBottom: '1.25rem' }}>
                  Uleiuri Premium pentru <span style={{ color: '#c59b27' }}>Orice Bucătărie</span>
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Gama noastră acoperă toate nevoile operaționale ale sectorului HoReCa — de la preparate delicate până la prăjire intensivă la volume mari:
                </p>

                <div className={styles.benefitList}>
                  <div className={styles.benefitCard}>
                    <Sun size={28} style={{ color: '#c59b27' }} />
                    <div>
                      <strong style={{ color: '#093826' }}>Ulei de Floarea-Soarelui (Spornic / Surâsul Soarelui)</strong>
                      <p>100% rafinat, gust neutru, culoare aurie limpede. Ideal pentru gătit universal, sosuri și preparare la cald.</p>
                    </div>
                  </div>

                  <div className={styles.benefitCard}>
                    <Flame size={28} style={{ color: '#c59b27' }} />
                    <div>
                      <strong style={{ color: '#093826' }}>Ulei de Palmier Fracționat (Mr. Chef)</strong>
                      <p>Special formulat pentru friteuze profesionale. Rezistență termică până la 220°C, zero mirosuri și randament maxim per porție.</p>
                    </div>
                  </div>

                  <div className={`${styles.benefitCard} ${styles.green}`}>
                    <Sparkles size={28} style={{ color: '#0e8557' }} />
                    <div>
                      <strong style={{ color: '#093826' }}>Ulei High-Oleic Professional</strong>
                      <p>Peste 80% acid oleic, rezistență excepțională la oxidare și durată de viață extinsă în băile de prăjire.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/horeca.jpg"
                  alt="Distributie Ulei Alimentar Restaurante si HoReCa TKM OIL GROUP"
                  width={600}
                  height={800}
                  style={{ width: '100%', height: 'auto', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                />
              </div>
            </div>

            {/* Quick Benefits Banner */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
              <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Truck size={24} style={{ color: '#c59b27', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#093826', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem', fontFamily: 'Outfit' }}>Livrare Directă la Locație</strong>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>Operăm cu autospeciale autorizate și asigurăm transport rapid în toate județele.</p>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <RefreshCw size={24} style={{ color: '#c59b27', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#093826', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem', fontFamily: 'Outfit' }}>Compensare cu Uleiul Uzat</strong>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>Predai uleiul uzat din bucătărie și primești direct la schimb ulei proaspăt.</p>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <BadgePercent size={24} style={{ color: '#c59b27', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ color: '#093826', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem', fontFamily: 'Outfit' }}>Prețuri Directe & Predictibile</strong>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>Condiții comerciale transparente, fără intermediari și discounturi de volum.</p>
                </div>
              </div>
            </div>

            {/* Dedicated Contact Form */}
            <VanzareContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
