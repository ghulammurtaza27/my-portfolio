import React, { useState, useEffect } from 'react';
import { Code2, ServerCrash, Cloud, Wrench, Terminal, Activity, GitBranch, Database } from 'lucide-react';

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
      category: 'Frontend Development',
      Icon: Code2,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
    },
    {
      category: 'Backend Development',
      Icon: ServerCrash,
      items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'DevOps & Cloud',
      Icon: Cloud,
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Git']
    },
    {
      category: 'Database & Tools',
      Icon: Database,
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Firebase', 'Prisma']
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Terminal },
    { id: 'experience', label: 'Experience', icon: Activity },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: GitBranch }
  ];

  const terminalContent = {
    profile: [
      '> cat profile.md',
      '# Full Stack Developer',
      'Proactive developer with expertise in delivering high-quality business outcomes',
      'and solutions within stringent timelines.',
      '',
      '## Core Values',
      '- Microservices architecture expertise',
      '- Cloud infrastructure specialist',
      '- Performance optimization focused',
      '- Agile methodology practitioner'
    ],
    experience: [
      '> git log --oneline',
      '* Co-Founded Barfi (2023-2024)',
      '  - Built e-commerce platform with $150K ARR',
      '  - Implemented microservices with AWS infrastructure',
      '  - Achieved 20% increase in user retention',
      '',
      '* Led Manufactor Inc (2021-2023)',
      '  - Developed B2B platform for apparel brands',
      '  - Processed $500,000+ in transactions',
      '  - Improved performance by 30% using Redis',
      '',
      '* Developed at Moroccanoil (2021-2022)',
      '  - Implemented event-driven architecture',
      '  - Managed scalable MySQL databases',
      '  - Led migration to microservices'
    ],
    skills: [
      '> tree skills/',
      'skills/',
      '├── frontend/',
      '│   ├── React.js',
      '│   ├── Next.js',
      '│   ├── Laravel',
      '│   └── Tailwind',
      '│',
      '├── backend/',
      '│   ├── Node.js',
      '│   ├── Express',
      '│   ├── PHP',
      '│   └── WebSockets',
      '│',
      '├── cloud/',
      '│   ├── AWS (EC2, S3, RDS)',
      '│   ├── Docker',
      '│   ├── Kubernetes',
      '│   └── Terraform',
      '│',
      '└── databases/',
      '    ├── PostgreSQL',
      '    ├── MongoDB',
      '    ├── MySQL',
      '    └── Redis'
    ],
    projects: [
      '> docker ps',
      'CONTAINER ID        IMAGE               STATUS',
      'repoqa001          ai-code-qa          Up 2024',
      'iliad002           aws-guide           Up 2024',
      'wetv003            social-tv           Up 2021',
      '',
      '> ls -l /projects',
      'total 4',
      'drwxr-xr-x  REPOQA    AI-powered GitHub repo Q&A',
      'drwxr-xr-x  ILIAD     AWS setup guidance extension',
      'drwxr-xr-x  WE.TV     Social media for TV fans',
      'drwxr-xr-x  VEND      E-commerce platform'
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