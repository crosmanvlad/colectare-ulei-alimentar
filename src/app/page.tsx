import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import RewardsBanner from '@/components/RewardsBanner/RewardsBanner';
import Services from '@/components/Services/Services';
import TrustGallery from '@/components/TrustGallery/TrustGallery';
import LegalCompliance from '@/components/LegalCompliance/LegalCompliance';
import Process from '@/components/Process/Process';
import Calculator from '@/components/Calculator/Calculator';
import Faq from '@/components/Faq/Faq';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Cum Functioneaza & Rewards Grid matching wesite-design.jpeg */}
        <section style={{ padding: '4rem 0', background: 'rgba(4, 13, 10, 0.4)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <Process />
              <RewardsBanner />
            </div>
          </div>
        </section>

        <Services />
        <TrustGallery />
        <LegalCompliance />
        <Calculator />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
