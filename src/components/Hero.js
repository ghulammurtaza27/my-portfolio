import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const TerminalPrompt = () => {
  const [displayText, setDisplayText] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    '> whoami',
    'Ghulam Murtaza',
    '> cat skills.txt',
    'Full-stack Developer | React Specialist | Node.js Engineer',
    '> git status',
    'Currently crafting exceptional digital experiences...',
    '> ./start_conversation.sh'
  ];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    // Typing effect
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let typingTimer;

    const typeLine = () => {
      if (currentLineIndex < lines.length) {
        const currentLine = lines[currentLineIndex];
        
        if (currentCharIndex === 0) {
          setDisplayText(prev => [...prev, '']);
        }

        if (currentCharIndex < currentLine.length) {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
            return newText;
          });
          currentCharIndex++;
          typingTimer = setTimeout(typeLine, 50);
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          typingTimer = setTimeout(typeLine, 800);
        }
      } else {
        setIsTyping(false);
      }
    };

    typingTimer = setTimeout(typeLine, 1000);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="font-mono bg-black/80 rounded-lg p-4 md:p-6 border border-zinc-800 w-full max-w-2xl mx-auto backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-zinc-400">terminal</span>
      </div>
      <div className="text-sm md:text-base font-mono text-green-400">
        {displayText.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap mb-2">
            {line}
            {index === displayText.length - 1 && isTyping && (
              <span 
                className={`inline-block w-2 h-4 bg-green-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CliHeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ghulammurtaza27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gm27", label: "LinkedIn" },
    { icon: Mail, href: "mailto:murtazash123@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16479633530", label: "Phone" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
        <TerminalPrompt />
        
        <div className="flex justify-center gap-4 mt-8 animate-fade-in-delay-2">
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label={label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CliHeroSection;