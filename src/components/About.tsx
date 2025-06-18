
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Book, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-dark-bg to-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center lg:text-left">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium mb-6">
                I'm Francis Ndirangu — a developer, thinker, and maker of futuristic tools.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                From offline AI companions to matter-synth theory, I blend code, consciousness, and curiosity 
                into unforgettable experiences. Whether it's Kotlin apps, embedded systems, or synthesizers, 
                I build with purpose and poetic logic.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from mobile app development to kernel-level programming, always driven 
                by curiosity and the desire to build something meaningful. I believe in learning through 
                building, and every project teaches me something new about the intersection of technology 
                and human experience.
              </p>
            </div>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold">Currently Working On</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>🤖 Advanced AI companion architecture</p>
                  <p>🎵 JUCE-based vocal synthesizer experiments</p>
                  <p>🔧 Embedded systems for IoT applications</p>
                  <p>⚡ Blockchain payment systems from scratch</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-electric-blue mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-soft-green">Diploma in ICT</p>
                    <p className="text-gray-400">Pursuing</p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-green">Degree in Education Technology (Computer Studies)</p>
                    <p className="text-gray-400">ETS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-twilight-purple mr-3" />
                  <h3 className="text-xl font-semibold">Philosophy</h3>
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p className="italic">
                    "Technology should feel like magic, work like science, and serve like poetry. 
                    Every line of code is a brushstroke in the canvas of tomorrow."
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Synthesizer Programming',
                    'AI Companions',
                    'Blockchain Development',
                    'Mobile Pay Systems',
                    'Embedded Systems',
                    'Kernel Hacking',
                    'Matter-Synth Theory'
                  ].map((interest) => (
                    <span 
                      key={interest}
                      className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-soft-green/20 rounded-full text-xs hover:scale-105 transition-transform cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
