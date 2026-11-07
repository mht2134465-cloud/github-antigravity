import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function TerminalModal({ 
  isOpen, 
  onClose, 
  personal, 
  skills, 
  projects, 
  experience,
  onOpenResume,
  setTheme
}) {
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Welcome to Alex Rivera Terminal v2.4.0 (x86_64-pc-linux-gnu)' },
    { type: 'system', text: 'Type "help" to view available commands or "sudo hire" for a surprise.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      sound.playClick();
      const rawCmd = inputVal.trim();
      const lower = rawCmd.toLowerCase();

      // Add to command history
      if (rawCmd) {
        setCommandHistory((prev) => [...prev, rawCmd]);
        setHistoryPointer(-1);
      }

      const newEntries = [{ type: 'user', text: `guest@alex-rivera:~$ ${rawCmd}` }];

      switch (lower) {
        case 'help':
          newEntries.push({
            type: 'output',
            text: `Available commands:
  help           Show this list of commands
  bio            Display developer summary & background
  whoami         Output current visitor credentials
  skills         List core technical competencies
  projects       List production flagship projects
  experience     Show work history & leadership roles
  contact        Output email & social communication links
  sudo hire      Initiate hiring sequence & confetti
  download-cv    Open printable resume
  theme <name>   Change theme (cyber, violet, matrix, light)
  matrix         Activate Matrix digital rain
  clear          Clear terminal window history
  exit           Close terminal emulator`
          });
          break;

        case 'bio':
        case 'about':
          newEntries.push({
            type: 'output',
            text: `${personal.name} — ${personal.title}
Location: ${personal.location}
Status: ${personal.status}

${personal.shortBio}`
          });
          break;

        case 'whoami':
          newEntries.push({
            type: 'output',
            text: `Visitor ID: guest_${Math.floor(Math.random() * 90000 + 10000)}
Role: Valued Engineering Leader / Recruiter
Permissions: [read_portfolio, run_interactive_code, schedule_interview]`
          });
          break;

        case 'skills':
          const skillSummary = Object.entries(skills).map(([category, items]) => {
            const list = items.map(i => `  • ${i.name} [${i.level}%] (${i.tag})`).join('\n');
            return `[${category.toUpperCase()}]\n${list}`;
          }).join('\n\n');
          newEntries.push({ type: 'output', text: skillSummary });
          break;

        case 'projects':
          const projSummary = projects.map((p, i) => 
            `[${i + 1}] ${p.title} (${p.year})\n    Category: ${p.category} | Metric: ${p.metrics}\n    Stack: ${p.techStack.join(', ')}`
          ).join('\n\n');
          newEntries.push({ type: 'output', text: projSummary });
          break;

        case 'experience':
          const expSummary = experience.map(exp => 
            `• ${exp.role} @ ${exp.company} (${exp.period})\n  ${exp.achievements[0]}`
          ).join('\n\n');
          newEntries.push({ type: 'output', text: expSummary });
          break;

        case 'contact':
          newEntries.push({
            type: 'output',
            text: `Email:    ${personal.email}
GitHub:   ${personal.github}
LinkedIn: ${personal.linkedin}
Discord:  ${personal.discord}
Calendar: ${personal.calendly}`
          });
          break;

        case 'sudo hire':
        case 'hire':
          sound.playSuccess();
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
          newEntries.push({
            type: 'success',
            text: `🎉 EXCELLENT DECISION!
Initiating top-tier engineering collaboration protocol...
Alex Rivera has been alerted. Reach out directly at ${personal.email} to lock in dates.`
          });
          break;

        case 'download-cv':
        case 'cv':
        case 'resume':
          sound.playSuccess();
          onOpenResume();
          newEntries.push({
            type: 'output',
            text: 'Opening resume modal in 3... 2... 1...'
          });
          break;

        case 'matrix':
          newEntries.push({
            type: 'output',
            text: `01000001 01101100 01100101 01111000 00100000 01010010 01101001 01110110 01100101 01110010 01100001
[MATRIX RAIN ACTIVE] Welcome to the construct. The real world is just lines of code.`
          });
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'exit':
        case 'quit':
          onClose();
          return;

        default:
          if (lower.startsWith('theme ')) {
            const chosen = lower.split(' ')[1];
            if (['cyber', 'violet', 'matrix', 'light'].includes(chosen)) {
              setTheme(chosen);
              newEntries.push({ type: 'success', text: `Theme successfully switched to: ${chosen}` });
            } else {
              newEntries.push({ type: 'error', text: `Unknown theme: ${chosen}. Available: cyber, violet, matrix, light` });
            }
          } else if (rawCmd === '') {
            // empty
          } else {
            newEntries.push({
              type: 'error',
              text: `zsh: command not found: "${rawCmd}". Type "help" to see valid commands.`
            });
          }
      }

      setHistory((prev) => [...prev, ...newEntries]);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyPointer !== -1) {
        const nextPointer = historyPointer + 1;
        if (nextPointer < commandHistory.length) {
          setHistoryPointer(nextPointer);
          setInputVal(commandHistory[nextPointer]);
        } else {
          setHistoryPointer(-1);
          setInputVal('');
        }
      }
    } else {
      sound.playTerminalKey();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[560px] font-mono text-xs sm:text-sm">
        
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors" />
            <button onClick={() => setHistory([])} className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors" title="Clear" />
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors" />
            <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              alex@macbook-pro:~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div 
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-2 bg-slate-950 text-slate-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <div className="text-cyan-400 font-bold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-slate-400">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 font-mono whitespace-pre-wrap">{item.text}</pre>
              )}
              {item.type === 'success' && (
                <div className="text-emerald-400 font-bold whitespace-pre-wrap">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 whitespace-pre-wrap">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 pt-2 text-cyan-400">
            <span className="text-emerald-400 font-bold">guest@alex-rivera:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-white font-mono caret-cyan-400"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>Type <span className="text-cyan-400">help</span></span>
            <span>•</span>
            <span><span className="text-amber-400">sudo hire</span></span>
            <span>•</span>
            <span><span className="text-indigo-400">skills</span></span>
          </div>
          <div className="font-mono text-slate-500 hidden sm:block">
            UTF-8 | bash/zsh
          </div>
        </div>

      </div>
    </div>
  );
}
