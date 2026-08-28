import React from 'react';
import Image from 'next/image';
import { FileCheck, Search, Link2, ShieldCheck } from 'lucide-react';
import styles from './TrustGallery.module.scss';

export default function TrustGallery() {
  const values = [
    {
      icon: <FileCheck size={24} />,
      title: 'Conformitate',
      desc: 'Autorizații de mediu ANPM complete & formular de încărcare-descărcare deșeuri eliberat pe loc.'
    },
    {
      icon: <Search size={24} />,
      title: 'Transparență',
      desc: 'Cântărire precisă și decontare financiară imediată sau bonificație contractuală per litru.'
    },
    {
      icon: <Link2 size={24} />,
      title: 'Trasabilitate',
      desc: 'Urmărire completă a fluxului deșeurilor de la colectare din bucătărie până la rafinare în biocombustibil.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Responsabilitate',
      desc: 'Eliminarea riscurilor de amendă și protejarea activă a mediului și a rețelelor publice de apă.'
    }
  ];

  return (
    <section id="autorizatie" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Garanțiile TKM OIL GROUP</span>
          <h2 className={styles.title}>Autorizații Oficiale & Trasabilitate de Mediu</h2>
          <p className={styles.subtitle}>
            Suntem operator economic autorizat de mediu pentru colectarea și transportul uleiurilor și grăsimilor uzate.
          </p>
        </div>

        <div className={styles.valuesRow}>
          {values.map((v, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.icon}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          <div className={styles.galleryCard}>
            <Image
              src="/images/tkm/authorization.jpeg"
              alt="Autorizatie de mediu si documente oficiale TKM OIL GROUP SRL"
              width={700}
              height={394}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
            <div className={styles.cardMeta}>
              <h4>Autorizație de Mediu & Fișe de Gestiune</h4>
              <p>Evidență completă conform normelor ANPM, pregătită pentru orice control al Gărzii de Mediu.</p>
            </div>
          </div>

          <div className={styles.galleryCard}>
            <Image
              src="/images/tkm/call-center.jpeg"
              alt="Dispecerat si Suport Clienti TKM OIL GROUP"
              width={600}
              height={337}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
            <div className={styles.cardMeta}>
              <h4>Dispecerat & Asistență Dedicată</h4>
              <p>Echipă operativă gata să răspundă solicitărilor la 0746 405 259 și office@tkm-oil.ro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
