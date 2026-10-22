import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);

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
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* 1. Left: Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="navbar-brand"
          >
            <span>VISHVANTH</span>
            <span className="navbar-brand-dot" />
          </a>

          {/* 2. Center: Desktop Navigation Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`navbar-link-item ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Right: Single Desktop CTA */}
          <div className="navbar-action">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="navbar-cta"
            >
              Let's Connect
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Only mounted/active when mobileMenuOpen is true) */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-list">
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                margin: '0 0 10px 0'
              }}
            >
              INDEX // NAVIGATION
            </p>
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="mobile-nav-num">0{idx + 1}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Footer with Social Icons and Single Mobile CTA */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#94a3b8' }}
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#94a3b8' }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="navbar-cta"
              style={{ width: '100%', justifyContent: 'center', padding: '0.8rem 1.4rem' }}
            >
              Let's Connect
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
