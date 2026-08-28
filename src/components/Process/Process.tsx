import React from 'react';
import { PhoneCall, Truck, RefreshCw, FileCheck2 } from 'lucide-react';
import styles from './Process.module.scss';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <PhoneCall size={24} />,
      title: 'Plasare Solicitare',
      desc: 'Ne contactezi online sau telefonic. Îți livrăm gratuit recipiente ermetice de stocare food-grade.'
    },
    {
      num: '02',
      icon: <Truck size={24} />,
      title: 'Ridicare Programată',
      desc: 'Echipa noastră preia recipientul plin la data convenită și îți lasă un recipient curat la schimb.'
    },
    {
      num: '03',
      icon: <RefreshCw size={24} />,
      title: 'Filtrare & Valorificare',
      desc: 'Uleiul este decantat, purificat și direcționat către fabricile partenere pentru producția de biocombustibil.'
    },
    {
      num: '04',
      icon: <FileCheck2 size={24} />,
      title: 'Certificat Mediu & Plată',
      desc: 'Primești pe loc Formularul de Încărcare-Descărcare Deșeuri (ANPM) și compensația financiară aferentă.'
    }
  ];

  return (
    <section id="cum-functioneaza" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Proces Simplu & Transparent</span>
          <h2 className={styles.title}>Cum Funcționează Colectarea?</h2>
          <p className={styles.subtitle}>
            În 4 pași simpli elimini riscul de amenzi pentru mediu și contribui activ la protejarea planetei.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s, index) => (
            <div key={index} className={styles.stepCard} id={`process-step-${s.num}`}>
              <div className={styles.stepNumber}>{s.num}</div>
              <div className={styles.iconBox}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
