"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('all');
  const [mounted, setMounted] = useState(false);

  const experiences = [
    {
      company: "BARFI",
      position: "Co-Founder and CTO",
      period: "May 2023 to Sept. 2024",
      location: "Toronto, ON",
      highlights: [
        "Co-founded Barfi, building an e-commerce solution for the South Asian market in North America",
        "Developed platform using React, Next.js, and Node.js with SSR and client-side caching",
        "Automated AWS infrastructure using Terraform and Spinnaker CI/CD pipelines",
        "Achieved $150K ARR and 4.9/5 customer satisfaction score",
        "Optimized supply chain using predictive algorithms and third-party API integrations"
      ],
      stack: "AWS (EC2, S3, RDS) / Spinnaker / Terraform / Docker / Node.js / Express / Next.js / React / PostgreSQL"
    },
    {
      company: "MANUFACTOR INC.",
      position: "Co-Founder and CTO",
      period: "Oct. 2021 to May 2023",
      location: "Montreal, QC",
      highlights: [
        "Developed cloud-native B2B platform connecting North American apparel brands with Asian manufacturers",
        "Built microservices with Docker and Kubernetes supporting 20+ clients and $500,000+ in transactions",
        "Improved performance by 30% using Redis caching and CloudFront CDN",
        "Secured 10+ partnerships driving 150% monthly revenue growth"
      ],
      stack: "AWS / Docker / Kubernetes / Redis / PostgreSQL / React / Node.js / Express / WebSockets"
    },
    {
      company: "MOROCCANOIL CANADA INC.",
      position: "Full Stack Web Developer",
      period: "July 2021 to Oct. 2022",
      location: "Montreal, QC",
      highlights: [
        "Led end-to-end feature development and technical architecture",
        "Designed scalable MySQL databases with automated backup protocols",
        "Implemented event-driven architecture using Kafka",
        "Built robust integrations using PHP and Laravel APIs"
      ],
      stack: "PHP / Laravel / MySQL / Kafka / Redis / AWS / Terraform"
    }
  ];

  const skills = {
    languages: "JavaScript, HTML5, CSS3, Sass, Ruby, SQL, MATLAB, VBA, PHP",
    frameworks: "Node.js, Express, React, Next.js, Laravel, Tailwind, Rails, jQuery",
    cloud: "AWS, Docker, Kubernetes, Terraform, Spinnaker, Git, GitHub Actions",
    databases: "PostgreSQL, MongoDB, MySQL, Redis"
  };

  useEffect(() => {
    setMounted(true);
    typeCommand();
  }, []);

  const typeCommand = async () => {
    const command = 'cat resume.md';
    for (let i = 0; i <= command.length; i++) {
      setCurrentCommand(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowContent(true);
  };

  const renderSection = (section) => {
    if (activeSection !== 'all' && activeSection !== section) return null;
    
    switch(section) {
      case 'profile':
        return (
          <div className="mb-6 md:mb-8 animate-fadeIn">
            <div className="text-green-400 mb-2 text-sm md:text-base">[PROFILE]</div>
            <p className="text-green-300 pl-2 md:pl-4 text-sm md:text-base">
              Proactive full-stack developer with expertise in delivering high-quality business outcomes and solutions. 
              Proficient in modern project management frameworks, microservices, event-driven systems, and cloud services.
            </p>
          </div>
        );
      case 'skills':
        return (
          <div className="mb-6 md:mb-8 animate-fadeIn">
            <div className="text-green-400 mb-2 text-sm md:text-base">[TECHNICAL_SKILLS]</div>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="pl-2 md:pl-4 mb-2 text-sm md:text-base">
                <span className="text-purple-400">$ {category}:</span>
                <span className="text-green-300 ml-2 break-words">{skillList}</span>
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="mb-6 md:mb-8 animate-fadeIn">
            <div className="text-green-400 mb-2 text-sm md:text-base">[WORK_EXPERIENCE]</div>
            {experiences.map((exp, index) => (
              <div key={index} className="pl-2 md:pl-4 mb-6 border-l border-green-500/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="mb-1 md:mb-0">
                    <span className="text-purple-400 text-sm md:text-base">{exp.company}</span>
                    <span className="text-blue-400 ml-2 text-sm md:text-base">{exp.position}</span>
                  </div>
                  <span className="text-gray-500 text-xs md:text-sm">{exp.period}</span>
                </div>
                <div className="text-gray-500 mb-2 text-xs md:text-sm">{exp.location}</div>
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="text-green-300 pl-2 md:pl-4 mb-1 text-sm md:text-base">
                    <span className="text-gray-500">$</span> {highlight}
                  </div>
                ))}
                <div className="text-gray-400 mt-2 pl-2 md:pl-4 text-xs md:text-sm break-words">
                  <span className="text-purple-400">stack:</span> {exp.stack}
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-green-500 pt-16 md:pt-24 px-4 md:px-8 pb-8 font-mono">
      <Link 
        href="/"
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 p-2 md:p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="border border-green-500 rounded-lg shadow-lg shadow-green-500/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 border-b border-green-500 bg-black">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 text-xs md:text-sm">resume.md</span>
          </div>
          
          <div className="p-4 md:p-6 bg-black">
            <div className="mb-6 flex flex-wrap items-center gap-1 text-xs md:text-sm">
              <span className="text-purple-500">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-500">~/about</span>
              <span className="text-white">$ </span>
              <span className="text-green-500">{currentCommand}</span>
              <span className={`inline-block w-2 h-4 bg-green-500 ml-1 ${showContent ? 'animate-pulse' : ''}`} />
            </div>

            {showContent && (
              <div>
                {/* Header */}
                <div className="mb-6 text-center">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2 text-green-400">Ghulam Murtaza</h1>
                  <h2 className="text-lg md:text-xl text-purple-400">Full Stack Developer</h2>
                </div>

                {/* Navigation Buttons */}
                <div className="mb-6 flex flex-wrap justify-center gap-2 md:gap-4">
                  <button 
                    onClick={() => setActiveSection('all')}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base ${
                      activeSection === 'all' ? 'bg-green-500/20 text-green-400' : 'hover:bg-green-500/10'
                    }`}
                  >
                    all
                  </button>
                  <button 
                    onClick={() => setActiveSection('profile')}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base ${
                      activeSection === 'profile' ? 'bg-green-500/20 text-green-400' : 'hover:bg-green-500/10'
                    }`}
                  >
                    profile
                  </button>
                  <button 
                    onClick={() => setActiveSection('skills')}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base ${
                      activeSection === 'skills' ? 'bg-green-500/20 text-green-400' : 'hover:bg-green-500/10'
                    }`}
                  >
                    skills
                  </button>
                  <button 
                    onClick={() => setActiveSection('experience')}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base ${
                      activeSection === 'experience' ? 'bg-green-500/20 text-green-400' : 'hover:bg-green-500/10'
                    }`}
                  >
                    experience
                  </button>
                </div>

                {/* Content Sections */}
                {renderSection('profile')}
                {renderSection('skills')}
                {renderSection('experience')}

                {/* Contact Section */}
                <div className="mt-6 md:mt-8 text-center">
                  <div className="text-green-400 mb-4 text-sm md:text-base">[CONTACT]</div>
                  <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
                    <a
                      href="mailto:murtazash123@gmail.com"
                      className="px-4 md:px-6 py-2 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all duration-300 text-sm md:text-base"
                    >
                      <ExternalLink className="inline-block w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Email
                    </a>
                    <a
                      href="https://github.com/ghulammurtaza27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 md:px-6 py-2 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all duration-300 text-sm md:text-base"
                    >
                      <Github className="inline-block w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}