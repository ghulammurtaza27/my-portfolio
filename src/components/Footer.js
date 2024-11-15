import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ghulammurtaza27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gm27", label: "LinkedIn" },
    { icon: Mail, href: "mailto:murtazash123@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+16479633530", label: "Phone" }
  ];

  return (
    <footer className="border-t border-green-500 bg-black text-green-500 font-mono mt-8">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Terminal Line */}
        <div className="flex flex-wrap items-center gap-1 mb-4 text-sm md:text-base">
          <span className="text-purple-500">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~/contacts</span>
          <span className="text-white">$ </span>
          <span className="text-green-500">echo $SOCIAL_LINKS</span>
          <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
        </div>
        
        <div className="border border-green-500 p-3 md:p-4 rounded bg-black">
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-green-500/10 p-2 rounded transition-colors group"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:text-green-400 transition-colors" />
                <span className="text-xs md:text-sm truncate group-hover:text-green-400 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Copyright Section */}
          <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-green-500/30 text-center text-xs md:text-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
              <span className="text-green-400">© {new Date().getFullYear()}</span>
              <span className="text-green-500 font-medium">Ghulam Murtaza</span>
              <span className="hidden md:inline text-green-400">|</span>
              <span className="text-green-400">All rights reserved</span>
            </div>
          </div>
        </div>

        {/* Optional: Add Command Output */}
        <div className="mt-3 text-xs md:text-sm text-green-400/60">
          <span>{">"} Connection established. Feel free to reach out!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;