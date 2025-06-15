"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function About() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('all');
  const [mounted, setMounted] = useState(false);

  const experiences = [
    {
        company: "SNACKMAGIC",
        position: "AI Solutions Engineer",
        period: "Mar 2025 - Present",
        location: "Remote",
        highlights: [
            "Implemented AI-powered automation tools across sales and customer success, driving process efficiency and data-driven decision making.",
            "Built AI agents to transcribe and analyze Gong sales calls, generate feedback summaries, and distribute insights via Slack integrations.",
            "Designed lead scoring system leveraging historical conversion data and segmentation to prioritize high-value sales opportunities.",
            "Developed dynamic sales analytics dashboards combining HubSpot, Gong, and internal data sources.",
            "Integrated multiple AI models (Gemini, OpenAI GPT-40, LLMs) into internal workflows.",
            "Implemented event-driven data pipelines for real-time syncing of sales and call data into analytics warehouse.",
            "Built microservices leveraging Supabase, n8n, and serverless functions for rapid deployment of AI-powered features.",
            "Led internal AI discovery sprints to scope and validate new automation opportunities."
        ],
        stack: "AI, Node.js, Supabase, n8n, HubSpot, Gong, LLMs, Slack, Snowflake, BigQuery, Postgres"
    },
    {
        company: "BARFI GROCERY INC.",
        position: "Co-Founder, CTO",
        period: "Oct 2023 - Dec 2024",
        location: "Toronto, ON",
        highlights: [
            "Led technical development and product strategy for a 5,000+ SKU e-commerce platform.",
            "Designed and deployed a streamlined checkout flow that reduced cart abandonment and increased successful purchases by 25%.",
            "Collaborated closely with marketing, customer support, and operations teams to translate customer insights into product improvements.",
            "Advised on vendor negotiations and B2B partnership discussions, providing technical validation and solution scoping.",
            "Led customer experience optimization projects, ensuring seamless performance across web and mobile devices.",
            "Interfaced regularly with non-technical stakeholders to present technical roadmaps and revenue impact analysis."
        ],
        stack: "React / Next.js / TypeScript / MongoDB / AWS"
    },
    {
        company: "MANUFACTOR INC.",
        position: "Co-Founder | Head of Technical Sales & Customer Solutions",
        period: "Oct 2022 - Oct 2023",
        location: "Toronto, ON",
        highlights: [
            "Owned full sales flow from outbound prospecting, lead qualification, technical discovery, demos, to contract negotiation and deal closing.",
            "Delivered live product demos and technical presentations to C-level stakeholders.",
            "Negotiated pricing, contract terms, and onboarding timelines, directly contributing to over $500K in closed revenue.",
            "Built scalable onboarding and customer success processes, reducing time-to-value by 65%.",
            "Acted as a bridge between customers and product engineering, ensuring rapid resolution of client-specific challenges."
        ],
        stack: "Sales, Customer Success, Product Demos, Revenue Growth"
    },
    {
        company: "MOROCCANOIL CANADA INC.",
        position: "Software Engineer",
        period: "Jul 2021 - Oct 2022",
        location: "Montreal, QC",
        highlights: [
            "Led the development of auto-scaling components within Laravel applications hosted on AWS.",
            "Streamlined deployment processes using GitHub and AWS tools.",
            "Built responsive user interfaces using Laravel Blade and modern front-end technologies.",
            "Developed REST APIs that enabled seamless data exchange between applications.",
            "Established robust security measures by integrating AWS security tools with Laravel."
        ],
        stack: "PHP / Laravel / MySQL / AWS / GitHub / AWS RDS"
    }
];


  const skills = {
    languages: "JavaScript, TypeScript, Python, Java, HTML5, CSS3, PHP",
    frameworks: "React, Node.js, Express, Next.js, Django, Laravel",
    databases: "PostgreSQL, MongoDB, MySQL",
    tools: "Git, Docker, AWS, Jest, Cypress",
    methodologies: "Agile/Scrum, CI/CD, Test-Driven Development"
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
              Technical founder and full stack developer with 5+ years of experience building SaaS, e-commerce, and enterprise platforms. Proven success driving revenue growth through technical solution design, customer onboarding, sales consulting, and product demos. Experienced in translating complex technical products into clear business value for diverse stakeholders. Strong cross-functional communicator with deep hands-on engineering expertise.
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
      case 'education':
        return (
          <div className="mb-6 md:mb-8 animate-fadeIn">
            <div className="text-green-400 mb-2 text-sm md:text-base">[EDUCATION]</div>
            <div className="pl-2 md:pl-4 mb-4 text-sm md:text-base">
              <span className="text-purple-400">McGill University</span> <span className="text-green-300">| Bachelor of Engineering (Mechanical) | Sep 2014 - Dec 2019</span>
              <div className="text-gray-400 ml-4">- Hugh Brock Scholarship Award</div>
            </div>
            <div className="pl-2 md:pl-4 text-sm md:text-base">
              <span className="text-purple-400">Lighthouse Labs</span> <span className="text-green-300">| Web Development Bootcamp | Jan 2021 - Mar 2021</span>
              <div className="text-gray-400 ml-4">- Completed a 12-week intensive program.</div>
            </div>
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
                {renderSection('education')}

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
      <Footer />

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