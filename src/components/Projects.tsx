
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, Heart, TrendingUp, Music, Atom } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SmartPal",
      subtitle: "Offline AI Chat Companion",
      description: "A Kotlin-based app that combines journaling, planning, and mood tracking with a chat AI trained for empathy and clarity. Built using Firebase, SQLite, and custom local NLP models.",
      whatILearned: "Advanced offline AI processing, emotional intelligence in UX design, and local data encryption.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tech: ["Kotlin", "SQLite", "Firebase", "TensorFlow Lite", "NLP"],
      gradient: "from-electric-blue to-blue-600",
      icon: Brain
    },
    {
      title: "Athera",
      subtitle: "Poetic Therapeutic Companion",
      description: "Offline, poetic therapeutic companion built in Kotlin. Provides emotional support through carefully crafted interactions, focusing on mindfulness and creative expression without internet dependency.",
      whatILearned: "Psychology-driven UX, offline-first architecture, and the intersection of poetry and code.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      tech: ["Kotlin", "Android", "Offline AI", "Poetry Engine", "SQLite"],
      gradient: "from-soft-green to-green-600",
      icon: Heart
    },
    {
      title: "StockPilot",
      subtitle: "Cross-Platform Inventory Manager",
      description: "Real-time inventory tracking with advanced analytics and Firebase backend. Features predictive stock alerts, multi-location management, and detailed reporting dashboard.",
      whatILearned: "Real-time data synchronization, predictive analytics, and scalable Firebase architecture.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Firebase", "React", "Analytics", "Real-time DB", "PWA"],
      gradient: "from-twilight-purple to-purple-600",
      icon: TrendingUp
    },
    {
      title: "JUCE Vocal Synth",
      subtitle: "Experimental Vocaloid Engine",
      description: "Experimental vocaloid-style synthesizer built with JUCE framework. Implements custom formant synthesis, real-time voice modulation, and expressive MIDI control for creating human-like vocals.",
      whatILearned: "Audio DSP programming, formant synthesis theory, and real-time audio processing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["JUCE", "C++", "Audio DSP", "MIDI", "Formant Synthesis"],
      gradient: "from-pink-500 to-red-500",
      icon: Music
    },
    {
      title: "Universal State Engine",
      subtitle: "3D+ Matter Simulation",
      description: "A 3D+ simulated state graph to represent energy and matter interactions. Experimental physics simulation engine exploring quantum-like behaviors in digital space with custom particle systems.",
      whatILearned: "Advanced 3D mathematics, particle physics simulation, and quantum-inspired computing concepts.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["C++", "OpenGL", "Physics Engine", "Particle Systems", "Quantum Computing"],
      gradient: "from-yellow-500 to-orange-500",
      icon: Atom
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-dark-bg to-card-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of innovation, from AI companions to synthesizer programming — each project a step towards the future
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="card-gradient overflow-hidden hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-dark-bg/80 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-soft-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-electric-blue font-semibold mb-1">What I Learned:</p>
                    <p className="text-xs text-gray-400 italic leading-relaxed">
                      {project.whatILearned}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20 hover:border-white/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="button-gradient text-white flex-1 text-xs"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      View Project
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                    >
                      <Github size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-soft-green text-soft-green hover:bg-soft-green hover:text-dark-bg px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
