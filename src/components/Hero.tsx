
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-twilight-purple/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-soft-green rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-electric-blue rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-twilight-purple rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-soft-green rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-blue to-soft-green p-1 animate-float">
            <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
                alt="Francis Ndirangu"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-gradient">Francis</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="font-mono space-y-2">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-xl">
              <span className="text-soft-green">AI Companion Builder</span>
              <span className="text-white">•</span>
              <span className="text-electric-blue">Kotlin Dev</span>
              <span className="text-white">•</span>
              <span className="text-twilight-purple">Kernel Hacker</span>
            </div>
            <div className="text-lg md:text-xl">
              <span className="text-yellow-400">Creative Technologist</span>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Developer, thinker, and maker of futuristic tools. From offline AI companions to matter-synth theory, 
          I blend code, consciousness, and curiosity into unforgettable experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            className="button-gradient text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
            onClick={() => window.open('mailto:francisngunjiri678@gmail.com')}
          >
            Let's Collaborate
          </Button>
          <Button 
            variant="outline" 
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 rounded-lg"
          >
            Download CV
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-soft-green hover:text-white transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
