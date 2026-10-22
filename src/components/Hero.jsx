import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background light gradients */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '45vh',
          background: 'radial-gradient(ellipse, rgba(201, 166, 107, 0.08) 0%, rgba(96, 165, 250, 0.06) 40%, transparent 75%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Main Hero Column */}
          <div style={{ maxWidth: '900px' }}>
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.75rem' }}
            >
              <div className="status-pill">
                <span className="status-dot-pulse" />
                <span>{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="eyebrow-container"
            >
              <div className="eyebrow-line" />
              <span className="eyebrow-text">{personalInfo.bio.eyebrow}</span>
            </motion.div>

            {/* Oversized Cinematic Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 7.5vw, 6.2rem)',
                fontWeight: 800,
                lineHeight: 0.96,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '2rem'
              }}
            >
              Building what <br />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--accent-gold-light)',
                  position: 'relative'
                }}
              >
                comes next.
              </span>
            </motion.h1>

            {/* Identity & Supporting Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                borderLeft: '2px solid var(--accent-gold)',
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem',
                maxWidth: '680px'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--accent-gold-light)',
                  marginBottom: '0.6rem'
                }}
              >
                Vishvanth — Alliance University
              </p>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.1rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}
              >
                {personalInfo.bio.summary}
              </p>
            </motion.div>

            {/* CTA Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '3rem'
              }}
            >
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="btn-primary"
              >
                Explore My Work
                <ArrowDown size={15} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="btn-secondary"
              >
                Let's Connect
                <ArrowUpRight size={15} style={{ color: 'var(--accent-gold)' }} />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-ghost"
                style={{ marginLeft: '0.5rem' }}
              >
                Download Resume (PDF) ↓
              </a>
            </motion.div>

            {/* Telemetry / Core Architecture Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Terminal size={15} style={{ color: 'var(--accent-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  FULL-STACK DISTRIBUTED SYSTEMS
                </span>
              </div>

              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  CYBERSECURITY & NETWORKING
                </span>
              </div>

              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Cpu size={15} style={{ color: 'var(--accent-violet)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  AGENTIC AI ARCHITECTURES
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Savirajyam-inspired Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          zIndex: 10,
          cursor: 'pointer'
        }}
        onClick={() => handleScrollTo('about')}
      >
        <span
          style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)'
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <div
          style={{
            width: '22px',
            height: '36px',
            borderRadius: '9999px',
            border: '1px solid rgba(201, 166, 107, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
            backgroundColor: 'rgba(7, 8, 10, 0.4)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [0.9, 0.3, 0.9]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-gold)',
              boxShadow: '0 0 8px rgba(201, 166, 107, 0.8)'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
