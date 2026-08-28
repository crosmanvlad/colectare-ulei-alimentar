import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className="container">
            <span className={styles.badge}>Dispecerat & Preluări</span>
            <h1 className={styles.title}>CONTACT TKM OIL GROUP</h1>
            <p className={styles.subtitle}>
              Primul pas durează mai puțin de un minut. Spune-ne unde ești și aproximativ cât ulei generezi — de acolo ne ocupăm noi.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
