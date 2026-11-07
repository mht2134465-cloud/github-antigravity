import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Globe, 
  MapPin, 
  ExternalLink,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose, data }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playSuccess();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
    window.print();
  };

  const handleCopySummary = () => {
    sound.playClick();
    const text = `${data.personal.name} - ${data.personal.title}\n${data.personal.shortBio}\nEmail: ${data.personal.email}\nExperience: 8+ Years`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-slate-200">
        
        {/* Top Control Header */}
        <div className="p-4 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white">Curriculum Vitae</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              Verified 2025/2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Paper Content */}
        <div id="printable-cv" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-slate-300 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {data.personal.name}
              </h1>
              <p className="text-base font-semibold text-cyan-400 mt-1">
                {data.personal.title}
              </p>
              <p className="text-xs text-slate-400 max-w-xl mt-2 leading-relaxed">
                {data.personal.shortBio}
              </p>
            </div>

            <div className="space-y-1 font-mono text-xs text-slate-400 text-left sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{data.personal.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.personal.location}</span>
              </div>
              <div className="text-cyan-400">
                github.com/alexrivera
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {data.techStackTicker.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-5">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <div className="font-bold text-white text-sm">
                      {exp.role} <span className="text-cyan-400 font-semibold">• {exp.company}</span>
                    </div>
                    <div className="font-mono text-xs text-indigo-300 font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Credentials</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.educationAndCerts.map((item, idx) => (
                <div key={idx} className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-xs">{item.degree || item.title}</div>
                  <div className="text-[11px] text-slate-400">{item.institution || item.issuer}</div>
                  <div className="font-mono text-[10px] text-cyan-400 mt-1">{item.period || item.year}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
