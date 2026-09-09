import React from 'react';
import styles from './FloatingWhatsApp.module.scss';

export default function FloatingWhatsApp() {
  const phoneNumber = '40746405269';
  const defaultMessage = encodeURIComponent('Bună ziua! Doresc mai multe informații despre colectarea și distribuția de ulei TKM OIL GROUP.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Contactează-ne pe WhatsApp la 0746405269"
      id="floating-whatsapp-btn"
    >
      <span className={styles.tooltip}>Discută pe WhatsApp</span>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.677.15-.201.3-.778.98-.954 1.18-.175.201-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.201.05-.377-.025-.527-.075-.15-.677-1.633-.928-2.235-.245-.586-.494-.506-.677-.516-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.143 4.548.718.311 1.279.497 1.716.636.721.23 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95a.75.75 0 00.923.923l4.782-1.388A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.5a8.47 8.47 0 01-4.321-1.18.75.75 0 00-.57-.067l-3.555 1.03 1.03-3.555a.75.75 0 00-.067-.57A8.47 8.47 0 013.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z" />
      </svg>
    </a>
  );
}
