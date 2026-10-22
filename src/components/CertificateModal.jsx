import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

export default function CertificateModal({ item, onClose }) {
  if (!item) return null;

  const isImage = item.certificateImage || (item.certificateFile && item.certificateFile.match(/\.(jpg|jpeg|png)$/i));

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
          backgroundColor: 'rgba(7, 8, 10, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '780px',
            backgroundColor: '#0d1017',
            border: '1px solid rgba(201, 166, 107, 0.35)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
            maxHeight: '90vh',
            overflowY: 'auto'
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
              top: '1.25rem',
              right: '1.25rem',
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
          >
            <X size={18} />
          </button>

          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em'
              }}
            >
              VERIFIED RECORD // {item.year}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '0.3rem',
                marginBottom: '0.4rem'
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: 'var(--accent-gold-light)' }}>
              {item.organization}
            </p>
          </div>

          {/* Certificate Media */}
          {isImage ? (
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '1.5rem',
                backgroundColor: '#05070a'
              }}
            >
              <img
                src={item.certificateImage || item.certificateFile}
                alt={item.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : (
            <div
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px dashed rgba(201, 166, 107, 0.3)',
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}
            >
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Official verification document in PDF format.
              </p>
              {item.certificateFile && (
                <a
                  href={item.certificateFile}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  Open Official PDF
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          )}

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {item.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            {item.certificateFile && (
              <a
                href={item.certificateFile}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ gap: '0.5rem', padding: '0.65rem 1.4rem' }}
              >
                View Full Document
                <ExternalLink size={14} style={{ color: 'var(--accent-gold)' }} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
