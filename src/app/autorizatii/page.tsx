import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FileCheck2, ShieldCheck, MapPin, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './Autorizatii.module.scss';

export default function AutorizatiiPage() {
  const docs = [
    { title: 'Autorizație de Mediu ANPM', subtitle: 'Valabilă pentru colectare și transport național deșeuri', type: 'PDF' },
    { title: 'Formular Încărcare-Descărcare Deșeuri (Anexa 3)', subtitle: 'Model fișă de trasabilitate eliberată pe loc la fiecare ridicare', type: 'PDF' },
    { title: 'Certificat de Conformitate Mediu', subtitle: 'Certificare procesare și valorificare ecologică deșeuri', type: 'PDF' },
    { title: 'Contract Cadru Servicii HORECA', subtitle: 'Model contract de colaborare și condiții comerciale', type: 'PDF' }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Conformitate & Trasabilitate</span>
            <h1 className={styles.title}>AUTORIZAȚII & CERTIFICATE</h1>
            <p className={styles.subtitle}>
              În business, încrederea începe acolo unde promisiunile se termină și documentele încep.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Seriozitatea Nu Trebuie Declarată. <span className={styles.goldText}>Trebuie Demonstrată.</span>
                </h2>

                <p className={styles.leadParagraph}>
                  Poți avea cel mai bun preț. Poți avea cel mai rapid serviciu. But când vorbim despre gestionarea deșeurilor, există ceva mai important: **să știi cui îi predai și ce se întâmplă mai departe.**
                </p>

                <p className={styles.paragraph}>
                  Trasabilitatea nu este un detaliu. Este parte din serviciu. TKM OIL GROUP tratează documentarea și trasabilitatea operațiunilor ca pe o componentă esențială a relației cu partenerii săi.
                </p>

                <div className={styles.highlightBox}>
                  <ShieldCheck size={28} />
                  <div>
                    <strong>Acoperire Autorizată în Toată România</strong>
                    <p>100% conformitate și toate autorizațiile de mediu necesare pentru operare națională.</p>
                  </div>
                </div>

                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>Garanție la Controale Mediu & DSVSA</strong>
                      <p>Demonstrezi instant ce cantitate ai predat, când ai predat-o și în cadrul cărui circuit a fost gestionată.</p>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>Documente Eliberate Pe Loc</strong>
                      <p>La fiecare ridicare de ulei uzat primești formularul oficial de încărcare-descărcare deșeuri.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    <span>SOLICITĂ CONSULTANȚĂ MEDIU</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.visualContent}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/tkm/authorization.jpeg"
                    alt="Autorizatie de mediu si certificate TKM OIL GROUP"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                  />
                </div>

                <div className={styles.docsList}>
                  <h3>Documente Relevante & Descarcabile:</h3>
                  {docs.map((d, idx) => (
                    <div key={idx} className={styles.docItem}>
                      <FileCheck2 size={24} className={styles.docIcon} />
                      <div className={styles.docInfo}>
                        <strong>{d.title}</strong>
                        <span>{d.subtitle}</span>
                      </div>
                      <span className={styles.downloadBadge}>
                        <Download size={14} />
                        {d.type}
                      </span>
                    </div>
                  ))}
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
