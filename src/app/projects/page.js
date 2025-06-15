"use client";

import React, { useState, useEffect } from 'react';
import { Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';

const Projects = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  const projects = [
    {
      title: "BUY CANADIAN",
      description: "Launched a platform for letting users scan or search grocery products driving 5,000 hits in week one post President Trump's Canadian Tariffs.",
      tags: ["Next.js", "PostgreSQL", "PRISMA", "Google Gemini API"],
      githubUrl: "",
    },
    {
      title: "CV BUILDER",
      description: "Created AI-driven CV generator, slashing average creation time by 50% and boosting user satisfaction scores.",
      tags: ["React", "Node.js", "Google Gemini API", "Tailwind CSS"],
      githubUrl: "",
    }
  ];

  useEffect(() => {
    setMounted(true);
    typeCommand();
  }, []);

  const typeCommand = async () => {
    const command = 'ls -la projects/';
    for (let i = 0; i <= command.length; i++) {
      setCurrentCommand(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowProjects(true);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-green-500 pt-24 px-8 pb-8 font-mono"> {/* Added pt-24 for top padding */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="border border-green-500 rounded-t-lg shadow-lg shadow-green-500/20"> {/* Added shadow effect */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500 bg-black">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm">projects.sh</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 bg-black">
            <div className="mb-4">
              <span className="text-purple-500">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-500">~/projects</span>
              <span className="text-white">$ </span>
              <span className="text-green-500">{currentCommand}</span>
              <span className={`inline-block w-2 h-4 bg-green-500 ml-1 ${showProjects ? 'animate-pulse' : ''}`} />
            </div>

            {showProjects && (
              <div className="space-y-6 animate-fadeIn">
                {projects.map((project, index) => (
                  <div 
                    key={project.title}
                    className={`border border-green-500 p-4 rounded hover:bg-green-500/10 transition-all cursor-pointer ${
                      selectedProject === index ? 'bg-green-500/10' : ''
                    }`}
                    onClick={() => setSelectedProject(index === selectedProject ? null : index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-green-400">
                          {project.title}
                          <span className="text-green-600 text-sm ml-2">v1.0.0</span>
                        </h3>
                      </div>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                    </div>

                    {selectedProject === index && (
                      <div className="mt-4 animate-slideDown">
                        <p className="text-green-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs border border-green-500 rounded-full text-green-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; height: 0; }
          to { opacity: 1; height: auto; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;