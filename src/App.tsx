import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { profileData, skillsData, experienceData } from './data/portfolioData';

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

        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section Placeholder */}
        <section id="projects" className="section border-top">
          <div className="container">
            <h2>Projects</h2>
            <p style={{ color: 'var(--text-muted)' }}>Projects 컴포넌트 구현 대기 중...</p>
          </div>
        </section>

        {/* Experience Section */}
        <Experience experienceList={experienceData} />


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

