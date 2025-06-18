
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Kotlin", "Java", "C", "C++", "Python", "Rust", "JavaScript", "Bash"],
      color: "from-electric-blue to-blue-600"
    },
    {
      title: "Technologies & Tools",
      icon: "🛠️",
      skills: ["Android Studio", "Firebase", "Termux", "Qt", "JUCE", "Spring Boot", "Git", "VS Code", "NetBeans"],
      color: "from-soft-green to-green-600"
    },
    {
      title: "Platforms & Systems",
      icon: "🖥️",
      skills: ["Linux (Ubuntu 24.04 LTS)", "Windows", "Android", "Embedded Systems"],
      color: "from-twilight-purple to-purple-600"
    },
    {
      title: "Creative Tools",
      icon: "🎨",
      skills: ["Obsidian", "Blender", "ChatGPT", "TFLite", "SQLite", "Firestore", "Vercel"],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit for bringing ideas to life, from mobile apps to system-level programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-full text-sm border border-white/10 hover:border-white/30 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-soft-green mr-3" />
                <h3 className="text-2xl font-bold">Special Interests</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm particularly passionate about <span className="text-electric-blue">synthesizer programming</span>, 
                building <span className="text-soft-green">AI companions</span>, developing 
                <span className="text-twilight-purple"> blockchain solutions from scratch</span>, creating 
                <span className="text-pink-400">mobile pay-as-you-go systems</span>, and exploring the depths of 
                <span className="text-yellow-400">embedded systems</span> and kernel development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
