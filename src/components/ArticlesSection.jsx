import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2, 
  Check 
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function ArticlesSection({ articles }) {
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    sound.playClick();
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="articles" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL WRITING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Articles, RFCs & Engineering Insights
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Sharing deep architectural lessons on scaling state machines, LLM agent topologies, and low-latency frontend engineering.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {art.publishedDate}
                </span>

                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveArticle(art);
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div 
            className="fixed inset-0" 
            onClick={() => { sound.playClick(); setActiveArticle(null); }} 
          />

          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-slate-950/90 border-b border-slate-800 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-semibold">
                    {activeArticle.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400">{activeArticle.publishedDate}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-cyan-400">{activeArticle.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveArticle(null);
                }}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-slate-200 italic">
                "{activeArticle.summary}"
              </div>

              <div className="prose prose-invert max-w-none space-y-4 whitespace-pre-line font-light">
                {activeArticle.fullContent}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedShare ? 'Link Copied!' : 'Share Article'}</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveArticle(null);
                }}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
