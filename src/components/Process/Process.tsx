import React from 'react';
import { PhoneCall, Truck, Droplets, Leaf, ArrowRight } from 'lucide-react';
import styles from './Process.module.scss';

export default function Process() {
  const steps = [
    {
      num: '1',
      icon: <PhoneCall size={24} />,
      title: '1. NE CONTACTEZI',
      desc: 'Ne suni sau completezi formularul de solicitare.'
    },
    {
      num: '2',
      icon: <Truck size={24} />,
      title: '2. COLECTĂM',
      desc: 'Venim la tine și colectăm uleiul uzat.'
    },
    {
      num: '3',
      icon: <Droplets size={24} />,
      title: '3. TE RĂSPLĂTIM',
      desc: 'Primești plata pe loc sau produse în schimb.'
    },
    {
      num: '4',
      icon: <Leaf size={24} />,
      title: '4. PROTEJĂM',
      desc: 'Uleiul este reciclat responsabil, protejăm mediul.'
    }
  ];

  return (
    <div id="cum-functioneaza" className={styles.processBox}>
      <h2 className={styles.title}>CUM FUNCȚIONEAZĂ</h2>

      <div className={styles.stepsRow}>
        {steps.map((s, index) => (
          <React.Fragment key={index}>
            <div className={styles.stepItem} id={`process-step-${s.num}`}>
              <div className={styles.circleIcon}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.stepArrow}>
                <ArrowRight size={20} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
