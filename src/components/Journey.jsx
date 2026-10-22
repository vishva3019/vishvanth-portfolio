import { motion } from 'motion/react';
import { journeyTimeline } from '../data/portfolioData';
import { GraduationCap, Code2, Server, Shield } from 'lucide-react';

const icons = [GraduationCap, Code2, Server, Shield];

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-container">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">05 — JOURNEY &amp; ROADMAP</span>
          </div>

          <h2 className="section-title">
            Evolution of a Builder. <br />
            <span className="italic-serif">From Theory to Production.</span>
          </h2>

          <p className="section-subtitle">
            My development as an engineer: grounded in rigorous computer science coursework,
            accelerated through competitive hackathons, and committed to shipping resilient software.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          {/* Vertical Golden Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              bottom: '2rem',
              left: '24px',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(201, 166, 107, 0.5) 0%, rgba(201, 166, 107, 0.2) 80%, transparent 100%)'
            }}
            className="timeline-spine"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {journeyTimeline.map((item, idx) => {
              const Icon = icons[idx % icons.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2.5rem',
                    position: 'relative'
                  }}
                  className="timeline-item"
                >
                  {/* Node Marker */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#0a0d14',
                      border: '1px solid rgba(201, 166, 107, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
                      zIndex: 2
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Content Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '1.75rem 2rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <span
                        style={{
                          padding: '0.2rem 0.6rem',
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: 'rgba(201, 166, 107, 0.1)',
                          color: 'var(--accent-gold-light)',
                          border: '1px solid rgba(201, 166, 107, 0.25)',
                          borderRadius: '3px'
                        }}
                      >
                        {item.tag}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {item.stage}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.86rem',
                        color: 'var(--accent-gold)',
                        marginBottom: '0.9rem',
                        fontWeight: 500
                      }}
                    >
                      {item.institution}
                    </p>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7
                      }}
                    >
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
