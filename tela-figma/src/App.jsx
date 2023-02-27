import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <section id="home">
        <h1>Home Section</h1>
      </section>
      <section id="about">
        <h1>About Section</h1>
      </section>
      <section id="services">
        <h1>Services Section</h1>
      </section>
      <section id="contact">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}

export default App