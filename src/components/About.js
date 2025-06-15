import React, { useState, useEffect } from 'react';
import { Code2, ServerCrash, Cloud, Wrench, Terminal, Activity, GitBranch, Database, Bug, Code } from 'lucide-react';

const ResponsiveTechAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    {
        category: 'Languages',
        Icon: Code2,
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3', 'PHP']
    },
    {
        category: 'Frameworks',
        Icon: ServerCrash,
        items: ['React', 'Node.js', 'Express', 'Next.js', 'Django', 'Laravel']
    },
    {
        category: 'Databases',
        Icon: Database,
        items: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
        category: 'Tools',
        Icon: Cloud,
        items: ['Git', 'Docker', 'AWS', 'Jest', 'Cypress']
    },
    {
        category: 'Methodologies',
        Icon: Bug,
        items: ['Agile/Scrum', 'CI/CD', 'Test-Driven Development']
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Terminal },
    { id: 'experience', label: 'Experience', icon: Activity },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: GitBranch },
    { id: 'education', label: 'Education', icon: Wrench }
  ];

  const terminalContent = {
    profile: [
      '> cat profile.md',
      '# Ghulam Murtaza',
      'Technical founder and full stack developer with 5+ years of experience building SaaS, e-commerce, and enterprise platforms. Proven success driving revenue growth through technical solution design, customer onboarding, sales consulting, and product demos. Experienced in translating complex technical products into clear business value for diverse stakeholders. Strong cross-functional communicator with deep hands-on engineering expertise.'
    ],
    experience: [
      '> git log --oneline',
      '* SnackMagic | AI Solutions Engineer | Mar 2025 - Present',
      '  - Implemented AI-powered automation tools across sales and customer success, driving process efficiency and data-driven decision making.',
      '  - Built AI agents to transcribe and analyze Gong sales calls, generate feedback summaries, and distribute insights via Slack integrations.',
      '  - Designed lead scoring system leveraging historical conversion data and segmentation to prioritize high-value sales opportunities.',
      '  - Developed dynamic sales analytics dashboards combining HubSpot, Gong, and internal data sources.',
      '  - Integrated multiple AI models (Gemini, OpenAI GPT-40, LLMs) into internal workflows.',
      '  - Implemented event-driven data pipelines for real-time syncing of sales and call data into analytics warehouse.',
      '  - Built microservices leveraging Supabase, n8n, and serverless functions for rapid deployment of AI-powered features.',
      '  - Led internal AI discovery sprints to scope and validate new automation opportunities.',
      '',
      '* Barfi Grocery Inc. | Co-Founder, CTO | Oct 2023 - Dec 2024',
      '  - Led technical development and product strategy for a 5,000+ SKU e-commerce platform.',
      '  - Designed and deployed a streamlined checkout flow that reduced cart abandonment and increased successful purchases by 25%.',
      '  - Collaborated closely with marketing, customer support, and operations teams to translate customer insights into product improvements.',
      '  - Advised on vendor negotiations and B2B partnership discussions, providing technical validation and solution scoping.',
      '  - Led customer experience optimization projects, ensuring seamless performance across web and mobile devices.',
      '  - Interfaced regularly with non-technical stakeholders to present technical roadmaps and revenue impact analysis.',
      '',
      '* Manufactor Inc. | Co-Founder | Oct 2022 - Oct 2023',
      '  - Owned full sales flow from outbound prospecting, lead qualification, technical discovery, demos, to contract negotiation and deal closing.',
      '  - Delivered live product demos and technical presentations to C-level stakeholders.',
      '  - Negotiated pricing, contract terms, and onboarding timelines, directly contributing to over $500K in closed revenue.',
      '  - Built scalable onboarding and customer success processes, reducing time-to-value by 65%.',
      '  - Acted as a bridge between customers and product engineering, ensuring rapid resolution of client-specific challenges.',
      '',
      '* Moroccanoil Canada Inc. | Software Engineer | Jul 2021 - Oct 2022',
      '  - Led the development of auto-scaling components within Laravel applications hosted on AWS.',
      '  - Streamlined deployment processes using GitHub and AWS tools.',
      '  - Built responsive user interfaces using Laravel Blade and modern front-end technologies.',
      '  - Developed REST APIs that enabled seamless data exchange between applications.',
      '  - Established robust security measures by integrating AWS security tools with Laravel.'
    ],
    skills: [
      '> tree skills/',
      'skills/',
      '├── Languages: JavaScript, TypeScript, Python, Java, HTML5, CSS3, PHP',
      '├── Frameworks: React, Node.js, Express, Next.js, Django, Laravel',
      '├── Databases: PostgreSQL, MongoDB, MySQL',
      '├── Tools: Git, Docker, AWS, Jest, Cypress',
      '└── Methodologies: Agile/Scrum, CI/CD, Test-Driven Development'
    ],
    projects: [
      '> ls -l /projects',
      'drwxr-xr-x  BUY CANADIAN   Next.js, PostgreSQL, PRISMA, Google Gemini API',
      '  - Launched a platform for letting users scan or search grocery products driving 5,000 hits in week one post President Trump\'s Canadian Tariffs',
      'drwxr-xr-x  CV BUILDER     React, Node.js, Google Gemini API, Tailwind CSS',
      '  - Created AI-driven CV generator, slashing average creation time by 50% and boosting user satisfaction scores.'
    ],
    education: [
      '> cat education.md',
      'McGill University | Bachelor of Engineering (Mechanical) | Sep 2014 - Dec 2019',
      '  - Hugh Brock Scholarship Award',
      'Lighthouse Labs | Web Development Bootcamp | Jan 2021 - Mar 2021',
      '  - Completed a 12-week intensive program.'
    ]
  };

  return (
    <section id="about" className="py-12 md:py-24 relative px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            System Information
          </h2>
          
          <div className="bg-black/80 rounded-lg border border-zinc-800 backdrop-blur-xl overflow-hidden">
            {/* Terminal Header - Mobile Dropdown vs Desktop Tabs */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 p-3 md:p-4 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              </div>
              
              {isMobileMenu ? (
                <select 
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="mt-2 md:mt-0 ml-0 md:ml-4 bg-zinc-900 text-gray-300 rounded-md px-2 py-1 text-sm border border-zinc-700 focus:outline-none focus:border-purple-500"
                >
                  {tabs.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              ) : (
                <div className="flex flex-wrap gap-2 md:gap-4 ml-0 md:ml-4 mt-2 md:mt-0">
                  {tabs.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-md text-sm transition-all duration-300 ${
                        activeTab === id 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' 
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-3 h-3 md:w-4 md:h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Terminal Content */}
            <div className="p-3 md:p-6 overflow-x-auto">
              <div className="font-mono text-xs md:text-sm text-green-400 whitespace-pre-wrap">
                {terminalContent[activeTab].map((line, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-300 ${
                      line.startsWith('#') 
                        ? 'text-purple-400 font-bold text-base md:text-lg' 
                        : line.startsWith('*') 
                        ? 'text-blue-400' 
                        : line.startsWith('>') 
                        ? 'text-yellow-400' 
                        : 'text-green-400'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6 md:mt-8">
            {skills.map((skillGroup, groupIndex) => {
              const IconComponent = skillGroup.Icon;
              return (
                <div 
                  key={skillGroup.category}
                  className="bg-black/50 rounded-xl p-4 md:p-6 backdrop-blur-lg border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${groupIndex * 0.1}s`,
                    transitionDelay: `${groupIndex * 0.1}s`
                  }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />
                    <h3 className="text-lg md:text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <span 
                        key={skill}
                        className="px-2 md:px-3 py-0.5 md:py-1 bg-zinc-800/80 rounded-full text-xs md:text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveTechAbout;