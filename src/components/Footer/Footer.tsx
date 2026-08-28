import React from 'react';
import Link from 'next/link';
import { Droplet, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  const cities = ['București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Brașov', 'Craiova', 'Galați', 'Ploiești', 'Oradea'];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Droplet size={22} fill="currentColor" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                  TKM <span style={{ color: '#d4af37' }}>OIL</span>
                </span>
                <span style={{ fontSize: '0.65rem', color: '#9ca3af', letterSpacing: '0.1em' }}>GROUP SRL</span>
              </div>
            </Link>
            <p>
              „Ulei Uzat, Resurse pentru Viitor” — Serviciu autorizat pentru colectarea, transportul și reciclarea ecologică a uleiurilor uzate vegetale și grăsimilor alimentare.
            </p>
            <div className={styles.badges}>
              <span>ANPM Autorizat</span>
              <span>Conformitate Mediu</span>
              <span>Plată pe Loc</span>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Servicii TKM</h4>
            <ul>
              <li><a href="#servicii">Colectare Ulei Uzat HORECA</a></li>
              <li><a href="#servicii">Schimb & Valorificare Recipienți</a></li>
              <li><a href="#servicii">Plată & Bonificații pe Loc</a></li>
              <li><a href="#servicii">Colectare Separatoare de Grăsimi</a></li>
              <li><a href="#autorizatie">Certificat Oficial ANPM</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact Direct</h4>
            <ul>
              <li>
                <a href="tel:0746405269" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d4af37', fontWeight: 700 }}>
                  <Phone size={14} />
                  <span>0746 405 259</span>
                </a>
              </li>
              <li>
                <a href="mailto:office@tkm-oil.ro" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} />
                  <span>office@tkm-oil.ro</span>
                </a>
              </li>
              <li>
                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  www.colectareuleialimentar.ro
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Acoperire Națională</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              Operăm cu autospeciale autorizate în toate județele:
            </p>
            <div className={styles.citiesList}>
              {cities.map((city, idx) => (
                <span key={idx}>{city}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} TKM OIL GROUP SRL. Toate drepturile rezervate. Ulei uzat, resurse pentru viitor.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#contact" style={{ textDecoration: 'underline' }}>Termeni și Condiții</a>
            <a href="#contact" style={{ textDecoration: 'underline' }}>Politica de Confidențialitate</a>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">ANPC</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
