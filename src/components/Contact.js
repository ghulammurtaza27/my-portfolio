import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Mail, Send, Phone, MapPin, Clock } from 'lucide-react';

const ResponsiveContactSection = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const formRef = useRef(null);

  // Prevent auto-scrolling to the bottom on page load
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim().toLowerCase();
    
    if (trimmedMessage === 'send_message') {
      setShowInput(true);
      setMessage('');
    } else if (showInput && message.trim()) {
      // For mobile devices, open email app with the message
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = `mailto:murtazash123@gmail.com?body=${encodeURIComponent(message)}`;
      } else {
        // For desktop, update messages state first
        setMessages([...messages, message]);
        // Then open email client
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:murtazash123@gmail.com?body=${encodeURIComponent(message)}`;
        mailtoLink.click();
      }
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const contactDetails = [
    { icon: Mail, text: 'murtazash123@gmail.com', href: 'mailto:murtazash123@gmail.com' },
    { icon: Phone, text: '+1 647-963-3530', href: 'tel:+16479633530' },
    { icon: MapPin, text: 'Toronto, ON', href: null },
    { icon: Clock, text: 'Response Time: <24 hours', href: null }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black text-green-500 py-12 md:py-24 px-4 md:px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="border border-green-500 rounded-lg shadow-lg shadow-green-500/20">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 border-b border-green-500 bg-black">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 text-xs md:text-sm">contact.sh</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 md:p-6 bg-black">
            <div className="mb-4 flex flex-wrap items-center gap-1 text-xs md:text-sm">
              <span className="text-purple-500">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-500">~/contact</span>
              <span className="text-white">$ </span>
              <span className="text-green-500">cat contact_info.txt</span>
            </div>

            <div className="border border-green-500 p-4 md:p-6 rounded mt-4">
              {/* Header Section */}
              <div className="mb-6 text-left">
                <p className="text-green-400 text-base md:text-lg mb-4">
                  {">"} Interested in working together? Let&apos;s create something amazing.
                </p>
                <div className="text-green-300 space-y-2 text-sm md:text-base">
                  <p>$ Available for:</p>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 pl-4">
                    <li className="flex items-center space-x-1">
                      <span className="text-green-500">●</span>
                      <span>Full-stack</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className="text-green-500">●</span>
                      <span>Consulting</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className="text-green-500">●</span>
                      <span>Cloud Arch</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className="text-green-500">●</span>
                      <span>Reviews</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return detail.href ? (
                    <a
                      key={index}
                      href={detail.href}
                      className="group flex items-center gap-2 border border-green-500 p-2 md:p-3 rounded hover:bg-green-500/10 transition-all cursor-pointer text-sm md:text-base"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="text-green-400 truncate">{detail.text}</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-green-400/60 text-sm md:text-base"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>{detail.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Terminal Input */}
            <div className="mt-6">
              <div className="mb-2 text-green-400/60 text-sm md:text-base">
                {showInput ? (
                  <p>{">"} Enter your message (press Enter to send):</p>
                ) : (
                  <p>{">"} Type &apos;send_message&apos; and press Enter to start:</p>
                )}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
                <span className="text-purple-500 text-sm md:text-base">guest@portfolio</span>
                <span className="text-white">$</span>
                <div className="flex-1 min-w-[200px] flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent border-none outline-none text-green-500 font-mono text-sm md:text-base"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                  <button 
                    type="submit" 
                    className="text-green-500 hover:text-green-400 transition-colors p-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Message History */}
              <div className="mt-4 space-y-2">
                {messages.map((msg, index) => (
                  <div key={index} className="text-green-400/60 text-sm md:text-base break-words">
                    <span>{">"} {msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveContactSection;