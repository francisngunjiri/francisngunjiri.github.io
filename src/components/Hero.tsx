
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
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-twilight-purple/10"></div>
      
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
          <div className="font-mono">
            <span className="text-soft-green">Developer</span>
          </div>
        </div>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Passionate about creative problem-solving, embedded systems, AI tools, and Linux-based development. 
          From Android apps to kernel hacking, I love bringing ideas to life through code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            className="button-gradient text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
            onClick={() => window.open('mailto:francisngunjiri678@gmail.com')}
          >
            Get In Touch
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
