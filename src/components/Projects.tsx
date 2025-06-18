
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SmartPal",
      description: "AI-powered assistant app with chat, journal, planner, and SQLite mood tracker. A comprehensive companion for daily life management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tech: ["Kotlin", "SQLite", "AI", "Android"],
      gradient: "from-electric-blue to-blue-600"
    },
    {
      title: "Athera",
      description: "Offline, poetic therapeutic companion built in Kotlin. Provides emotional support through carefully crafted interactions.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      tech: ["Kotlin", "Android", "Offline AI", "Therapy"],
      gradient: "from-soft-green to-green-600"
    },
    {
      title: "StockPilot",
      description: "Cross-platform stock manager with Firebase backend. Real-time inventory tracking with advanced analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Firebase", "Cross-platform", "Analytics", "Real-time"],
      gradient: "from-twilight-purple to-purple-600"
    },
    {
      title: "JUCE Vocal Synth",
      description: "Experimental vocaloid-style synthesizer built with JUCE framework. Pushing the boundaries of audio synthesis.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["JUCE", "C++", "Audio", "Synthesis"],
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Universal State Engine",
      description: "A 3D+ simulated state graph to represent energy and matter. Experimental physics simulation engine.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["Physics", "3D", "Simulation", "C++"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-dark-bg to-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of innovation, from AI companions to synthesizer programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient overflow-hidden hover:scale-105 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-soft-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="button-gradient text-white flex-1"
                  >
                    View Project
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-soft-green text-soft-green hover:bg-soft-green hover:text-dark-bg px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
