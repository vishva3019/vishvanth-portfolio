import { useState } from 'react';
import { Mail, Copy, Check, Send, Download, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Compose authentic mailto URI
    const subjectEncoded = encodeURIComponent(
      formState.subject ? `[Portfolio Inquiry] ${formState.subject}` : `[Portfolio Inquiry] Hello from ${formState.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatusMessage('Opening your email client to send...');
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '50vh',
          background: 'radial-gradient(ellipse at center, rgba(201, 166, 107, 0.08) 0%, rgba(96, 165, 250, 0.04) 50%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow-container" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">06 — GET IN TOUCH</span>
            <div className="eyebrow-line" />
          </div>

          <h2 className="section-title">
            Have an interesting problem? <br />
            <span className="italic-serif">Let's build something.</span>
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I am always open to exploring software engineering opportunities, hackathon collaborations,
            and discussions on distributed resilience, cybersecurity, and intelligent systems.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Direct Communications Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                DIRECT CHANNELS
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}
              >
                Let's start a conversation.
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you have an inquiry about one of my projects (RiskN-ResQ, CampusRetain, NammaRoute),
                or want to discuss an internship or software development role, feel free to reach out directly.
              </p>

              {/* Email Copier Box */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-gold)' }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        wordBreak: 'break-all'
                      }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(201, 166, 107, 0.3)',
                    backgroundColor: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(201, 166, 107, 0.1)',
                    color: copied ? '#34d399' : 'var(--accent-gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Location & Status Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {personalInfo.location} (GMT+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: '0.5rem', padding: '0.7rem 1.25rem' }}
                >
                  <GithubIcon size={15} />
                  GitHub
                  <ArrowUpRight size={13} style={{ color: 'var(--accent-gold)' }} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: '0.5rem', padding: '0.7rem 1.25rem' }}
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                  <ArrowUpRight size={13} style={{ color: 'var(--accent-gold)' }} />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary"
                  style={{ gap: '0.5rem', padding: '0.7rem 1.25rem' }}
                >
                  <Download size={15} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form (Authentic Mailto Generator) */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                TRANSMISSION FORM
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}
              >
                Send a quick message.
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(7, 9, 13, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(7, 9, 13, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(7, 9, 13, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(7, 9, 13, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                {statusMessage && (
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent-gold-light)', fontFamily: 'var(--font-mono)' }}>
                    {statusMessage}
                  </p>
                )}

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                  Send via Email Client
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
