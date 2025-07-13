import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Star, GitFork, Users, Calendar, ExternalLink } from 'lucide-react';

const GitHub = () => {
  const repositories = [
    {
      name: "francisngunjiri.github.io",
      description: "Personal portfolio website template showcasing modern web development practices",
      language: "TypeScript",
      languageColor: "#3178c6",
      isTemplate: true,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/francisngunjiri.github.io",
      topics: ["portfolio", "website", "template", "personal"],
      updated: "Updated 9 minutes ago"
    },
    {
      name: "ai-invoice-analyzer",
      description: "AI-powered invoice analysis and data extraction system using Python",
      language: "Python",
      languageColor: "#3776ab",
      isTemplate: false,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/ai-invoice-analyzer",
      topics: ["ai", "machine-learning", "invoice", "python"],
      updated: "Updated 3 weeks ago"
    },
    {
      name: "chat-with-pdf",
      description: "Interactive PDF chat application using AI for document analysis",
      language: "Python",
      languageColor: "#3776ab",
      isTemplate: false,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/chat-with-pdf",
      topics: ["ai", "pdf", "chat", "nlp"],
      updated: "Updated 3 weeks ago"
    },
    {
      name: "NewsArticlePreviewScreen",
      description: "Android application for news article preview and reading",
      language: "Kotlin",
      languageColor: "#7F52FF",
      isTemplate: false,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/NewsArticlePreviewScreen",
      topics: ["android", "kotlin", "mobile"],
      updated: "Updated 2 weeks ago"
    },
    {
      name: "TicTacToewin32",
      description: "Classic tic-tac-toe game implemented in C language",
      language: "C",
      languageColor: "#555555",
      isTemplate: false,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/TicTacToewin32",
      topics: ["game", "c-language", "console"],
      updated: "Updated on Feb 22"
    },
    {
      name: "adminhack",
      description: "Administrative penetration testing tools and scripts",
      language: "Shell",
      languageColor: "#89e051",
      isTemplate: false,
      visibility: "Public",
      url: "https://github.com/francisngunjiri/adminhack",
      topics: ["security", "penetration-testing", "shell"],
      updated: "Updated on Oct 12, 2024"
    }
  ];

  const stats = {
    followers: 1,
    following: 2,
    repositories: 51,
    contributions: "Active"
  };

  return (
    <section id="github" className="section-padding bg-gradient-to-br from-dark-bg to-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            GitHub <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-soft-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my open source contributions and development journey
          </p>
        </div>
        
        {/* GitHub Profile Overview */}
        <div className="mb-12">
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-soft-green rounded-full flex items-center justify-center">
                    <Github className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">francisngunjiri</h3>
                  <p className="text-gray-400 mb-4">he/him</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">{stats.repositories}</div>
                      <div className="text-sm text-gray-400">Repositories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-soft-green">{stats.followers}</div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-twilight-purple">{stats.following}</div>
                      <div className="text-sm text-gray-400">Following</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{stats.contributions}</div>
                      <div className="text-sm text-gray-400">Contributor</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                    onClick={() => window.open('https://github.com/francisngunjiri', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Repositories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <GitFork className="w-6 h-6 mr-3 text-electric-blue" />
            Featured Repositories
          </h3>
          
          <div className="grid gap-6">
            {repositories.map((repo, index) => (
              <Card 
                key={repo.name}
                className="card-gradient hover:scale-[1.02] transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="text-xl font-bold text-soft-green group-hover:text-electric-blue transition-colors">
                          {repo.name}
                        </h4>
                        {repo.isTemplate && (
                          <span className="ml-3 px-2 py-1 bg-twilight-purple/20 text-twilight-purple rounded text-xs border border-twilight-purple/30">
                            Template
                          </span>
                        )}
                        <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs border border-green-500/30">
                          {repo.visibility}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {repo.description}
                      </p>
                      
                      {repo.topics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: repo.languageColor }}
                          ></div>
                          {repo.language}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Updated recently
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white ml-4"
                      onClick={() => window.open(repo.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-gradient p-8">
            <div className="max-w-md mx-auto">
              <Github className="w-12 h-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Want to Collaborate?</h3>
              <p className="text-gray-400 mb-6">
                Check out my repositories and let's build something amazing together!
              </p>
              <Button 
                className="button-gradient text-white"
                onClick={() => window.open('https://github.com/francisngunjiri', '_blank')}
              >
                Follow on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHub;