import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { profileData } from './data/portfolioData';

function App() {
  const activeSection = 'about';


  return (
    <>
      <Header activeSection={activeSection} />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero profile={profileData} />

        {/* About Section */}
        <About profile={profileData} />

        {/* Skills Section Placeholder */}
        <section id="skills" className="section border-top">
          <div className="container">
            <h2>Skills</h2>
            <p style={{ color: 'var(--text-muted)' }}>Skills 컴포넌트 구현 대기 중...</p>
          </div>
        </section>

        {/* Projects Section Placeholder */}
        <section id="projects" className="section border-top">
          <div className="container">
            <h2>Projects</h2>
            <p style={{ color: 'var(--text-muted)' }}>Projects 컴포넌트 구현 대기 중...</p>
          </div>
        </section>

        {/* Experience Section Placeholder */}
        <section id="experience" className="section border-top">
          <div className="container">
            <h2>Experience</h2>
            <p style={{ color: 'var(--text-muted)' }}>Experience 컴포넌트 구현 대기 중...</p>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="section border-top">
          <div className="container">
            <h2>Contact</h2>
            <p style={{ color: 'var(--text-muted)' }}>Contact 컴포넌트 구현 대기 중...</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

