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
            <strong>Ulei Palmier</strong>
          </div>
        </div>

        <div className={styles.rewardItem}>
          <div className={styles.iconBox}>
            <Sun size={24} />
          </div>
          <div className={styles.textInfo}>
            <strong>Ulei Floarea Soarelui</strong>
          </div>
        </div>

        <div className={styles.rewardItem}>
          <div className={styles.iconBox}>
            <Coins size={24} />
          </div>
          <div className={styles.textInfo}>
            <strong>Contravaloarea în bani</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
