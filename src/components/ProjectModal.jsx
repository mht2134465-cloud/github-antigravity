import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click handler */}
      <div className="fixed inset-0" onClick={() => { sound.playClick(); onClose(); }} />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-slate-800 relative`}>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.year} • {project.role}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-200 font-medium">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm sm:text-base">
          
          {/* Metrics Spotlight */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 to-slate-900/80 border border-indigo-500/30 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Key Impact Metric</div>
              <div className="text-sm font-semibold text-white">{project.metrics}</div>
            </div>
          </div>

          {/* Stats Grid */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3">
              {project.stats.map((s, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-white">{s.value}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Dive: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-5 rounded-xl border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase font-mono">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-slate-950/60 p-5 rounded-xl border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                <Sparkles className="w-4 h-4" />
                <span>The Architectural Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold">
              Engineering Highlights & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold">
              Production Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Project ID: <span className="text-cyan-400">{project.id}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
