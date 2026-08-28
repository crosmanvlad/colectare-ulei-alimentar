import React from 'react';
import Image from 'next/image';
import { AlertTriangle, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import styles from './LegalCompliance.module.scss';

export default function LegalCompliance() {
  return (
    <section id="horeca" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <div className={styles.badge}>
                <AlertTriangle size={15} />
                <span>Legislația de Mediu OUG 92/2021</span>
              </div>

              <h2 className={styles.title}>
                Protejează-ți Afacerea HORECA de <span className={styles.highlight}>Amenzi și Controale</span>
              </h2>

              <p className={styles.description}>
                Garda Națională de Mediu și ANPC efectuează controale riguroase privind trasabilitatea uleiurilor uzate. 
                Deversarea uleiului alimentar la canalizare constituie contravenție gravă și se sancționează cu amenzi de la 20.000 la 40.000 LEI.
              </p>

              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <ShieldCheck size={20} />
                  </div>
                  <div className={styles.info}>
                    <h4>Certificat Oficial de Reciclare ANPM</h4>
                    <p>Eliberăm pe loc documentele legale (Anexa 3 / Anexa 2) obligatorii la controalele de mediu.</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.icon}>
                    <FileText size={20} />
                  </div>
                  <div className={styles.info}>
                    <h4>Evidența Gestiunii Deșeurilor Gratuită</h4>
                    <p>Îți punem la dispoziție istoricul complet al cantităților predate și rapoarte lunare gata de prezentat inspectorilor.</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Sparkles size={20} />
                  </div>
                  <div className={styles.info}>
                    <h4>Zero Costuri de Infrastructură</h4>
                    <p>Furnizăm și înlocuim butoaiele speciale cu închidere ermetică fără niciun cost pentru bucătăria ta.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.visual}>
              <Image
                src="/images/horeca.jpg"
                alt="Echipamente profesionale colectare ulei restaurante HORECA"
                width={700}
                height={525}
                style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
