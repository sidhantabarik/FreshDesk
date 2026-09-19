import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ArchitectureCard from './components/ArchitectureCard';
import UserManagement from './components/UserManagement';

export default function App() {
  const [serverStatus, setServerStatus] = useState('checking');

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar serverStatus={serverStatus} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <span>✨ Complete Full-Stack Boilerplate</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            React + Vite + Tailwind <span className="gradient-text">v4</span> + Node.js
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400">
            Engineered with a clean layered backend (Controllers, Services, Repositories, Models) and ready to push to GitHub.
          </p>
        </section>

        {/* Architecture Diagram */}
        <ArchitectureCard />

        {/* Live CRUD Component */}
        <UserManagement onStatusChange={setServerStatus} />
      </main>

      <footer className="border-t border-slate-800/80 glass-panel py-6 text-center text-xs text-slate-500">
        <p>FreshDesk Full-Stack Setup • Built with React, Vite, Tailwind CSS v4 & Node.js Express</p>
      </footer>
    </div>
  );
}
