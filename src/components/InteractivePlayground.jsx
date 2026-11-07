import React, { useState } from 'react';
import { 
  Sliders, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  Eye, 
  RefreshCw 
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function InteractivePlayground() {
  const [blur, setBlur] = useState(16);
  const [opacity, setOpacity] = useState(35);
  const [borderOpacity, setBorderOpacity] = useState(15);
  const [borderRadius, setBorderRadius] = useState(20);
  const [glowColor, setGlowColor] = useState('cyan');
  const [cardTitle, setCardTitle] = useState('Cyber Card 3.0');
  const [copied, setCopied] = useState(false);

  const glowStyles = {
    cyan: {
      shadow: '0 20px 40px -15px rgba(6, 182, 212, 0.35)',
      border: 'rgba(6, 182, 212, 0.4)',
      accent: 'text-cyan-400',
      pill: 'bg-cyan-500',
    },
    violet: {
      shadow: '0 20px 40px -15px rgba(168, 85, 247, 0.35)',
      border: 'rgba(168, 85, 247, 0.4)',
      accent: 'text-purple-400',
      pill: 'bg-purple-500',
    },
    emerald: {
      shadow: '0 20px 40px -15px rgba(16, 185, 129, 0.35)',
      border: 'rgba(16, 185, 129, 0.4)',
      accent: 'text-emerald-400',
      pill: 'bg-emerald-500',
    },
    rose: {
      shadow: '0 20px 40px -15px rgba(244, 63, 94, 0.35)',
      border: 'rgba(244, 63, 94, 0.4)',
      accent: 'text-rose-400',
      pill: 'bg-rose-500',
    },
  };

  const currentGlow = glowStyles[glowColor];

  const generatedCss = `/* Glassmorphism Token */
background: rgba(15, 23, 42, ${opacity / 100});
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border-radius: ${borderRadius}px;
border: 1px solid rgba(255, 255, 255, ${borderOpacity / 100});
box-shadow: ${currentGlow.shadow};`;

  const handleCopy = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDefaults = () => {
    sound.playClick();
    setBlur(16);
    setOpacity(35);
    setBorderOpacity(15);
    setBorderRadius(20);
    setGlowColor('cyan');
  };

  return (
    <section id="playground" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Glassmorphism & Shader Studio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test and tweak custom reactive UI parameters in real-time. Tweak blurs, opacities, and light refraction, then copy the production-ready CSS snippet.
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-slate-100 flex items-center gap-2 text-sm">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Surface & Lighting Controls</span>
              </h3>
              <button
                onClick={resetDefaults}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Slider 1: Blur */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Backdrop Blur</span>
                <span className="text-cyan-400 font-bold">{blur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Slider 2: Background Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Surface Opacity</span>
                <span className="text-cyan-400 font-bold">{opacity}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Slider 3: Border Highlight */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Border Highlight Reflection</span>
                <span className="text-cyan-400 font-bold">{borderOpacity}%</span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                value={borderOpacity}
                onChange={(e) => setBorderOpacity(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Slider 4: Border Radius */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Curvature Radius</span>
                <span className="text-cyan-400 font-bold">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="6"
                max="36"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Color Accent Picker */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono text-slate-300">Glow Aura Tint</label>
              <div className="flex items-center gap-3">
                {Object.keys(glowStyles).map((col) => (
                  <button
                    key={col}
                    onClick={() => {
                      sound.playClick();
                      setGlowColor(col);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                      glowColor === col
                        ? 'bg-slate-800 text-white font-bold border border-cyan-400'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${glowStyles[col].pill}`} />
                    <span>{col}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live Preview Area */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Visual Canvas */}
            <div className="relative p-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center min-h-[320px]">
              {/* Background colorful spheres to demonstrate blur effect */}
              <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 blur-xl opacity-70 animate-float" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-600 to-rose-500 blur-xl opacity-60 animate-pulse-slow" />
              
              {/* Dynamic Glass Element */}
              <div
                style={{
                  background: `rgba(15, 23, 42, ${opacity / 100})`,
                  backdropFilter: `blur(${blur}px)`,
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  borderRadius: `${borderRadius}px`,
                  border: `1px solid rgba(255, 255, 255, ${borderOpacity / 100})`,
                  boxShadow: currentGlow.shadow,
                }}
                className="relative z-10 w-full max-w-sm p-6 text-slate-100 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className={`w-4 h-4 ${currentGlow.accent}`} />
                    <span className="font-mono text-xs font-bold text-slate-300">
                      LIVE SPECIMEN
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                    60 FPS
                  </span>
                </div>

                <h4 className="text-xl font-bold tracking-tight mb-2">
                  {cardTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  This card updates its CSS filters, specular reflection, and glow radiance in real-time.
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                  <span className="text-slate-400">Render Status</span>
                  <span className={`font-bold ${currentGlow.accent}`}>Optimized</span>
                </div>
              </div>
            </div>

            {/* Code Output Window */}
            <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Ready-to-Paste CSS</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
                </button>
              </div>
              <pre className="font-mono text-xs text-cyan-300 bg-slate-950 p-3 rounded-lg overflow-x-auto leading-relaxed border border-slate-900">
                {generatedCss}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
