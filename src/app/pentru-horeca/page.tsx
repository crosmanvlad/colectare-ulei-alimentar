import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, Hotel, ChefHat, Flame, Sun, Banknote, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import styles from './PentruHoreca.module.scss';

export default function PentruHorecaPage() {
  const clients = [
    { icon: <UtensilsCrossed size={24} />, name: 'Restaurante & Fast-Food' },
    { icon: <Hotel size={24} />, name: 'Hoteluri & Pensiuni' },
    { icon: <ChefHat size={24} />, name: 'Catering & Cantine' },
    { icon: <Flame size={24} />, name: 'Patiserii, Brutării & Producție' }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Soluții Dedicated HoReCa</span>
            <h1 className={styles.title}>PENTRU HORECA</h1>
            <p className={styles.subtitle}>
              Bucătăria ta produce deja o resursă. Întrebarea este: cine beneficiază de valoarea ei?
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Creat Special pentru <span className={styles.goldText}>Ritmul HoReCa</span>
                </h2>

                <p className={styles.leadParagraph}>
                  În HoReCa, marjele se construiesc din sute de decizii aparent mici. 
                  Prețul unei materii prime. O livrare mai eficientă. Un furnizor mai bun. O pierdere eliminată.
                </p>

                <p className={styles.paragraph}>
                  Uleiul alimentar uzat este una dintre acele zone în care foarte multe companii văd doar o obligație. 
                  **TKM OIL GROUP te ajută să vezi oportunitatea.**
                </p>

                <p className={styles.paragraph}>
                  Știm cum funcționează o bucătărie profesională: program intens, spațiu limitat, personal ocupat, volume fluctuante și weekenduri aglomerate. 
                  De aceea, o soluție de colectare trebuie să se adapteze businessului tău — **nu invers**.
                </p>

                <div className={styles.exchangeBox}>
                  <h3>Nu Lăsa o Resursă să Plece Fără să Întoarcă Valoare</h3>
                  <p>Pentru uleiul alimentar folosit în bucătărie primești:</p>

                  <div className={styles.optionsList}>
                    <div className={styles.optionItem}>
                      <Flame size={22} />
                      <div>
                        <strong>18L Ulei Palmier (Mr. Chef)</strong>
                        <span>per 50kg ulei uzat predat</span>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <Sun size={22} />
                      <div>
                        <strong>20L Ulei Floarea Soarelui (Spornic/Surâsul Soarelui)</strong>
                        <span>per 50kg ulei uzat predat</span>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <Banknote size={22} />
                      <div>
                        <strong>Contravaloarea în BANI (2,50 - 3,00 LEI + TVA / kg)</strong>
                        <span>plată direct pe loc sau facturare lunară</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.flowChain}>
                  <h3>Cel Mai Bun Furnizor Este Cel la Care Nu Trebuie să Te Gândești</h3>
                  <div className={styles.chainSteps}>
                    <div className={styles.chainStep}>1. Recipientul se umple</div>
                    <div className={styles.chainArrow}>→</div>
                    <div className={styles.chainStep}>2. Colectarea este organizată</div>
                    <div className={styles.chainArrow}>→</div>
                    <div className={styles.chainStep}>3. Uleiul pleacă</div>
                    <div className={styles.chainArrow}>→</div>
                    <div className={styles.chainStep}>4. Primești valoarea convenită</div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    <span>SOLICITĂ O OFERTĂ PENTRU HORECA</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.visualContent}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/tkm/hero-tkm.png"
                    alt="Solutii colectare ulei restaurante HORECA TKM OIL GROUP"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                  />
                </div>

                <div className={styles.clientTypesBox}>
                  <h4>Se Adresează Tuturor Operatorilor Food:</h4>
                  <div className={styles.clientsGrid}>
                    {clients.map((c, idx) => (
                      <div key={idx} className={styles.clientItem}>
                        {c.icon}
                        <span>{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.networkBox}>
                  <ShieldCheck size={28} />
                  <div>
                    <strong>Pentru O Locație sau O Rețea Întreagă</strong>
                    <p>
                      Ai un singur restaurant? Construim o soluție potrivită volumului tău. 
                      Administrezi mai multe locații? Îți oferim un sistem coerent de colectare și un singur partener de încredere.
                    </p>
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
