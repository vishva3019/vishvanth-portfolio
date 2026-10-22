import Loader from './components/Loader';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Interactive Cinematic Background Particle Canvas */}
      <BackgroundCanvas />

      {/* Restrained Desktop Cursor Follower */}
      <CustomCursor />

      {/* Entrance Loading Experience */}
      <Loader />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <Hero />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* About Section */}
        <About />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* Skills & Technologies Matrix */}
        <Skills />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* Achievements & Verified Honors */}
        <Achievements />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* Journey & Timeline */}
        <Journey />

        {/* Cinematic Golden Hairline Divider */}
        <div className="luxury-divider" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}