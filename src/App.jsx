import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import InteractivePlayground from './components/InteractivePlayground';
import TestimonialsSection from './components/TestimonialsSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ResumeModal from './components/ResumeModal';

import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('cyber');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Apply theme class to document body / root
  const themeClasses = {
    cyber: 'bg-slate-950 text-slate-100',
    violet: 'bg-[#0b0716] text-purple-50',
    matrix: 'bg-[#030d08] text-emerald-50',
    light: 'bg-slate-900 text-slate-100',
  };

  return (
    <div className={`min-h-screen relative font-sans ${themeClasses[theme] || themeClasses.cyber} selection:bg-indigo-500 selection:text-white`}>
      
      {/* Interactive Particle Constellation Background */}
      <ParticleBackground theme={theme} />

      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        theme={theme}
        setTheme={setTheme}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          personal={portfolioData.personal}
          stats={portfolioData.stats}
          techStackTicker={portfolioData.techStackTicker}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        <SkillsSection skills={portfolioData.skills} />

        <ProjectsSection projects={portfolioData.projects} />

        <ExperienceSection 
          experience={portfolioData.experience} 
          educationAndCerts={portfolioData.educationAndCerts}
        />

        <InteractivePlayground />

        <TestimonialsSection testimonials={portfolioData.testimonials} />

        <ArticlesSection articles={portfolioData.articles} />

        <ContactSection personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        personal={portfolioData.personal}
      />

      {/* Interactive CLI Terminal Emulator */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        personal={portfolioData.personal}
        skills={portfolioData.skills}
        projects={portfolioData.projects}
        experience={portfolioData.experience}
        onOpenResume={() => setResumeOpen(true)}
        setTheme={setTheme}
      />

      {/* Executive Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        data={portfolioData}
      />

    </div>
  );
}
