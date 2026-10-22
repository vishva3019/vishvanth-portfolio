import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { Code, Layout, Server, Database, Shield, Wrench } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code,
  'Frontend Development': Layout,
  'Backend & Systems': Server,
  'Databases & Storage': Database,
  'Cybersecurity & Networks': Shield,
  'Tools & Workflow': Wrench,
};

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = skillCategories[activeCategoryIndex];
  const ActiveIcon = categoryIcons[activeCategory.name] || Code;

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-container">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">03 — TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="section-title">
            Engineered with precision. <br />
            <span className="italic-serif">Grounded in fundamentals.</span>
          </h2>

          <p className="section-subtitle">
            A comprehensive matrix of programming languages, frontend systems, distributed backends,
            relational databases, and offensive-defensive cybersecurity tooling.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {skillCategories.map((cat, index) => {
            const isSelected = activeCategoryIndex === index;
            const Icon = categoryIcons[cat.name] || Code;

            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategoryIndex(index)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isSelected ? 'rgba(201, 166, 107, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  color: isSelected ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                  boxShadow: isSelected ? '0 0 20px rgba(201, 166, 107, 0.2)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <Icon size={15} style={{ color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)' }} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Domain Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '2.5rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(15, 18, 27, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Domain Overview */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <ActiveIcon size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    DOMAIN // {activeCategory.domain}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {activeCategory.name}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '520px',
                  lineHeight: 1.6
                }}
              >
                {activeCategory.description}
              </p>
            </div>

            {/* Grid of Verified Skills in this Domain */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {activeCategory.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(201, 166, 107, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(201, 166, 107, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {skill.name}
                  </p>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55
                    }}
                  >
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Refined Monospace Technology Stream Ticker */}
        <div
          style={{
            marginTop: '4.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            <span>• PYTHON</span>
            <span>• FASTAPI</span>
            <span>• REACT NATIVE</span>
            <span>• EXPO</span>
            <span>• POSTGRESQL (NEON)</span>
            <span>• SQLITE GTFS</span>
            <span>• GOOGLE GEMINI AI</span>
            <span>• KALI LINUX</span>
            <span>• CCNA NETWORKING</span>
            <span>• TYPESCRIPT</span>
            <span>• FUSION 360</span>
            <span>• VERCEL</span>
            <span>• DIJKSTRA ROUTING</span>
            <span>• FLASK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
