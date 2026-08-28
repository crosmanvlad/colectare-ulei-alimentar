'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Faq.module.scss';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Ce tipuri de ulei și grăsimi alimentare colectați?',
      a: 'Colectăm toate tipurile de uleiuri vegetale uzate (floarea-soarelui, palmier, măsline, rapiță), grăsimi animale uzate, uleiuri de prăjire din friteuze industriale și grăsimi din separatoare.'
    },
    {
      q: 'Cât costă recipienții de stocare și ridicarea?',
      a: 'Colectarea este 100% GRATUITĂ pentru companii și persoane fizice. De asemenea, furnizăm gratuit butoaie speciale food-grade (60L, 120L sau 200L) cu sigiliu și capac ermetic.'
    },
    {
      q: 'Ce documente eliberați pentru controalele Mediu & DSV?',
      a: 'La fiecare ridicare eliberăm pe loc Formularul de Încărcare-Descărcare Deșeuri Nepericuloase (conform Anexei 3 OUG 92/2021) și adeverință oficială pentru trasabilitate, valabilă la verificările Gărzii de Mediu și DSVSA.'
    },
    {
      q: 'Care este cantitatea minimă pentru o ridicare gratuită?',
      a: 'Pentru restaurante și persoane juridice, ridicăm de la minim 30 litri. Pentru gospodării și persoane fizice, organizăm puncte periodice sau ridicări directe de la 15 litri.'
    },
    {
      q: 'Ce se întâmplă cu uleiul alimentar după colectare?',
      a: 'Uleiul este filtrat, decantat și rafinat în facilități autorizate, fiind transformat ulterior în biocombustibil ecologic (biodiesel conform normei EN 14214), reducând emisiile de CO2 cu până la 85%.'
    }
  ];

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Întrebări Frecvente</span>
          <h2 className={styles.title}>Tot ce Trebuie să Știi</h2>
          <p className={styles.subtitle}>
            Răspunsuri la cele mai comune întrebări despre procesul de colectare și cerințele legale.
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  className={`${styles.questionBtn} ${isOpen ? styles.open : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  id={`faq-btn-${i}`}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={styles.icon} />
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
