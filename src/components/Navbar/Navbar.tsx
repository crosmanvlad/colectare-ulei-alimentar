'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} id="nav-logo">
            <Image
              src="/images/tkm/logo.jpeg"
              alt="TKM OIL GROUP SRL - Colectam responsabil, protejam viitorul"
              width={200}
              height={65}
              priority
              style={{ width: 'auto', height: '52px', objectFit: 'contain' }}
            />
          </Link>

          <nav>
            <ul className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
              <li>
                <Link
                  href="/"
                  className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  ACASĂ
                </Link>
              </li>

              <li>
                <Link
                  href="/despre-noi"
                  className={`${styles.navLink} ${pathname === '/despre-noi' ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  DESPRE NOI
                </Link>
              </li>

              <li 
                className={styles.hasDropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/servicii"
                  className={`${styles.navLink} ${pathname.startsWith('/servicii') ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>SERVICII</span>
                  <ChevronDown size={14} />
                </Link>

                <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.showDropdown : ''}`}>
                  <Link 
                    href="/servicii/colectare-ulei-uzat"
                    onClick={() => { setDropdownOpen(false); setMobileOpen(false); }}
                  >
                    Colectare Ulei Alimentar Uzat
                  </Link>
                  <Link 
                    href="/servicii/separatoare-grasimi"
                    onClick={() => { setDropdownOpen(false); setMobileOpen(false); }}
                  >
                    Colectare Separatoare de Grăsimi
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/pentru-horeca"
                  className={`${styles.navLink} ${pathname === '/pentru-horeca' ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  PENTRU HORECA
                </Link>
              </li>

              <li>
                <Link
                  href="/autorizatii"
                  className={`${styles.navLink} ${pathname === '/autorizatii' ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  AUTORIZAȚII
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.navActions}>
            <div className={styles.contactTop}>
              <a href="tel:0746405269" className={styles.phoneBtn} id="nav-phone-call">
                <Phone size={15} />
                <span>0746 405 259</span>
              </a>
              <a href="mailto:office@tkm-oil.ro" className={styles.emailSub}>
                office@tkm-oil.ro
              </a>
            </div>

            <button 
              className={styles.mobileToggle} 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              id="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
