'use client';

import React, { useState } from 'react';
import { Droplet, Leaf, DollarSign } from 'lucide-react';
import styles from './Calculator.module.scss';

export default function Calculator() {
  const [clientType, setClientType] = useState<'horeca' | 'casnic'>('horeca');
  const [liters, setLiters] = useState<number>(120);

  // Calculations:
  // 1 Liter of oil contaminates 1,000,000 Liters of water
  const waterSavedMillions = ((liters * 1000000) / 1000000).toFixed(1);
  
  // 1 Liter oil recycled = ~2.8 kg CO2 saved
  const co2SavedKg = Math.round(liters * 2.8);

  // Financial bonus estimate (for HORECA: ~2.5 - 4.5 RON/liter depending on volume)
  const bonusEstimateRon = Math.round(liters * (clientType === 'horeca' ? 3.8 : 2.5));

  return (
    <section id="calculator" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Estimator Interactiv</span>
          <h2 className={styles.title}>Simulează Beneficiile Eco & Financiare</h2>
          <p className={styles.subtitle}>
            Află câtă apă protejezi de la contaminare și ce bonificații poți obține lunar prin reciclarea uleiului tau uzat.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          <div className={styles.toggleGroup}>
            <button
              className={clientType === 'horeca' ? styles.active : ''}
              onClick={() => setClientType('horeca')}
              id="calc-tab-horeca"
            >
              Restaurante / HORECA
            </button>
            <button
              className={clientType === 'casnic' ? styles.active : ''}
              onClick={() => setClientType('casnic')}
              id="calc-tab-casnic"
            >
              Gospodărie / Asociație
            </button>
          </div>

          <div className={styles.sliderContainer}>
            <div className={styles.sliderHeader}>
              <label htmlFor="volume-slider">Cantitate Lunar Ulei Colectat:</label>
              <div className={styles.volumeDisplay}>{liters} Litri / Lună</div>
            </div>
            <input
              id="volume-slider"
              type="range"
              min={clientType === 'horeca' ? 30 : 5}
              max={clientType === 'horeca' ? 1000 : 100}
              step={clientType === 'horeca' ? 10 : 5}
              value={liters}
              onChange={(e) => setLiters(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.resultsGrid}>
            <div className={styles.resultBox}>
              <div className={styles.boxIcon}>
                <Droplet size={22} />
              </div>
              <div className={styles.boxValue}>{waterSavedMillions} Mil. L</div>
              <div className={styles.boxLabel}>Apă Curată Salvată de Poluare</div>
            </div>

            <div className={styles.resultBox}>
              <div className={styles.boxIcon}>
                <Leaf size={22} />
              </div>
              <div className={styles.boxValue}>{co2SavedKg} kg</div>
              <div className={styles.boxLabel}>Emisii CO₂ Evitate Anual</div>
            </div>

            <div className={styles.resultBox}>
              <div className={styles.boxIcon}>
                <DollarSign size={22} />
              </div>
              <div className={styles.boxValue}>~{bonusEstimateRon} LEI</div>
              <div className={styles.boxLabel}>Valoare Estimată Compensare / Lună</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
