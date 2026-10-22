import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4.5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Asymmetrical Grid Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'center'
            }}
            className="about-inner-layout"
          >
            {/* Visual Column — Authentic Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
              className="about-portrait-col"
            >
              <div
                style={{
                  position: 'relative',
                  maxWidth: '440px',
                  margin: '0 auto',
                  borderRadius: '12px',
                  padding: '12px',
                  background: 'linear-gradient(135deg, rgba(201, 166, 107, 0.25) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(96, 165, 250, 0.15) 100%)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
                }}
              >
                {/* Image Container with Luxury Crop */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    aspectRatio: '4/5',
                    backgroundColor: '#0d0f15'
                  }}
                >
                  <img
                    src={personalInfo.portraitUrl}
                    alt="Vishvanth — Software Engineer & Security Researcher"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.05) brightness(0.98)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient atmospheric overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 8, 10, 0.8) 0%, transparent 40%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Identification Pill at bottom of image */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: '1.25rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(13, 16, 23, 0.88)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(201, 166, 107, 0.3)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#f5f5f7',
                          letterSpacing: '0.05em'
                        }}
                      >
                        VISHVANTH
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.7rem',
                          color: 'var(--accent-gold)',
                          letterSpacing: '0.08em'
                        }}
                      >
                        CSE · ALLIANCE UNIVERSITY
                      </p>
                    </div>

                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        boxShadow: '0 0 10px #10b981'
                      }}
                    />
                  </div>
                </div>

                {/* Decorative architectural corner brackets */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-6px',
                    width: '18px',
                    height: '18px',
                    borderTop: '2px solid var(--accent-gold)',
                    borderLeft: '2px solid var(--accent-gold)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    right: '-6px',
                    width: '18px',
                    height: '18px',
                    borderBottom: '2px solid var(--accent-gold)',
                    borderRight: '2px solid var(--accent-gold)'
                  }}
                />
              </div>
            </motion.div>

            {/* Editorial Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="about-content-col"
            >
              <div className="eyebrow-container">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">01 — ABOUT ME</span>
              </div>

              <h2 className="section-title">
                Curious by nature. <br />
                <span className="italic-serif">Built to create.</span>
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                  lineHeight: 1.8,
                  marginBottom: '2.5rem'
                }}
              >
                {personalInfo.bio.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Metrics Counter Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {personalInfo.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.1rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '4px',
                      transition: 'border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201, 166, 107, 0.4)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: 'var(--accent-gold-light)',
                        lineHeight: 1,
                        marginBottom: '0.4rem'
                      }}
                    >
                      {metric.value}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        letterSpacing: '0.04em',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {metric.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.3
                      }}
                    >
                      {metric.subtext}
                    </p>
                  </div>
                ))}
              </div>

              {/* Profiles & Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: '0.6rem' }}
                >
                  <GithubIcon size={16} />
                  GitHub Profile
                  <ArrowUpRight size={14} style={{ color: 'var(--accent-gold)' }} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: '0.6rem' }}
                >
                  <LinkedinIcon size={16} />
                  LinkedIn Profile
                  <ArrowUpRight size={14} style={{ color: 'var(--accent-gold)' }} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-inner-layout {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
