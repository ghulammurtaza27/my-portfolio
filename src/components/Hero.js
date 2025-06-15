import { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

// Move static data outside component
const TYPING_SPEED = 50;
const LINE_DELAY = 800;
const INITIAL_DELAY = 1000;
const CURSOR_BLINK_SPEED = 530;

const TerminalPrompt = () => {
  const [displayText, setDisplayText] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  // Memoize lines array since it never changes
  const lines = useMemo(() => [
    '> auth status',
    'AUTHENTICATED AS: Ghulam Murtaza',
    '> whoami',
    'Technical Founder | AI Solutions Engineer | Full Stack Developer',
    '> fetch skills --all',
    'Core: TypeScript • React • Node.js • AI • Cloud • Product Strategy',
    '> git log -1 --oneline',
    'feat: driving revenue and innovation with AI-powered solutions 🚀',
    '> ./connect'
  ], []);

  useEffect(() => {
    let isActive = true; // For cleanup

    // Cursor blink effect - separate from typing effect
    const cursorInterval = setInterval(() => {
      if (isActive) {
        setShowCursor(prev => !prev);
      }
    }, CURSOR_BLINK_SPEED);

    // Typing effect in separate function for clarity
    const typeCharacter = (lineIndex, charIndex, currentLine) => {
      if (!isActive) return;
      
      setDisplayText(prev => {
        const newText = [...prev];
        newText[lineIndex] = currentLine.slice(0, charIndex + 1);
        return newText;
      });
    };

    const startTypingEffect = async () => {
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const currentLine = lines[lineIndex];
        
        // Add empty line
        setDisplayText(prev => [...prev, '']);
        
        // Type each character
        for (let charIndex = 0; charIndex < currentLine.length; charIndex++) {
          await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
          if (!isActive) return;
          typeCharacter(lineIndex, charIndex, currentLine);
        }
        
        // Delay between lines
        if (lineIndex < lines.length - 1) {
          await new Promise(resolve => setTimeout(resolve, LINE_DELAY));
        }
      }
      
      if (isActive) {
        setIsTyping(false);
      }
    };

    // Start typing effect with initial delay
    setTimeout(() => startTypingEffect(), INITIAL_DELAY);

    // Cleanup
    return () => {
      isActive = false;
      clearInterval(cursorInterval);
    };
  }, [lines]);

  return (
    <div className="font-mono bg-black/80 rounded-lg p-4 md:p-6 border border-zinc-800 w-full max-w-2xl mx-auto backdrop-blur-xl">
      <TerminalHeader />
      <TerminalContent 
        displayText={displayText}
        isTyping={isTyping}
        showCursor={showCursor}
      />
    </div>
  );
};

// Split into smaller components
const TerminalHeader = () => (
  <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span className="text-sm text-zinc-400">terminal</span>
  </div>
);

const TerminalContent = ({ displayText, isTyping, showCursor }) => (
  <div className="text-sm md:text-base font-mono text-green-400">
    {displayText.map((line, index) => (
      <div key={index} className="whitespace-pre-wrap mb-2">
        {line}
        {index === displayText.length - 1 && isTyping && (
          <span 
            className={`inline-block w-2 h-4 bg-green-400 ml-1 align-middle ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    ))}
  </div>
);

const CliHeroSection = () => {
  // Memoize social links
  const socialLinks = useMemo(() => [
    { icon: Github, href: "https://github.com/ghulammurtaza27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gm27", label: "LinkedIn" },
    { icon: Mail, href: "mailto:murtazash123@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16479633530", label: "Phone" }
  ], []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <BackgroundGradient />
      <ContentWrapper>
        <TerminalPrompt />
        <SocialLinks links={socialLinks} />
      </ContentWrapper>
    </section>
  );
};

// Split background and content into separate components
const BackgroundGradient = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
    <div className="absolute inset-0 backdrop-blur-3xl" />
  </div>
);

const ContentWrapper = ({ children }) => (
  <div className="relative z-10 w-full max-w-4xl mx-auto transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
    {children}
  </div>
);

const SocialLinks = ({ links }) => (
  <div className="flex justify-center gap-4 mt-8 animate-fade-in-delay-2">
    {links.map(({ icon: Icon, href, label }, index) => (
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
);

export default CliHeroSection;