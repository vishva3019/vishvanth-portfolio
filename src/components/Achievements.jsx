import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Eye } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="achievements" className="section-wrapper" style={{ backgroundColor: 'rgba(9, 11, 16, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-container">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">04 — HONORS &amp; RECOGNITION</span>
          </div>

          <h2 className="section-title">
            Verified Milestones. <br />
            <span className="italic-serif">Podiums &amp; Credentials.</span>
          </h2>

          <p className="section-subtitle">
            Documented achievements from national hackathons, competitive programming leagues,
            and enterprise technology credential programs.
          </p>
        </div>

        {/* Editorial Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {achievements.map((item, idx) => {
            const hasMedia = item.certificateImage || item.certificateFile;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card"
                style={{
                  padding: '2.2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Badge & Year */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <span
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-tech)',
                        fontWeight: 600,
                        backgroundColor: 'rgba(201, 166, 107, 0.12)',
                        border: '1px solid rgba(201, 166, 107, 0.28)',
                        color: 'var(--accent-gold-light)',
                        borderRadius: '3px'
                      }}
                    >
                      {item.badge}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.45rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.82rem',
                      color: 'var(--accent-gold)',
                      marginBottom: '1rem',
                      fontWeight: 500
                    }}
                  >
                    {item.organization}
                  </p>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={15} style={{ color: '#10b981' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      VERIFIED
                    </span>
                  </div>

                  {hasMedia ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--accent-gold-light)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-gold-light)')}
                    >
                      <Eye size={14} style={{ color: 'var(--accent-gold)' }} />
                      View Certificate
                    </button>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {item.date}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCertificate && (
        <CertificateModal item={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      )}
    </section>
  );
}
