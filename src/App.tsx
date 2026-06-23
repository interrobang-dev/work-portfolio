import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { profileData, skillsData, projectsData, experienceData, interviewQuestions, certificatesData } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // 화면 중간 영역에 걸칠 때 변경되도록 마진 설정
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero profile={profileData} />

        {/* About Section */}
        <About profile={profileData} interviewQuestions={interviewQuestions} />


        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section */}
        <Projects projects={projectsData} />

        {/* Experience Section */}
        <Experience experienceList={experienceData} certificates={certificatesData} />

        {/* Contact Section */}
        <Contact profile={profileData} />
      </main>
    </>
  );
}


export default App;


