import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Heart, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Footer({ onOpenTerminal, onOpenResume, personal }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/90 py-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Meta */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                AR
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-200">{personal.name}</div>
              <div className="font-mono text-[11px] text-slate-400">
                SF Time: <span className="text-cyan-400">{timeStr} PST</span>
              </div>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="hover:text-cyan-400 font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal CLI</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              className="hover:text-indigo-400 font-mono transition-colors cursor-pointer"
            >
              Resume
            </button>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            © {new Date().getFullYear()} {personal.name}. Crafted with React 19, Tailwind CSS, Web Audio & Vite.
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <span>High Performance UI</span>
            <span>•</span>
            <span className="text-emerald-400">Production Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
