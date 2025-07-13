
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:francisngunjiri678@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
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
      color: "text-electric-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254799448006",
      link: "tel:+254799448006",
      color: "text-soft-green"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "francis-ndirangu-173b90258",
      link: "https://www.linkedin.com/in/francis-ndirangu-173b90258",
      color: "text-twilight-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "francisngunjiri",
      link: "https://github.com/francisngunjiri",
      color: "text-electric-blue"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's discuss your next project!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.label} className="card-gradient hover:scale-105 transition-transform">
                    <CardContent className="p-4">
                      <a 
                        href={info.link}
                        className="flex items-center group"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <IconComponent className={`w-6 h-6 ${info.color} mr-4`} />
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="font-medium group-hover:text-soft-green transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Current Status</h4>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-soft-green rounded-full animate-pulse mr-3"></div>
                  <span className="text-gray-300">Available for new opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-gradient">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full button-gradient text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
                >
                  Send Message
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
