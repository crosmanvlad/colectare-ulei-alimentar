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
import prStyles from '@/components/Process/ProcessRewards.module.scss';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Process & Rewards Grid Section */}
        <section className={prStyles.section}>
          <div className="container">
            <div className={prStyles.grid}>
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
