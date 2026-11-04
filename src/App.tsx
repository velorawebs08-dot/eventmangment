import { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { ProcessSteps } from './components/ProcessSteps.tsx';
import { Testimonial } from './components/Testimonial.tsx';
import { ContactForm } from './components/ContactForm.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#6E0B17] selection:text-white">
      {/* 3.1 Header (sticky, white) */}
      <Header activeSection={activeSection} />

      <main className="flex-1 flex flex-col">
        {/* 3.2 Hero (id="home") */}
        <Hero />

        {/* 3.3 About (id="about") */}
        <About />

        {/* 3.4 Our Services — 3 Simple Steps (id="services") */}
        <ProcessSteps />

        {/* 3.5 Testimonial */}
        <Testimonial />

        {/* 3.6 Contact Us (id="contact") */}
        <ContactForm />
      </main>

      {/* 3.7 Footer */}
      <Footer />
    </div>
  );
}
