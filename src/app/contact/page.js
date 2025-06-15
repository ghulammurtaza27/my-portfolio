"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import Footer from '../../components/Footer';

export default function Contact() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [state, handleSubmit] = useForm("xzzbggvw");

  useEffect(() => {
    setMounted(true);
    typeCommand();
  }, []);

  const typeCommand = async () => {
    const command = './send-message.sh';
    for (let i = 0; i <= command.length; i++) {
      setCurrentCommand(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowContent(true);
  };

  if (!mounted) return null;

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black text-green-500 pt-24 px-8 pb-8 font-mono flex items-center justify-center">
        <div className="border border-green-500 rounded-lg shadow-lg shadow-green-500/20 p-8 max-w-md w-full">
          <div className="text-center">
            <div className="text-green-400 mb-4">[SUCCESS]</div>
            <p className="text-green-300">Message sent successfully! I will respond shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 pt-24 px-8 pb-8 font-mono">
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="border border-green-500 rounded-lg shadow-lg shadow-green-500/20">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500 bg-black">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm">message.sh</span>
          </div>
          
          <div className="p-6 bg-black">
            <div className="mb-6">
              <span className="text-purple-500">user@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-500">~/contact</span>
              <span className="text-white">$ </span>
              <span className="text-green-500">{currentCommand}</span>
              <span className={`inline-block w-2 h-4 bg-green-500 ml-1 ${showContent ? 'animate-pulse' : ''}`} />
            </div>

            {showContent && (
              <div className="animate-fadeIn">
                <div className="mb-8 text-center">
                  <h1 className="text-4xl font-bold mb-2 text-green-400">Contact Me</h1>
                  <p className="text-purple-400">Let&apos;s collaborate on something amazing</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border border-green-500/30 rounded-lg p-6">
                    {/* Name Input */}
                    <div className="mb-6">
                      <label className="block text-green-400 mb-2">
                        [NAME]
                      </label>
                      <div className="flex">
                        <span className="text-purple-400">$</span>
                        <input
                          type="text"
                          name="name"
                          required
                          className="flex-1 bg-transparent border-none outline-none text-green-300 pl-2"
                          placeholder="Enter your name"
                        />
                      </div>
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                      <label className="block text-green-400 mb-2">
                        [EMAIL]
                      </label>
                      <div className="flex">
                        <span className="text-purple-400">$</span>
                        <input
                          type="email"
                          name="email"
                          required
                          className="flex-1 bg-transparent border-none outline-none text-green-300 pl-2"
                          placeholder="Enter your email"
                        />
                      </div>
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-green-400 mb-2">
                        [MESSAGE]
                      </label>
                      <div className="flex">
                        <span className="text-purple-400">$</span>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="flex-1 bg-transparent border-none outline-none text-green-300 pl-2 resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-6 py-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Execute send_message.sh</span>
                      </>
                    )}
                  </button>
                </form>
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

        /* Style the form inputs to have a terminal-like cursor */
        input, textarea {
          caret-color: #22c55e;
        }

        /* Remove default focus styles */
        input:focus, textarea:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}