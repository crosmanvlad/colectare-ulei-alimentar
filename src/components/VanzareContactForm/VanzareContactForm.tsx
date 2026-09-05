'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import styles from '@/components/ContactForm/ContactForm.module.scss';

export default function VanzareContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    oilType: '',
    quantityLiters: '',
    message: '',
    honeypot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'vanzare_ulei' })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'A apărut o eroare la trimitere. Vă rugăm încercați din nou.');
      }

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        oilType: '',
        quantityLiters: '',
        message: '',
        honeypot: ''
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Eroare de conexiune.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  return (
    <section id="contact-vanzare" className={styles.section} style={{ paddingTop: '2rem' }}>
      <div className={styles.glowBg} />
      <div>
        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <span className={styles.sectionBadge}>Comenzi & Distribuție</span>
            <h2 className={styles.title}>
              Solicită o Ofertă pentru <span className={styles.highlight}>Vânzare și Distribuție Ulei</span>
            </h2>
            <p className={styles.desc}>
              Livrăm rapid ulei proaspăt direct la restaurantul, hotelul sau unitatea ta de producție. Completează formularul și te contactăm în maximum 2 ore cu oferta comercială personalizată.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <Phone size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Dispecerat Comenzi & Distribuție</label>
                  <strong>0746 405 269</strong>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <Mail size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Comenzi & Ofertare HoReCa</label>
                  <strong>office@tkm-oil.ro</strong>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <MapPin size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Acoperire Logistică</label>
                  <strong>TKM OIL GROUP SRL • Toate Județele României</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.successBox}>
                <div className={styles.icon}>
                  <CheckCircle size={36} />
                </div>
                <h4>Solicitare Trimisă cu Succes!</h4>
                <p>
                  Vă mulțumim. Un reprezentant TKM OIL GROUP vă va contacta în scurt timp cu oferta comercială solicitată.
                </p>
                <button onClick={() => setStatus('idle')}>
                  Trimite altă solicitare
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="vanzare-form">
                <div className={styles.formHeader}>
                  <h3>Formular Solicitare Vânzare Ulei</h3>
                  <p>Aprovizionare rapidă & prețuri avantajoase de distribuitor</p>
                </div>

                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className={styles.honeypot}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className={styles.rowTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nume & Prenume *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Ion Popescu"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefon de Contact *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="0746 405 269"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.rowTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="office@restaurant.ro"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Nume Firmă / Restaurant *</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      placeholder="Ex: Bistro Gourmet SRL"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Adresă de Livrare *</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    required
                    placeholder="Ex: Str. Principală nr. 15, Cluj-Napoca"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.rowTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="oilType">Tip Ulei Solicitat *</label>
                    <input
                      id="oilType"
                      type="text"
                      name="oilType"
                      required
                      placeholder="Ex: floarea soarelui, palmier, high oleic"
                      value={formData.oilType}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="quantityLiters">Cantitate Estimată (Litri)</label>
                    <input
                      id="quantityLiters"
                      type="text"
                      name="quantityLiters"
                      placeholder="Ex: 100 litri, 500 litri etc."
                      value={formData.quantityLiters}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Detalii Suplimentare / Observații</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Specificați frecvența dorită de livrare sau dacă doriți compensare cu ulei alimentar uzat..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                  id="vanzare-submit-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Se trimite comanda...</span>
                    </>
                  ) : (
                    <>
                      <span>Trimite Solicitarea la TKM OIL</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
