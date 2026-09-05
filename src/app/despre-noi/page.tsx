import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
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
              Nu am construit TKM OIL GROUP doar pentru a colecta ulei. Am construit-o pentru a schimba valoarea pe care companiile o văd în el.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Pentru majoritatea, un deșeu. <br />
                  Pentru noi, <span className={styles.goldText}>aici începe procesul.</span>
                </h2>
                
                <p className={styles.leadParagraph}>
                  Pentru majoritatea afacerilor HoReCa, uleiul alimentar uzat apare la finalul procesului. Pentru noi, acolo începe procesul.
                </p>

                <p className={styles.paragraph}>
                  TKM OIL GROUP este construit în jurul unei convingeri simple: într-o economie modernă, resursele nu ar trebui irosite, iar serviciile nu ar trebui să fie complicate. De aceea, combinăm colectarea uleiului alimentar uzat cu o abordare comercială orientată spre beneficiul clientului.
                </p>

                <h3 className={styles.subTitle}>Din bucătăria ta, într-un nou circuit de valoare</h3>
                <p className={styles.paragraph}>
                  Restaurantul vede ulei uzat, noi vedem o resursă care trebuie colectată, gestionată și valorificată responsabil. Această diferență de perspectivă definește TKM OIL GROUP.
                </p>
                <p className={styles.paragraph}>
                  Nu ne interesează doar ridicarea unui recipient. Ne interesează întregul proces: relația cu partenerul, regularitatea colectărilor, transparența condițiilor și construirea unei colaborări care funcționează pe termen lung.
                </p>

                <h3 className={styles.subTitle}>Un partener bun îți simplifică businessul</h3>
                <p className={styles.paragraph}>
                  Știm că într-un restaurant sau hotel timpul este una dintre cele mai scumpe resurse. Ultimul lucru de care ai nevoie este să pierzi timp cu un furnizor care nu răspunde, nu ajunge când trebuie sau transformă un proces simplu într-o problemă administrativă.
                </p>

                <div className={styles.quoteBox}>
                  <p>
                    „De aceea vrem ca experiența TKM OIL GROUP să fie exact opusul: contact simplu, comunicare clară, colectare organizată și condiții comerciale transparente.”
                  </p>
                </div>

                <h3 className={styles.subTitle}>Business și responsabilitate nu trebuie să fie două lucruri separate</h3>
                <p className={styles.paragraph}>
                  Credem că modelul câștigător este cel în care toate părțile au de câștigat:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb' }}>
                    <CheckCircle2 size={18} style={{ color: '#d4af37', flexShrink: 0 }} />
                    <span>Clientul recuperează valoare dintr-o resursă pe care altfel ar considera-o deșeu.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb' }}>
                    <CheckCircle2 size={18} style={{ color: '#d4af37', flexShrink: 0 }} />
                    <span>Uleiul este introdus într-un circuit de valorificare.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb' }}>
                    <CheckCircle2 size={18} style={{ color: '#d4af37', flexShrink: 0 }} />
                    <span>Relația dintre noi devine un parteneriat economic sănătos, nu doar o tranzacție.</span>
                  </li>
                </ul>
                <p className={styles.paragraph} style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Această logică a transformării deșeurilor în resurse este și una dintre ideile centrale promovate de liderii internaționali ai economiei circulare.
                </p>

                <h3 className={styles.subTitle} style={{ marginTop: '2rem' }}>Ambiția Noastră</h3>
                <p className={styles.paragraph}>
                  Vrem ca numele <strong>TKM OIL GROUP</strong> să însemne un singur lucru pentru clienții noștri:
                </p>
                
                <div className={styles.ambitionBadge}>
                  <Award size={32} />
                  <div>
                    <strong>„Sunt acoperit. Se ocupă ei.”</strong>
                    <span>Asta este reputația pe care vrem să o construim, client cu client și colectare cu colectare.</span>
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
                      <strong>Parteneriat Economic Sănătos</strong>
                      <p>Condiții transparente și beneficii concrete pentru fiecare kilogram predat.</p>
                    </div>
                  </div>

                  <div className={styles.pillarItem}>
                    <HeartHandshake size={24} />
                    <div>
                      <strong>Economie Circulară Activă</strong>
                      <p>Transformare directă a deșeurilor din bucătărie în resurse energetice curate.</p>
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
