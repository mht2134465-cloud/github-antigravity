import React, { useState } from 'react';
import { 
  Layers, 
  Server, 
  Cpu, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  Code,
  Gauge
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function SkillsSection({ skills }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', name: 'Frontend & UI', icon: Layers, count: skills.frontend.length },
    { id: 'backend', name: 'Backend & Data', icon: Server, count: skills.backend.length },
    { id: 'aiAndCloud', name: 'AI & Cloud Ops', icon: Cpu, count: skills.aiAndCloud.length },
    { id: 'toolsAndPractices', name: 'Architecture & Practices', icon: Compass, count: skills.toolsAndPractices.length },
  ];

  const currentSkills = skills[activeTab] || [];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & Technology Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Depth across the modern stack. From optimizing sub-millisecond audio and distributed microservices to crafting pixel-perfect, accessible user interfaces.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-indigo-700 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors text-base">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                          {skill.tag}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-cyan-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Badges */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-xs font-mono text-cyan-400 uppercase">Architecture</div>
            <div className="text-sm font-bold text-slate-200">Domain-Driven & Modular</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-indigo-400 uppercase">Performance</div>
            <div className="text-sm font-bold text-slate-200">Sub-100ms P99 Latency</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase">Code Quality</div>
            <div className="text-sm font-bold text-slate-200">100% Type-Safe & Tested</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-purple-400 uppercase">Security</div>
            <div className="text-sm font-bold text-slate-200">Zero-Trust & OWASP Top 10</div>
          </div>
        </div>

      </div>
    </section>
  );
}
