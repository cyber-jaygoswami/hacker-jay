import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatIWorkOn from './sections/WhatIWorkOn';
import Experience from './sections/Experience';
import TeachingEducation from './sections/TeachingEducation';
import Certifications from './sections/Certifications';
import CloudSecurity from './sections/CloudSecurity';
import LearningRoadmap from './sections/LearningRoadmap';
import Research from './sections/Research';
import AttackSurfaceLab from './sections/AttackSurfaceLab';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections mapped to user journey */}
      <main className="flex-grow">
        {/* 1. Who is this? */}
        <Hero />

        {/* 2. What does he work on? */}
        <WhatIWorkOn />

        {/* 3. What has he actually done? */}
        <Experience />
        <TeachingEducation />

        {/* 4. What certifications does he have? */}
        <Certifications />

        {/* 5. What is he currently learning? Cloud Architecture & Roadmap */}
        <CloudSecurity />
        <LearningRoadmap />

        {/* 6. What security research does he do? */}
        <Research />
        <AttackSurfaceLab />
        <Skills />

        {/* 7. Who is he & How do I contact him? */}
        <About />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
