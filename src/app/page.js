"use client";

import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Phone, Code2, ServerCrash, Cloud, Wrench, Terminal } from 'lucide-react';
import Hero from "../components/Hero"
import About from "../components/About";
import Contact from "../components/Contact"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Available commands array for suggestions
  const availableCommands = ['help', 'about', 'contact', 'clear', 'social'];

  const skills = [
    { 
      category: "Frontend",
      Icon: Code2,
      items: ["React", "Next.js", "Tailwind CSS", "jQuery", "Material-UI", "HTML5", "CSS3", "Sass", "AJAX"]
    },
    {
      category: "Backend",
      Icon: ServerCrash,
      items: ["Node.js", "Express", "PHP", "Ruby", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Laravel"]
    },
    {
      category: "Cloud & DevOps",
      Icon: Cloud,
      items: ["AWS", "Docker", "Terraform", "Spinnaker", "Kubernetes"]
    },
    {
      category: "Tools & Testing",
      Icon: Wrench,
      items: ["Git", "Cypress", "Storybook", "Jest", "GitHub Actions"]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ghulammurtaza27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gm27", label: "LinkedIn" },
    { icon: Mail, href: "mailto:murtazash123@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16479633530", label: "Phone" }
  ];

  // Filter suggestions based on current input
  const filteredSuggestions = availableCommands.filter(cmd => 
    cmd.startsWith(command.toLowerCase().trim())
  );

  const executeCommand = (cmd) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    let output = '';

    switch(normalizedCmd) {
      case 'help':
        output = `Available commands:
- about: Learn more about me
- contact: Get my contact information
- clear: Clear terminal
- social: View social links`;
        break;
      case 'about':
        output = "Navigate to About section...";
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        output = "Opening contact section...";
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'clear':
        setTerminalOutput([]);
        setCommand('');
        return;
      case 'social':
        output = socialLinks.map(link => `- ${link.label}: ${link.href}`).join('\n');
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setTerminalOutput([...terminalOutput, { type: 'input', content: cmd }, { type: 'output', content: output }]);
    setCommand('');
    setShowSuggestions(false);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (command.trim()) {
      executeCommand(command);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    executeCommand(suggestion);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['hero', 'about', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative">
      {/* Terminal toggle button */}
      <button
        onClick={() => setTerminalOpen(!terminalOpen)}
        className="fixed bottom-4 right-4 p-3 bg-green-500/10 border border-green-500 rounded-full hover:bg-green-500/20 transition-all z-50"
        aria-label="Toggle Terminal"
      >
        <Terminal className="w-6 h-6" />
      </button>

      {/* Floating Terminal */}
      {terminalOpen && (
        <div className="fixed bottom-20 right-4 w-full md:w-96 border border-green-500 rounded-lg bg-black shadow-lg shadow-green-500/20 z-50 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm">portfolio-terminal</span>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <div className="mb-4 text-green-400">Welcome! Type or tap &apos;help&apos; for available commands.</div>
            {terminalOutput.map((entry, i) => (
              <div key={i} className="mb-2">
                {entry.type === 'input' ? (
                  <div>
                    <span className="text-purple-500">guest@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="text-green-500 ml-2">{entry.content}</span>
                  </div>
                ) : (
                  <div className="text-green-400 whitespace-pre-line">{entry.content}</div>
                )}
              </div>
            ))}
            <form onSubmit={handleCommand} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">guest@portfolio</span>
                <span className="text-white">$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => {
                    setCommand(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="flex-1 bg-transparent border-none outline-none text-green-500"
                  autoFocus
                />
              </div>
              
              {/* Command suggestions */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {filteredSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-2 py-1 bg-green-500/10 border border-green-500 rounded hover:bg-green-500/20 text-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      <div 
        className="fixed top-0 left-0 h-1 bg-green-500 z-50"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out'
        }}
      />

      <div className="relative z-10">
        <Hero />
        <About />
        <Contact />
      </div>

      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 animate-twinkle select-none pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.3s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}