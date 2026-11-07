import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Download, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  ShieldCheck,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function Hero({ 
  personal, 
  stats, 
  techStackTicker, 
  onOpenTerminal, 
  onOpenResume 
}) {
  const roles = [
    "Staff Full-Stack Architect",
    "Autonomous AI Agent Engineer",
    "Distributed Cloud Systems Specialist",
    "React 19 & High-Performance UI Craftsman"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCopyCode = () => {
    sound.playClick();
    const snippet = `const architect = {\n  name: "${personal.name}",\n  role: "${personal.title}",\n  specialties: ["React 19", "Autonomous Agents", "Go", "Distributed Systems"],\n  status: "Available for high-impact roles"\n};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-lg shadow-emerald-950/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Staff Engineering & AI Advisory</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className="text-gradient-primary">{personal.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-cyan-400">
                  {displayText}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              {personal.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenTerminal();
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-lg shadow-cyan-950/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive CLI</span>
              </button>

              <button
                onClick={() => {
                  sound.playSuccess();
                  triggerConfetti();
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 hover:text-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>CV / Resume</span>
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-3 rounded-xl border border-slate-800/90 text-center hover:border-indigo-500/30 transition-all"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-cyan-400 font-mono tracking-tight mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Holographic Terminal / Architecture Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-slate-950/95 border border-slate-800/80 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">architect.config.ts</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                    title="Copy code snippet"
                  >
                    {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Live Code Content */}
                <div className="py-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto space-y-1">
                  <div>
                    <span className="text-purple-400">export const</span>{' '}
                    <span className="text-yellow-300">architectProfile</span>{' '}
                    <span className="text-purple-400">=</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">engineer</span>:{' '}
                    <span className="text-emerald-300">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">role</span>:{' '}
                    <span className="text-emerald-300">"{personal.title}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">uptimeReliability</span>:{' '}
                    <span className="text-amber-300">99.99</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">coreParadigms</span>: [
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-emerald-300">"Streaming SSR & Islands"</span>,<br />
                    <span className="text-emerald-300">"Autonomous Agent DAGs"</span>,<br />
                    <span className="text-emerald-300">"Distributed Microservices (Go)"</span>,<br />
                    <span className="text-emerald-300">"Zero-Knowledge WebCrypto"</span>
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-cyan-400">telemetryState</span>: {'{'}
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-indigo-400">concurrency</span>:{' '}
                    <span className="text-amber-300">120_000</span>,
                    <br />
                    <span className="text-indigo-400">status</span>:{' '}
                    <span className="text-emerald-400">"OPTIMAL_HEALTH"</span>
                  </div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'};'}</div>
                </div>

                {/* Live System Health Meter */}
                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-400 font-mono">P99 LATENCY</div>
                      <div className="text-xs font-mono font-bold text-slate-200">28ms (Global CDN)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-400 font-mono">AUDIT STATUS</div>
                      <div className="text-xs font-mono font-bold text-slate-200">Zero Criticals</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Tech Stack Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-slate-800/60">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Battle-Tested Technologies & Tooling
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {techStackTicker.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-indigo-500/50 hover:text-cyan-300 hover:bg-slate-850 transition-all cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
