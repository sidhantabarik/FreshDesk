import React from 'react';
import { Database, Cpu, Send, ShieldCheck, ArrowRight } from 'lucide-react';

const layers = [
  {
    title: '1. Controller Layer',
    folder: 'src/controllers/',
    icon: Send,
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30',
    desc: 'Handles incoming HTTP requests, extracts parameters, delegates to services, and returns HTTP responses.',
  },
  {
    title: '2. Service Layer',
    folder: 'src/services/',
    icon: Cpu,
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
    desc: 'Encapsulates pure business logic, input validation, permissions, and service orchestration.',
  },
  {
    title: '3. Repository Layer',
    folder: 'src/repositories/',
    icon: Database,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    desc: 'Data Access Layer (DAL) executing database queries (MongoDB, Postgres, SQL, or in-memory arrays).',
  },
  {
    title: '4. Model Layer',
    folder: 'src/models/',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    desc: 'Entity definitions, schema validation, and domain rules representing data objects.',
  },
];

export default function ArchitectureCard() {
  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Backend Architecture Overview
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Separation of Concerns (SOC) pattern implemented in Node.js Express.
          </p>
        </div>
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20">
          Clean Code Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-xl bg-gradient-to-br ${layer.color} border transition-all duration-200 hover:-translate-y-1 relative`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-slate-900/60">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900/80 rounded text-slate-300">
                  {layer.folder}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{layer.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{layer.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
