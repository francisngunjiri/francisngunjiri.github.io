
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MessageCircle, Rocket } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:francisngunjiri678@gmail.com?subject=Let's build something revolutionary - ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "francisngunjiri678@gmail.com",
      link: "mailto:francisngunjiri678@gmail.com",
      color: "text-electric-blue",
      description: "Best for detailed project discussions"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+254799448006",
      link: "https://wa.me/254799448006?text=Hi%20Francis!%20I'd%20love%20to%20discuss%20a%20project%20with%20you.",
      color: "text-soft-green",
      description: "Quick chats and immediate responses"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254799448006",
      link: "tel:+254799448006",
      color: "text-twilight-purple",
      description: "For urgent matters and voice calls"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "francis-ndirangu-173b90258",
      link: "https://www.linkedin.com/in/francis-ndirangu-173b90258",
      color: "text-blue-400",
      description: "Professional networking and career opportunities"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Build Something <span className="text-gradient">Revolutionary</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-4">
              💬 Ready to turn your wildest tech dreams into reality?
            </p>
            <p className="text-lg text-gray-400">
              Whether it's an AI companion, a synthesizer that thinks, or a blockchain that feels — 
              let's create something the world has never seen before.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Rocket className="w-6 h-6 text-soft-green mr-3" />
              <h3 className="text-2xl font-bold">Get In Touch</h3>
            </div>
            
            <div className="grid gap-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.label} className="card-gradient hover:scale-105 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <a 
                        href={info.link}
                        className="flex items-center group"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color.includes('blue') ? 'from-electric-blue to-blue-600' : info.color.includes('green') ? 'from-soft-green to-green-600' : info.color.includes('purple') ? 'from-twilight-purple to-purple-600' : 'from-blue-400 to-blue-600'} flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-400">{info.label}</p>
                              <p className="font-medium group-hover:text-soft-green transition-colors">
                                {info.value}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="w-3 h-3 bg-soft-green rounded-full animate-pulse mr-3"></div>
                  Current Status
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <span className="text-soft-green mr-2">✓</span>
                    Available for new opportunities
                  </p>
                  <p className="flex items-center">
                    <span className="text-electric-blue mr-2">⚡</span>
                    Specializing in AI companions & embedded systems
                  </p>
                  <p className="flex items-center">
                    <span className="text-twilight-purple mr-2">🚀</span>
                    Open to revolutionary projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-gradient">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-electric-blue mr-3" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Revolutionary Idea
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project, idea, or challenge. What revolutionary thing shall we build together?"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full button-gradient text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Launch This Conversation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
