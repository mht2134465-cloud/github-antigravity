import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Sparkles 
} from 'lucide-react';

export default function ExperienceSection({ experience, educationAndCerts }) {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-medium text-purple-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A progression of building, scaling, and architecting mission-critical platforms at hyper-growth startups and enterprise tech leaders.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-cyan-300" />
              </div>

              {/* Date on the left for larger screens */}
              <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-xs text-indigo-400 font-semibold">
                {item.period}
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all">
                
                {/* Mobile Date */}
                <div className="md:hidden font-mono text-xs text-indigo-400 font-semibold mb-2">
                  {item.period}
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5">
                      <span className="text-cyan-400">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements Bullet List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {item.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Section */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">Education & Industry Credentials</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Formal foundation and verified cloud solutions credentials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {educationAndCerts.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl border border-slate-800 flex items-start gap-3.5 hover:border-indigo-500/30 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  {item.degree ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5 text-cyan-400" />}
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-white">
                    {item.degree || item.title}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {item.institution || item.issuer}
                  </div>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-slate-400">
                    <span>{item.period || item.year}</span>
                    {item.honors && (
                      <span className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-[10px]">
                        {item.honors}
                      </span>
                    )}
                    {item.badge && (
                      <span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-[10px]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
