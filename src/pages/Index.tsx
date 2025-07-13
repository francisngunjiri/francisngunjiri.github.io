
import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, Github, Linkedin, Code, User, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import LabChallenges from '@/components/LabChallenges';
import GitHub from '@/components/GitHub';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LabChallenges />
        <GitHub />
        <Contact />
      </main>

      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Francis Ndirangu. Built with passion and precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
