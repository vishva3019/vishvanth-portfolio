import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Maximize2,
  Navigation,
  Sparkles,
  Bus,
  TrendingDown
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects, secondaryProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [roadBlocked, setRoadBlocked] = useState(false);

  // Dynamic preview state for SPENDAHEAD simulation
  const [expenseAmount, setExpenseAmount] = useState(12500);

  return (
    <section id="projects" className="section-wrapper" style={{ backgroundColor: 'rgba(9, 11, 16, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-container">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">02 — FEATURED ENGINEERING</span>
          </div>

          <h2 className="section-title">
            Curated Systems <br />
            <span className="italic-serif">&amp; Flagship Architectures.</span>
          </h2>

          <p className="section-subtitle">
            A selective exhibition of production-grade distributed architectures, disaster routing
            engines, civic GTFS telemetry platforms, and multimodal AI platforms built to solve real-world problems.
          </p>
        </div>

        {/* Flagship Projects Exhibition (Alternating High-End Layout) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6.5rem' }}>
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '3rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(15, 18, 27, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                  position: 'relative'
                }}
                className={`project-article ${isEven ? 'project-even' : ''}`}
              >
                {/* Visual Preview Column */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#0a0d14',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    minHeight: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: `0 15px 45px rgba(0, 0, 0, 0.7)`
                  }}
                  className="project-preview-box"
                >
                  {/* Top Bar with Status / Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 1.25rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: 'rgba(13, 17, 24, 0.85)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: project.color,
                          boxShadow: `0 0 10px ${project.color}`
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-secondary)',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-tech)',
                        fontWeight: 600,
                        backgroundColor: 'rgba(201, 166, 107, 0.12)',
                        border: '1px solid rgba(201, 166, 107, 0.25)',
                        color: 'var(--accent-gold-light)',
                        borderRadius: '3px'
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Interactive Visual Blueprint depending on project */}
                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {project.id === 'risknresq' && (
                      <div
                        style={{
                          backgroundColor: 'rgba(7, 9, 13, 0.9)',
                          border: '1px solid rgba(96, 165, 250, 0.25)',
                          borderRadius: '8px',
                          padding: '1.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Navigation size={16} style={{ color: '#60a5fa' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#60a5fa' }}>
                              GEOSPATIAL CORRIDOR ROUTING
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => setRoadBlocked(!roadBlocked)}
                            style={{
                              padding: '0.35rem 0.75rem',
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              backgroundColor: roadBlocked ? 'rgba(239, 68, 68, 0.2)' : 'rgba(96, 165, 250, 0.15)',
                              border: roadBlocked ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(96, 165, 250, 0.4)',
                              color: roadBlocked ? '#f87171' : '#93c5fd',
                              borderRadius: '4px'
                            }}
                          >
                            {roadBlocked ? '⚠ 5th Cross Blocked (Detour Active)' : 'Simulate Flood Obstacle'}
                          </button>
                        </div>

                        {/* Interactive Graph Display */}
                        <div
                          style={{
                            height: '110px',
                            borderRadius: '6px',
                            backgroundColor: '#05070a',
                            border: '1px dashed rgba(255, 255, 255, 0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            padding: '0 1rem'
                          }}
                        >
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', margin: '0 auto 4px' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#94a3b8' }}>User Node</span>
                          </div>

                          <div
                            style={{
                              flex: 1,
                              height: '2px',
                              background: roadBlocked
                                ? 'linear-gradient(90deg, #10b981, #f59e0b, #60a5fa)'
                                : 'linear-gradient(90deg, #10b981, #60a5fa)',
                              margin: '0 0.5rem',
                              position: 'relative'
                            }}
                          >
                            {roadBlocked && (
                              <span
                                style={{
                                  position: 'absolute',
                                  top: '-18px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  fontSize: '0.65rem',
                                  color: '#f87171',
                                  fontFamily: 'var(--font-mono)'
                                }}
                              >
                                [Dijkstra Recalculating]
                              </span>
                            )}
                          </div>

                          <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#60a5fa', margin: '0 auto 4px' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#94a3b8' }}>Rescue Hub</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b' }}>
                            GEOFENCE CLASSIFICATION: {roadBlocked ? 'MODERATE DETOUR' : 'LOW RISK VECTORS'}
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#38bdf8' }}>
                            100-PT MATCH: 94/100
                          </span>
                        </div>
                      </div>
                    )}

                    {project.id === 'campusretain' && (
                      <div
                        style={{
                          backgroundColor: 'rgba(7, 9, 13, 0.9)',
                          border: '1px solid rgba(192, 132, 252, 0.25)',
                          borderRadius: '8px',
                          padding: '1.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                          <Sparkles size={16} style={{ color: '#c084fc' }} />
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#c084fc' }}>
                            GEMINI MULTIMODAL INGESTION
                          </span>
                        </div>

                        <div
                          style={{
                            padding: '0.85rem',
                            borderRadius: '6px',
                            backgroundColor: '#05070a',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem'
                          }}
                        >
                          <div style={{ color: '#e2e8f0' }}>&gt; analyze_asset(photo_buffer) =&gt; 200 OK</div>
                          <div style={{ color: '#94a3b8' }}>&nbsp;&nbsp;category: &quot;Electronics / Laptop&quot; (99.4% conf)</div>
                          <div style={{ color: '#94a3b8' }}>&nbsp;&nbsp;visual_cues: [&quot;Space Gray&quot;, &quot;CSE Alliance Decal&quot;]</div>
                          <div style={{ color: '#34d399' }}>&nbsp;&nbsp;claim_identity: &quot;Session Authenticated (Anti-Spoof)&quot;</div>
                          <div style={{ color: '#c084fc' }}>&nbsp;&nbsp;db_latency: &quot;22ms Neon PostgreSQL Eager Load&quot;</div>
                        </div>
                      </div>
                    )}

                    {project.id === 'nammaroute' && (
                      <div
                        style={{
                          backgroundColor: 'rgba(7, 9, 13, 0.9)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          borderRadius: '8px',
                          padding: '1.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Bus size={16} style={{ color: '#38bdf8' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#38bdf8' }}>
                              BMTC TELEMETRY FEED // ROUTE 500-D
                            </span>
                          </div>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#34d399' }}>
                            [LIVE GTFS]
                          </span>
                        </div>

                        <div
                          style={{
                            padding: '0.85rem',
                            borderRadius: '6px',
                            backgroundColor: '#05070a',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem'
                          }}
                        >
                          <div style={{ color: '#38bdf8' }}>GROUNDED STOPS: 9,960 in SQLite (367 MB DB)</div>
                          <div style={{ color: '#94a3b8' }}>ACTIVE VARIANT: Hebbal TTMC &lt;-&gt; Central Silk Board</div>
                          <div style={{ color: '#94a3b8' }}>JOURNEY COMPUTATION: Sequence-Aware Direct Line</div>
                          <div style={{ color: 'var(--accent-gold)' }}>ETM THERMAL RECEIPT: HMAC Cryptographic Hash OK</div>
                        </div>
                      </div>
                    )}

                    {project.id === 'spendahead' && (
                      <div
                        style={{
                          backgroundColor: 'rgba(7, 9, 13, 0.9)',
                          border: '1px solid rgba(201, 166, 107, 0.25)',
                          borderRadius: '8px',
                          padding: '1.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <TrendingDown size={16} style={{ color: 'var(--accent-gold)' }} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                              EXPENDITURE SUITABILITY MODEL
                            </span>
                          </div>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#f59e0b' }}>
                            SCORE: 48/100
                          </span>
                        </div>

                        <div
                          style={{
                            padding: '0.85rem',
                            borderRadius: '6px',
                            backgroundColor: '#05070a',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.45rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: 'var(--text-primary)' }}>PURCHASE: ₹{expenseAmount.toLocaleString()}</span>
                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                              {[4500, 12500, 32000].map((amt) => (
                                <button
                                  key={amt}
                                  type="button"
                                  onClick={() => setExpenseAmount(amt)}
                                  style={{
                                    padding: '0.15rem 0.4rem',
                                    fontSize: '0.65rem',
                                    borderRadius: '3px',
                                    border: expenseAmount === amt ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                                    background: expenseAmount === amt ? 'rgba(201, 166, 107, 0.15)' : 'transparent',
                                    color: expenseAmount === amt ? 'var(--accent-gold-light)' : 'var(--text-muted)'
                                  }}
                                >
                                  ₹{(amt / 1000).toFixed(1)}k
                                </button>
                              ))}
                            </div>
                          </div>
                          <div style={{ color: expenseAmount > 20000 ? '#ef4444' : expenseAmount > 10000 ? '#f59e0b' : '#10b981' }}>
                            {expenseAmount > 20000
                              ? 'ADVISORY: High liquidity depletion ahead of upcoming obligations'
                              : expenseAmount > 10000
                              ? 'ADVISORY: Moderate discretionary impact on monthly cash flow'
                              : 'ADVISORY: Safe purchase within current liquid buffer'}
                          </div>
                          <div style={{ color: '#94a3b8' }}>FISCAL FORESIGHT: Predictive cash flow grounded</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.8rem 1.25rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: 'rgba(10, 13, 19, 0.95)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent-gold-light)'
                      }}
                    >
                      <Maximize2 size={13} style={{ color: 'var(--accent-gold)' }} />
                      Inspect Architecture
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'var(--text-secondary)' }}
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'var(--accent-gold)' }}
                          aria-label="Live Deployment"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Editorial Description Column */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {/* Oversized Number & Category */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                        fontWeight: 800,
                        color: 'var(--accent-gold)',
                        lineHeight: 1
                      }}
                    >
                      {project.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                      }}
                    >
                      / 04
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                      marginBottom: '0.6rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.98rem',
                      fontWeight: 500,
                      color: 'var(--accent-gold-light)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      marginBottom: '1.75rem',
                      paddingLeft: 0
                    }}
                  >
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.65rem',
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-gold)',
                            flexShrink: 0
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '2rem'
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                    >
                      Inspect Blueprint
                      <Maximize2 size={14} />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        Source Code
                        <GithubIcon size={14} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                      >
                        Live System
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Secondary Archive Showcase (Goflyp, ChitHub, Furniture Rental, Robotic Grabber) */}
        <div style={{ marginTop: '7rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-gold)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}
            >
              PROJECT ARCHIVE &amp; SPECIALIZED INITIATIVES
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '0.4rem'
              }}
            >
              Additional Verified Systems
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {secondaryProjects.map((item, sIdx) => (
              <div
                key={sIdx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--accent-gold)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.category}
                    </span>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '1rem'
                    }}
                  >
                    {item.technologies.map((t) => (
                      <span key={t} style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        @media (min-width: 992px) {
          .project-article {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
          .project-even {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .project-even .project-preview-box {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
