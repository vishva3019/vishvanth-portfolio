import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(7, 8, 10, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '820px',
            maxHeight: '88vh',
            overflowY: 'auto',
            backgroundColor: '#0d1017',
            border: '1px solid rgba(201, 166, 107, 0.3)',
            borderRadius: '12px',
            padding: '2.5rem',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'var(--accent-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.1em'
                }}
              >
                PROJECT ARCHITECTURE // {project.number}
              </span>
              {project.badge && (
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 600,
                    backgroundColor: 'rgba(201, 166, 107, 0.12)',
                    border: '1px solid rgba(201, 166, 107, 0.3)',
                    color: 'var(--accent-gold-light)',
                    borderRadius: '3px'
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                lineHeight: 1.15
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1rem',
                color: 'var(--accent-gold-light)',
                fontWeight: 500
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem'
              }}
            >
              System Overview & Problem Statement
            </h4>
            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem'
              }}
            >
              Core Engineering Accomplishments
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    padding: '0.9rem 1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '6px'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.85rem'
              }}
            >
              Verified Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ gap: '0.5rem' }}
              >
                <GithubIcon size={16} />
                View Source Repository
                <ExternalLink size={14} style={{ color: 'var(--accent-gold)' }} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ gap: '0.5rem' }}
              >
                Launch Live Deployment
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
