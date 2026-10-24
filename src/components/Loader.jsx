import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete?.();
            }, 600);
          }, 1000);
          return 100;
        }
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#07080a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onClick={() => {
            setIsFinished(true);
            onComplete?.();
          }}
        >
          {/* Savirajyam-inspired gold luminous core */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: [0.2, 1.2, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Glowing gold dot */}
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#c9a66b',
                boxShadow: '0 0 50px 15px rgba(201, 166, 107, 0.75)',
                marginBottom: '1.75rem'
              }}
            />

            {/* Monogram Brand */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontWeight: 700,
                letterSpacing: '0.3em',
                color: '#f5f5f7',
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              VISHVANTH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                color: '#c9a66b',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
                marginBottom: '2.5rem'
              }}
            >
              ENGINEERING & SECURITY
            </motion.p>
          </motion.div>

          {/* Minimalist Progress Indicator */}
          <div
            style={{
              width: '180px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #c9a66b, #f2ead8)',
                boxShadow: '0 0 10px rgba(201, 166, 107, 0.8)',
                transition: 'width 0.15s ease-out'
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(245, 245, 247, 0.4)',
              letterSpacing: '0.2em'
            }}
          >
            INITIALIZING {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
