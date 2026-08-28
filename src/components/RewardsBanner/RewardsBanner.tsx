import React from 'react';
import { Sun, Coins, Flame } from 'lucide-react';
import styles from './RewardsBanner.module.scss';

export default function RewardsBanner() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Ce Primești În Schimb</h3>
      <div className={styles.itemsList}>
        <div className={styles.rewardItem}>
          <div className={styles.iconBox}>
            <Flame size={24} />
          </div>
          <div className={styles.textInfo}>
            <strong>18 L Ulei Palmier (Mr. Chef)</strong>
            <span>pentru fiecare 50 kg de ulei alimentar uzat</span>
          </div>
        </div>

        <div className={styles.rewardItem}>
          <div className={styles.iconBox}>
            <Sun size={24} />
          </div>
          <div className={styles.textInfo}>
            <strong>20 L Ulei Floarea Soarelui (Spornic/Surâsul Soarelui)</strong>
            <span>pentru fiecare 50 kg de ulei alimentar uzat</span>
          </div>
        </div>

        <div className={styles.rewardItem}>
          <div className={styles.iconBox}>
            <Coins size={24} />
          </div>
          <div className={styles.textInfo}>
            <strong>2,50 - 3,00 LEI + TVA / KG</strong>
            <span>pentru fiecare kg de ulei alimentar uzat predat</span>
          </div>
        </div>
      </div>
    </div>
  );
}
