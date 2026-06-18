import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { profileData, skillsData, projectsData, experienceData } from './data/portfolioData';

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

        {/* Projects Section */}
        <Projects projects={projectsData} />


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

