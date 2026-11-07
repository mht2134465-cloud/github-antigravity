import React from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-400">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS & REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Leaders Say About My Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Recommendations from engineering executives, founders, and design partners who have collaborated with me directly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Top: Star rating and quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-7 h-7 text-indigo-400/40 group-hover:text-cyan-400/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/30 group-hover:border-emerald-400/60 transition-colors"
                />
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <span className="text-emerald-400 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
