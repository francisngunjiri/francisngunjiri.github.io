import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, Code, Award, Lock, Eye } from 'lucide-react';

const LabChallenges = () => {
  const challenges = [
    {
      title: "Cisco Ethical Hacker",
      category: "Cybersecurity Course",
      institution: "United States International University",
      type: "Instructor-led",
      description: "Learn the art of offensive security to uncover cyber threats",
      problem: "Understanding vulnerability assessment, penetration testing methodologies, and ethical hacking techniques to identify security weaknesses in systems and networks.",
      approach: "Hands-on practical training covering network scanning, vulnerability analysis, exploitation techniques, and security assessment frameworks following industry-standard methodologies.",
      tools: ["Nmap", "Metasploit", "Wireshark", "Burp Suite", "Kali Linux", "Nikto"],
      lessons: [
        "Mastered reconnaissance and enumeration techniques",
        "Developed skills in vulnerability assessment and exploitation",
        "Understanding of ethical hacking frameworks and methodologies",
        "Gained insights into defensive security measures"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      gradient: "from-red-500 to-orange-500",
      icon: Shield,
      status: "Completed"
    },
    {
      title: "CTF Binary Exploitation",
      category: "Personal Challenge",
      type: "Self-directed",
      description: "Advanced buffer overflow and memory corruption challenges",
      problem: "Exploiting binary vulnerabilities including stack-based buffer overflows, format string bugs, and return-oriented programming (ROP) chains in CTF competitions.",
      approach: "Reverse engineering binaries, analyzing assembly code, crafting shellcode, and developing exploit chains using stack canaries bypass and ASLR defeating techniques.",
      tools: ["GDB", "Pwntools", "Ghidra", "ROPgadget", "Python", "Assembly"],
      lessons: [
        "Deep understanding of memory layout and stack mechanics",
        "Advanced exploitation techniques and mitigation bypasses",
        "Assembly language proficiency and debugging skills",
        "Creative problem-solving under time constraints"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      gradient: "from-purple-500 to-blue-500",
      icon: Code,
      status: "Ongoing"
    },
    {
      title: "Web Application Security",
      category: "Bug Bounty Training",
      type: "Practical Research",
      description: "Advanced web application penetration testing and vulnerability research",
      problem: "Identifying and exploiting modern web application vulnerabilities including SQL injection, XSS, CSRF, and business logic flaws in real-world applications.",
      approach: "Systematic testing methodology combining automated scanning with manual testing, focusing on authentication bypasses, privilege escalation, and data extraction techniques.",
      tools: ["OWASP ZAP", "SQLmap", "Postman", "Burp Suite Pro", "Nuclei", "Custom Scripts"],
      lessons: [
        "Modern web security landscape and emerging threats",
        "Advanced SQL injection and blind exploitation techniques",
        "Client-side security and DOM-based vulnerabilities",
        "Responsible disclosure and bug bounty processes"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      gradient: "from-green-500 to-teal-500",
      icon: Eye,
      status: "Active"
    }
  ];

  return (
    <section id="lab-challenges" className="section-padding bg-gradient-to-br from-card-bg to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Lab <span className="text-gradient">Challenges</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hands-on security research, CTF challenges, and ethical hacking training that sharpens my offensive security skills
          </p>
        </div>
        
        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <Card 
              key={challenge.title}
              className="card-gradient overflow-hidden hover:scale-[1.02] transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img 
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      challenge.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      challenge.status === 'Active' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {challenge.status}
                    </span>
                  </div>
                </div>
                
                <CardContent className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <challenge.icon className="w-5 h-5 text-electric-blue mr-2" />
                        <span className="text-sm text-gray-400">{challenge.category}</span>
                        {challenge.institution && (
                          <>
                            <span className="text-gray-600 mx-2">•</span>
                            <span className="text-sm text-gray-400">{challenge.type}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-soft-green transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{challenge.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-electric-blue mb-2 flex items-center">
                        <Terminal className="w-4 h-4 mr-2" />
                        Problem Statement
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {challenge.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-soft-green mb-2 flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Approach
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {challenge.approach}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-twilight-purple mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {challenge.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Lessons Learned
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {challenge.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3"
          >
            View More Challenges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LabChallenges;