import React from 'react';
import Image from 'next/image';
import { Droplets, RefreshCcw, Banknote, ShieldAlert, CheckCircle2 } from 'lucide-react';
import styles from './Services.module.scss';

export default function Services() {
  const pillars = [
    {
      id: 'colectare',
      icon: <Droplets size={26} />,
      title: 'Colectare Ulei Uzat',
      desc: 'Preluare profesională pentru restaurante, cantine și fast-food-uri. Furnizăm bidoane albe de stocare TKM OIL, butoaie 200L și IBC-uri 1000L.',
      features: [
        'Bidoane & Butoaie ermetice 100% gratuite',
        'Preluare în 24-48 ore de la solicitare',
        'Formular predare-primire deșeuri pe loc'
      ]
    },
    {
      id: 'schimb',
      icon: <RefreshCcw size={26} />,
      title: 'Schimb & Valorificare',
      desc: 'Sistem simplificat de rotație a recipienților. Preluăm recipientul plin și lăsăm pe loc un recipient igienizat, pregătit de utilizare.',
      features: [
        'Curățare & igienizare la standarde stricte',
        'Zero întreruperi în activitatea bucătăriei',
        'Procesare ecologică în biocombustibil'
      ]
    },
    {
      id: 'plata',
      icon: <Banknote size={26} />,
      title: 'Plată pe Loc',
      desc: 'Valorificăm deșeurile tale alimentare. Oferim prețuri competitive per litru și plată directă pe loc sau bonificații contractuale.',
      features: [
        'Negociere transparentă în funcție de volum',
        'Decontare rapidă & facturare simplă',
        'Prețuri avantajoase pentru contracte HORECA'
      ]
    },
    {
      id: 'separatoare',
      icon: <ShieldAlert size={26} />,
      title: 'Separatoare de Grăsimi',
      desc: 'Servicii autorizate de curățare, vidanjare și colectare a reziduurilor din separatoarele de grăsimi din bucătăriile profesionale.',
      features: [
        'Mentenanță preventivă și spălare sub presiune',
        'Documentație tehnică conformă DSVSA/ISU',
        'Evitarea blocajelor și mirosurilor neplăcute'
      ]
    }
  ];

  return (
    <section id="servicii" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Serviciile TKM OIL GROUP</span>
          <h2 className={styles.title}>4 Piloni de Excelență în Reciclare</h2>
          <p className={styles.subtitle}>
            Oferim soluții complete de la colectarea recipientelor de stocare până la valorificarea ecologică și documentația legală de mediu.
          </p>
        </div>

        <div className={styles.bannerWrapper}>
          <Image
            src="/images/tkm/services-tkm.png"
            alt="TKM OIL GROUP SRL Servicii Colectare Ulei Uzat si Separatoare Grasimi"
            width={1200}
            height={675}
            style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
          />
        </div>

        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.id} className={styles.card} id={`pillar-card-${p.id}`}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <ul className={styles.featureList}>
                {p.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
