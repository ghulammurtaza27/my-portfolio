"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const pathname = usePathname();

  // Get active section from the current path
  const getActiveSection = (path) => {
    if (path === '/') return 'home';
    return path.slice(1); // Remove the leading slash
  };

  const navItems = [
    { name: 'Home', href: '/', cmd: 'cd ~' },
    { name: 'About', href: '/about', cmd: 'cat about.md' },
    { name: 'Projects', href: '/projects', cmd: 'ls projects/' },
    { name: 'Contact', href: '/contact', cmd: './contact.sh' }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ghulammurtaza27", label: "GitHub", cmd: "git remote -v" },
    { icon: Linkedin, href: "https://linkedin.com/in/gm27", label: "LinkedIn", cmd: "connect -s linkedin" },
    { icon: Mail, href: "mailto:murtazash123@gmail.com", label: "Email", cmd: "mail -s" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    window.addEventListener('scroll', handleScroll);
    const timeInterval = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 font-mono transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-green-500/30' 
            : 'bg-black/50'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center h-16">
            {/* Terminal Window Controls */}
            <div className="flex items-center gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Terminal Path */}
            <div className="hidden md:flex items-center text-sm">
              <span className="text-purple-400">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/{getActiveSection(pathname)}</span>
              <span className="text-white">$</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`group relative py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-green-400'
                      : 'text-gray-400 hover:text-green-400'
                  }`}
                >
                  <span className="block text-[10px] text-gray-500 group-hover:text-gray-400">{item.cmd}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center ml-auto space-x-4 pr-4">
              {socialLinks.map(({ icon: Icon, href, label, cmd }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={label}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">{cmd}</span>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <span className="text-sm text-gray-500">{currentTime}</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-auto mr-4 p-2 text-gray-400 hover:text-green-400"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{ height: isOpen ? '100vh' : '1rem' }}
          className={`md:hidden border-t border-green-500/30 transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 text-sm border-b border-green-500/10 transition-colors ${
                  pathname === item.href
                    ? 'bg-green-500/10 text-green-400'
                    : 'text-gray-400 hover:bg-green-500/5 hover:text-green-400'
                }`}
              >
                <span className="block text-[10px] text-gray-500">{item.cmd}</span>
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-between px-4 py-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}