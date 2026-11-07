import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  FileText, 
  Sparkles,
  Palette
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ 
  onOpenTerminal, 
  onOpenResume, 
  theme, 
  setTheme,
  audioEnabled,
  setAudioEnabled 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Playground', href: '#playground' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ];

  const themeOptions = [
    { id: 'cyber', name: 'Cyber Indigo', accent: 'bg-indigo-500' },
    { id: 'violet', name: 'Midnight Violet', accent: 'bg-purple-500' },
    { id: 'matrix', name: 'Emerald Matrix', accent: 'bg-emerald-500' },
    { id: 'light', name: 'Solar Clean', accent: 'bg-amber-400' },
  ];

  const handleLinkClick = (href) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    sound.enabled = next;
    if (next) sound.playClick();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-2xl py-3 border-b border-slate-800/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              sound.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-bold text-lg">
                  AR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-tight flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                Alex Rivera
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono">Systems & AI Architect</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Terminal CLI Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              title="Open Interactive CLI Terminal"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-sm hover:shadow-cyan-500/20"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={audioEnabled ? "Mute UI sound effects" : "Enable UI sound effects"}
              className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors cursor-pointer"
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
            </button>

            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  sound.playClick();
                  setThemeDropdownOpen(!themeDropdownOpen);
                }}
                title="Change Theme Mode"
                className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5" />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Select Theme
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        sound.playClick();
                        setTheme(opt.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        theme === opt.id 
                          ? 'bg-slate-800 text-white font-semibold' 
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${opt.accent}`} />
                        {opt.name}
                      </span>
                      {theme === opt.id && <Sparkles className="w-3 h-3 text-cyan-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all cursor-pointer hover:scale-102"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="p-2 rounded-lg bg-slate-800 text-cyan-400 border border-cyan-500/30"
              title="CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            <button
              onClick={toggleSound}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
              <span>{audioEnabled ? 'Sound On' : 'Sound Off'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
