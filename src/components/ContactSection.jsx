import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function ContactSection({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playSuccess();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a critical distributed systems challenge, an AI agent project, or looking for a Staff Engineer / Technical Advisor? Let's build something unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I prioritize deep technical inquiries, advisory engagements, and impactful product roles. Feel free to copy my direct email or book a call.
              </p>

              {/* Email Pill with Copy */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono truncate">{personal.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Typical response time: <span className="text-cyan-400 font-bold">&lt; 4 hours</span></span>
              </div>

              {/* Calendly CTA Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase font-mono">
                  <Calendar className="w-4 h-4" />
                  <span>Fast-Track Intro</span>
                </div>
                <p className="text-xs text-slate-300">
                  Prefer a direct 15-minute video call to talk through your system architecture or team needs?
                </p>
                <a
                  href={personal.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md"
                >
                  <span>Schedule 15-Min Discovery</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-3 uppercase">Connect on Social</div>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="Twitter / X"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <div className="px-3 py-2 rounded-xl bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800">
                    {personal.discord}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below and I will get back to you promptly.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div className="text-xs sm:text-sm">
                    <strong>Message received!</strong> Thank you for reaching out. I will respond to your inquiry shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Project Subject / Scope *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Distributed System Architecture / AI Agent Build"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Project Details & Timeline *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your goals, current architecture hurdles, timeline, and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
