import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h2>
          VISHVANTH<span></span>
        </h2>

        <div className="nav-links">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#certificates">Certificates</a>
  <a href="#contact">Contact</a>
</div>

        <a
          href="https://github.com/vishva3019"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub ↗
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Vishvanth</span>
            <br />
            Full Stack Developer.
          </h1>

          <p className="hero-description">
            I build modern, responsive websites and real-world applications
            while continuously learning and improving my skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects ↗
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume ↓
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/vishva3019"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vishvanth"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:vishvanth193049@gmail.com">Email</a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="hero-visual">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img
                src="/images/profile.jpg"
                alt="Vishvanth"
              />
            </div>

            <div className="profile-badge">
              <span>●</span> Available for opportunities
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Turning ideas into
          <br />
          real-world solutions.
        </h2>

        <p className="section-text">
          I'm a B.Tech Computer Science & Engineering student at Alliance
          University, passionate about full stack web development and
          building applications that solve practical problems.
        </p>

        <p className="section-text">
          I enjoy learning new technologies, working on projects, and
          improving my programming skills. I'm also exploring ethical
          hacking, cyber security, and iOS development using Swift.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>B.Tech Computer Science & Engineering</p>
            <small>Alliance University</small>
          </div>

          <div className="about-card">
            <h3>💻 Focus</h3>
            <p>Full Stack Web Development</p>
            <small>Building practical applications</small>
          </div>

          <div className="about-card">
            <h3>🎯 Goal</h3>
            <p>Become a Software Engineer</p>
            <small>Building scalable products</small>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Python · Java · C · C++ · JavaScript · SQL</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML · CSS · React · Tailwind CSS</p>
          </div>

          <div className="skill-card">
            <h3>Backend & Database</h3>
            <p>Flask · Node.js · Express.js · MongoDB · PostgreSQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git · GitHub · VS Code · Fusion 360 · Vercel</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <p className="section-label">03 — PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Campus Retain</h3>

            <p>
              A complete Lost & Found platform for colleges with
              authentication, admin dashboard, claim verification,
              and email notifications.
            </p>

            <div className="project-tags">
              <span>Flask</span>
              <span>PostgreSQL</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://campusretain.in"
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Furniture Rental</h3>

            <p>
              A modern furniture rental platform featuring product
              listings, booking system, login, registration,
              and admin dashboard.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#contact">Learn More ↗</a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>ChitHub</h3>

            <p>
              An online chit fund management and auction platform
              with member management, monthly bidding, winner
              selection, and reports.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>SQL</span>
            </div>

            <a href="#contact">Learn More ↗</a>
          </div>

          <div className="project-card">
            <div className="project-number">04</div>

            <h3>Robotic Grabber</h3>

            <p>
              Designed and modeled a robotic grabber using Fusion 360,
              focusing on mechanical design and material selection.
            </p>

            <div className="project-tags">
              <span>Fusion 360</span>
              <span>Aluminum 6061</span>
              <span>ABS Plastic</span>
            </div>

            <a href="#contact">Learn More ↗</a>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="learning-section">
        <div>
          <p className="section-label">04 — CURRENTLY LEARNING</p>

          <h2>
            Always learning.
            <br />
            Always building.
          </h2>
        </div>

        <div className="learning-list">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Java</span>
          <span>DSA</span>
          <span>Ethical Hacking</span>
          <span>Swift</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <p className="section-label">05 — GET IN TOUCH</p>

        <h2>
          Let's build something
          <br />
          <span>great together.</span>
        </h2>

        <p>
          I'm always open to learning, collaborating, and discussing
          interesting projects.
        </p>

        <a
          href="mailto:vishvanth193049@gmail.com"
          className="primary-btn"
        >
          Say Hello ↗
        </a>
      </section>

            {/* Certificates Section */}
<section id="certificates" className="section">
  <p className="section-label">05 — CERTIFICATIONS</p>

  <h2>
    Learning beyond
    <br />
    the classroom.
  </h2>

  <p className="section-text">
    Certifications and achievements that reflect my continuous
    learning and participation in technology events.
  </p>

  <div className="certificates-grid">

    <div className="certificate-card">
      <div className="certificate-icon">🤖</div>

      <h3>Agentic AI Certified Foundations Associate</h3>

      <p>Oracle · 2026</p>

      <span>Artificial Intelligence</span>

      <a
        href="/certificates/eCertificate_.pdf"
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        View Certificate ↗
      </a>
    </div>

    <div className="certificate-card">
      <div className="certificate-icon">💻</div>

      <h3>AI Tools & Claude Workshop</h3>

      <p>Be10X · 2026</p>

      <span>Artificial Intelligence</span>

      <a
        href="/certificates/Certificate.pdf"
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        View Certificate ↗
      </a>
    </div>

    <div className="certificate-card">
      <div className="certificate-icon">📋</div>

      <h3>Project Manager Job Simulation</h3>

      <p>Siemens / Forage · 2026</p>

      <span>Project Management</span>

      <a
        href="/certificates/SEIMENS_CERTIFICATE%20(1).pdf"
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        View Certificate ↗
      </a>
    </div>

    <div className="certificate-card">
      <div className="certificate-icon">🏆</div>

      <h3>3rd Place — Team CODEX</h3>

      <p>HackerRank · 2026</p>

      <span>Hackathon Achievement</span>

      <a
        href="/certificates/Certificate_Vishvanth.jpg"
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        View Certificate ↗
      </a>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Vishvanth</p>

        <div>
          <a
            href="https://github.com/vishva3019"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vishvanth"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;