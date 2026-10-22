import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 80,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(7, 8, 10, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(201, 166, 107, 0.15)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '90px',
            transition: 'height 0.4s ease'
          }}
        >
          {/* Brand Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--text-primary)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}
            >
              VISHVANTH
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold)',
                display: 'inline-block',
                boxShadow: '0 0 8px rgba(201, 166, 107, 0.9)'
              }}
            />
          </a>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                    transition: 'color 0.25s ease',
                    padding: '0.4rem 0'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item.label}
                  {/* Active Gold Indicator */}
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '-2px',
                      width: isActive ? '100%' : '0',
                      height: '1px',
                      backgroundColor: 'var(--accent-gold)',
                      boxShadow: '0 0 6px rgba(201, 166, 107, 0.7)',
                      transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-secondary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.74rem',
                letterSpacing: '0.15em'
              }}
            >
              Let's Connect
              <ArrowUpRight size={14} style={{ color: 'var(--accent-gold)' }} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              color: 'var(--text-primary)',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 75,
          backgroundColor: 'rgba(7, 8, 10, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6rem 2rem 2.5rem',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            NAVIGATION INDEX
          </p>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-gold)',
                    opacity: 0.6
                  }}
                >
                  0{idx + 1}
                </span>
                {item.label}
              </a>
            );
          })}
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
