import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Subtle atmospheric ambient glow */}
      <div className="hero-ambient-glow" />

      <div className="hero-content">
        {/* 1. Status / Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hero-status-wrapper"
        >
          <div className="status-pill">
            <span className="status-dot-pulse" />
            <span>{personalInfo.status}</span>
          </div>
        </motion.div>

        {/* 2. Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="hero-eyebrow-wrapper"
        >
          <div className="eyebrow-line" />
          <span className="eyebrow-text">{personalInfo.bio.eyebrow}</span>
        </motion.div>

        {/* 3. Main Heading — Strictly Left-Aligned on every line */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title"
        >
          <span>Building</span>
          <span>what</span>
          <span className="hero-title-italic">comes next.</span>
        </motion.h1>

        {/* 4. Personal Introduction & 5. Supporting Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="hero-intro-box"
        >
          <p className="hero-intro-lead">
            Vishvanth — CSE Undergraduate at Alliance University
          </p>
          <p className="hero-intro-text">
            {personalInfo.bio.summary}
          </p>
        </motion.div>

        {/* 6. CTA links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="hero-cta-group"
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
          >
            Download Resume (PDF) ↓
          </a>
        </motion.div>

        {/* Telemetry Architecture Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="hero-telemetry-strip"
        >
          <div className="hero-telemetry-item">
            <Terminal size={14} style={{ color: 'var(--accent-gold)' }} />
            <span>FULL-STACK DISTRIBUTED SYSTEMS</span>
          </div>

          <span className="hero-telemetry-sep">•</span>

          <div className="hero-telemetry-item">
            <ShieldCheck size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>CYBERSECURITY &amp; NETWORKING</span>
          </div>

          <span className="hero-telemetry-sep">•</span>

          <div className="hero-telemetry-item">
            <Cpu size={14} style={{ color: 'var(--accent-violet)' }} />
            <span>AGENTIC AI ARCHITECTURES</span>
          </div>
        </motion.div>
      </div>

      {/* Savirajyam-inspired Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="hero-scroll-indicator"
        onClick={() => handleScrollTo('about')}
      >
        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
        <div className="hero-scroll-capsule">
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
            className="hero-scroll-pill"
          />
        </div>
      </motion.div>
    </section>
  );
}
