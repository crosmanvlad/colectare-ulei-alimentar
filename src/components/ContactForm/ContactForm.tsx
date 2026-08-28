'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [clientType, setClientType] = useState<'horeca' | 'persoana'>('horeca');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    estimatedVolume: '50-100L',
    message: '',
    honeypot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({ ...formData, clientType })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'A apărut o eroare la trimitere. Vă rugăm încercați din nou.');
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        city: '',
        estimatedVolume: '50-100L',
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
    <section id="contact" className={styles.section}>
      <div className={styles.glowBg} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <span className={styles.sectionBadge}>Contact TKM OIL GROUP</span>
            <h2 className={styles.title}>
              Solicită o Preluare sau un <span className={styles.highlight}>Contract HORECA</span>
            </h2>
            <p className={styles.desc}>
              Echipa operativă TKM OIL GROUP SRL acoperă toate județele din România. Completează formularul și te contactăm în maximum 2 ore pentru livrarea containerelor gratuite.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <Phone size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Dispecerat Preluări Directe</label>
                  <strong>0746 405 259</strong>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <Mail size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Depunere Solicitări & Documente Mediu</label>
                  <strong>office@tkm-oil.ro</strong>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <MapPin size={22} />
                </div>
                <div className={styles.cardText}>
                  <label>Companie Autorizată ANPM</label>
                  <strong>TKM OIL GROUP SRL • Acoperire Națională</strong>
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
                  Vă mulțumim. Un reprezentant TKM OIL GROUP vă va contacta la numărul furnizat.
                </p>
                <button onClick={() => setStatus('idle')} id="form-reset-btn">
                  Trimite altă solicitare
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form">
                <div className={styles.formHeader}>
                  <h3>Formular Solicitare Colectare</h3>
                  <p>Comandă gratuită de recipiente & evaluare rapidă</p>
                </div>

                <div className={styles.typeSelector}>
                  <button
                    type="button"
                    className={clientType === 'horeca' ? styles.active : ''}
                    onClick={() => setClientType('horeca')}
                    id="form-tab-horeca"
                  >
                    HORECA / Operator Economic
                  </button>
                  <button
                    type="button"
                    className={clientType === 'persoana' ? styles.active : ''}
                    onClick={() => setClientType('persoana')}
                    id="form-tab-persoana"
                  >
                    Persoană Fizică / Bloc
                  </button>
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
                      placeholder="0746 405 259"
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
                      placeholder="office@tkm-oil.ro"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="city">Oraș / Județ *</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      required
                      placeholder="Ex: București, Sector 1"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {clientType === 'horeca' && (
                  <div className={styles.rowTwo}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Nume Companie / Restaurant *</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        required={clientType === 'horeca'}
                        placeholder="Ex: Bistro Restaurant SRL"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="estimatedVolume">Volum Lunar Estimat</label>
                      <select
                        id="estimatedVolume"
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
                        onChange={handleChange}
                      >
                        <option value="30-50L">30 - 50 Litri</option>
                        <option value="50-100L">50 - 100 Litri</option>
                        <option value="100-300L">100 - 300 Litri</option>
                        <option value="300L+">Peste 300 Litri (IBC)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label htmlFor="message">Detalii Suplimentare / Observații</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Specificați dacă aveți nevoie de bidoane albe TKM, butoaie 200L sau curățare separatoare de grăsimi..."
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
                  id="form-submit-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Se trimite...</span>
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
