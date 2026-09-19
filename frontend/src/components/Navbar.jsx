import React from 'react';
import { Layers, Server, Code2, Github } from 'lucide-react';

export default function Navbar({ serverStatus }) {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold gradient-text tracking-wide">FreshDesk Architecture</h1>
            <p className="text-xs text-slate-400">React + Vite + Tailwind v4 + Node.js (Layered)</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-medium">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                serverStatus === 'online'
                  ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]'
                  : serverStatus === 'checking'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-rose-500'
              }`}
            />
            <span className="text-slate-300 capitalize">
              Backend: {serverStatus === 'online' ? 'Connected (Port 5000)' : serverStatus}
            </span>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Ready</span>
          </a>
        </div>
      </div>
    </header>
  );
}
