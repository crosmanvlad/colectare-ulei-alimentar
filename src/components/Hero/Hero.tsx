import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Droplet, Coins, MapPin, PhoneCall, LayoutGrid } from 'lucide-react';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg} />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              TRANSFORMĂM <br />
              <span className={styles.highlight}>ULEIUL UZAT</span> <br />
              ÎN VALOARE.
            </h1>

            <p className={styles.description}>
              Colectăm responsabil uleiul alimentar uzat și îl transformăm în resurse pentru un viitor mai curat.
            </p>

            <div className={styles.featuresRow}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <ShieldCheck size={26} />
                </div>
                <span>COLECTARE<br />AUTORIZATĂ</span>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Droplet size={26} />
                </div>
                <span>TRASABILITATE<br />COMPLETĂ</span>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Coins size={26} />
                </div>
                <span>PLATĂ<br />PE LOC</span>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <MapPin size={26} />
                </div>
                <span>ACOPERIRE<br />NAȚIONALĂ</span>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryCta} id="hero-primary-cta">
                <PhoneCall size={18} />
                <span>SOLICITĂ COLECTARE</span>
              </Link>

              <a href="#servicii" className={styles.secondaryCta} id="hero-secondary-cta">
                <LayoutGrid size={18} />
                <span>VEZI SERVICIILE</span>
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/tkm/hero-tkm.png"
                alt="TKM OIL GROUP SRL Cisterne si Recipienti Colectare Ulei Uzat"
                width={800}
                height={500}
                priority
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>

        {/* Gold Stats Divider Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statVal}>500+</div>
            <div className={styles.statLbl}>CLIENȚI PARTENERI</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statVal}>2500+</div>
            <div className={styles.statLbl}>TONE COLECTATE ANUAL</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statVal}>10+</div>
            <div className={styles.statLbl}>ANI DE EXPERIENȚĂ</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIconBox}>
              <ShieldCheck size={28} />
            </div>
            <div className={styles.statLbl}>COMPANIE RESPONSABILĂ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
