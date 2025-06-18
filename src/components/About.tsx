
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Book } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with a deep love for creative problem-solving and innovation. 
              My journey spans from mobile app development to kernel-level programming, always driven 
              by curiosity and the desire to build something meaningful.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing a Diploma in ICT (KNEC), I've developed expertise in Android development, 
              AI-powered applications, and embedded systems. My previous studies in ETS at MMUST laid 
              the foundation for my technical understanding.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring synthesizer programming, working on AI companions, 
              or diving deep into Linux systems. I believe in learning through building, and every project 
              teaches me something new.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-electric-blue mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-soft-green">Diploma in ICT (KNEC)</p>
                    <p className="text-gray-400">Currently Pursuing</p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-green">ETS - MMUST</p>
                    <p className="text-gray-400">Previous Studies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-twilight-purple mr-3" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Synthesizer Programming',
                    'AI Companions',
                    'Blockchain Development',
                    'Mobile Pay Systems',
                    'Embedded Systems',
                    'Kernel Hacking'
                  ].map((interest) => (
                    <span 
                      key={interest}
                      className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-soft-green/20 rounded-full text-sm"
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
