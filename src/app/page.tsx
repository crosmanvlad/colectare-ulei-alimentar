import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import RewardsBanner from '@/components/RewardsBanner/RewardsBanner';
import Services from '@/components/Services/Services';
import TrustGallery from '@/components/TrustGallery/TrustGallery';
import LegalCompliance from '@/components/LegalCompliance/LegalCompliance';
import Process from '@/components/Process/Process';
import Faq from '@/components/Faq/Faq';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';
import prStyles from '@/components/Process/ProcessRewards.module.scss';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce tipuri de ulei și grăsimi alimentare colectați?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colectăm toate tipurile de uleiuri vegetale uzate (floarea-soarelui, palmier, măsline, rapiță), grăsimi animale uzate, uleiuri de prăjire din friteuze industriale și grăsimi din separatoare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă recipienții de stocare și ridicarea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colectarea este 100% GRATUITĂ pentru companii și persoane fizice. De asemenea, furnizăm gratuit recipiente speciale curate cu capac ermetic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce documente eliberați pentru controalele Mediu & DSV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La fiecare ridicare eliberăm pe loc Anexa 3 - Formularul de Încărcare-Descărcare Deșeuri Nepericuloase, asigurând 100% conformitate legală.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce se întâmplă cu uleiul alimentar după colectare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uleiul este filtrat, decantat și rafinat în facilități autorizate, fiind transformat în biocombustibil ecologic (biodiesel conform normei EN 14214).',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
