'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ArrowRight, Mail } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobileMenu} id="nav-logo">
            <Image
              src="/images/tkm/logo.jpeg"
              alt="TKM OIL GROUP SRL - Colectam responsabil, protejam viitorul"
              width={200}
              height={65}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop & Mobile Navigation Links */}
          <nav>
            <div 
              className={`${styles.mobileBackdrop} ${mobileOpen ? styles.showBackdrop : ''}`}
              onClick={closeMobileMenu}
            />
            <ul className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
              <li>
                <Link
                  href="/"
                  className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  ACASĂ
                </Link>
              </li>

              <li>
                <Link
                  href="/despre-noi"
                  className={`${styles.navLink} ${pathname === '/despre-noi' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  DESPRE NOI
                </Link>
              </li>

              {/* Desktop Dropdown & Mobile Accordion */}
              <li 
                className={styles.hasDropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className={styles.desktopServicesWrapper}>
                  <Link
                    href="/servicii"
                    className={`${styles.navLink} ${pathname.startsWith('/servicii') ? styles.active : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span>SERVICII</span>
                    <ChevronDown size={14} className={styles.desktopChevron} />
                  </Link>

                  {/* Mobile toggle button for sub-menu */}
                  <button 
                    className={styles.mobileSubToggle}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileSubmenuOpen(!mobileSubmenuOpen);
                    }}
                    aria-label="Toggle Servicii Submenu"
                  >
                    <ChevronDown size={18} className={`${styles.mobileChevron} ${mobileSubmenuOpen ? styles.rotated : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu Desktop / Accordion Mobile */}
                <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.showDropdown : ''} ${mobileSubmenuOpen ? styles.showMobileSubmenu : ''}`}>
                  <Link 
                    href="/servicii"
                    className={styles.subLinkOverview}
                    onClick={closeMobileMenu}
                  >
                    Toate Serviciile (Overview)
                  </Link>
                  <Link 
                    href="/servicii/colectare-ulei-uzat"
                    onClick={closeMobileMenu}
                  >
                    Colectare Ulei Alimentar Uzat
                  </Link>
                  <Link 
                    href="/servicii/separatoare-grasimi"
                    onClick={closeMobileMenu}
                  >
                    Colectare Separatoare de Grăsimi
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/pentru-horeca"
                  className={`${styles.navLink} ${pathname === '/pentru-horeca' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  PENTRU HORECA
                </Link>
              </li>

              <li>
                <Link
                  href="/autorizatii"
                  className={`${styles.navLink} ${pathname === '/autorizatii' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  AUTORIZAȚII
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>

              {/* Mobile Drawer Call-To-Action Box */}
              <li className={styles.mobileDrawerFooter}>
                <a href="tel:0746405269" className={styles.mobileCallBtn}>
                  <Phone size={18} />
                  <span>Suni Direct: 0746 405 259</span>
                </a>
                <a href="mailto:office@tkm-oil.ro" className={styles.mobileEmailBtn}>
                  <Mail size={16} />
                  <span>office@tkm-oil.ro</span>
                </a>
                <Link href="/contact" className={styles.mobileCtaBtn} onClick={closeMobileMenu}>
                  <span>SOLICITĂ O OFERTĂ</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Top Contact Details & Hamburger Button */}
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
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
