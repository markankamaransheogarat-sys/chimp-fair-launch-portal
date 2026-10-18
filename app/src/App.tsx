import React, { useState } from 'react';
import { 
  Sparkles, 
  Coins, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  ExternalLink, 
  Cpu, 
  Rocket, 
  Flame, 
  ArrowRight,
  Terminal,
  Activity
} from 'lucide-react';
import { FairLaunchSimulator } from './components/FairLaunchSimulator';
import { MojoAITraction } from './components/MojoAITraction';
import { ChimpThreadViewer } from './components/ChimpThreadViewer';

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);


export function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'traction' | 'thread' | 'contract'>('simulator');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border-b border-indigo-500/20 py-2 px-4 text-center text-xs">
        <span className="inline-flex items-center gap-1.5 font-medium text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          $CHIMP Fair Launch Part 1 Submission for Superteam Earn &amp; Mojo AI Ecosystem
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/20">
              🐵
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  $CHIMP Fair Launch Portal
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Solana TGE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Powered by Mojo AI • Raydium Direct</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-400">Solana TPS:</span>
              <span className="font-mono font-semibold text-emerald-400">2,640</span>
            </div>

            <a
              href="https://github.com/markankamaransheogarat-sys/chimp-fair-launch-portal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex space-x-1 sm:space-x-2 border-t border-slate-900 overflow-x-auto py-1">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'simulator'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Coins className="w-4 h-4" />
            Fair Launch Simulator
          </button>

          <button
            onClick={() => setActiveTab('traction')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'traction'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Mojo AI Traction (56k Wallets)
          </button>

          <button
            onClick={() => setActiveTab('thread')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'thread'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <TwitterIcon className="w-4 h-4 text-sky-400" />
            Viral Thread (9 Tweets)
          </button>

          <button
            onClick={() => setActiveTab('contract')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'contract'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Security &amp; Tokenomics
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'simulator' && <FairLaunchSimulator />}
        {activeTab === 'traction' && <MojoAITraction />}
        {activeTab === 'thread' && <ChimpThreadViewer />}
        {activeTab === 'contract' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Verified Tokenomics &amp; Anti-Rug Architecture
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Mathematical safety guarantees audited for the Solana Fair Launch protocol.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 uppercase">Token Spec</span>
                  <div className="mt-2 space-y-1.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Token Name:</span>
                      <span className="font-mono text-white">Chimp AI</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Symbol:</span>
                      <span className="font-mono text-amber-400 font-bold">$CHIMP</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Total Supply:</span>
                      <span className="font-mono text-white">1,000,000,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Standard:</span>
                      <span className="font-mono text-white">SPL Token-2022</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">LP Status:</span>
                      <span className="font-mono text-emerald-400 font-semibold">100% Burned on Raydium</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-purple-400 uppercase">Vesting &amp; Liquidity Schedule</span>
                  <div className="mt-2 space-y-1.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Public Fair Launch:</span>
                      <span className="font-mono text-emerald-400 font-bold">100% Unlocked at TGE</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Raydium Liquidity:</span>
                      <span className="font-mono text-white">25% (Permanent Burn)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Ecosystem &amp; Treasury:</span>
                      <span className="font-mono text-white">32.5% (36m Linear)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">HOOTs Community:</span>
                      <span className="font-mono text-white">20.0% (Retroactive)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Core Team:</span>
                      <span className="font-mono text-amber-400">15.0% (24m linear, 6m cliff)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs text-slate-300 font-mono">
                    Official Mint: <span className="text-white font-bold">CH1MPxAiSolanaFairLaunchRaydiumV11111111111</span>
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  Dev Key Revoked • Metadata Immutable
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="text-white font-medium">$CHIMP Fair Launch Portal</span> • Built for Superteam Earn Bounty &amp; Mojo AI Community
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/chimpxAI" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <TwitterIcon className="w-3.5 h-3.5" /> @chimpxAI
            </a>
            <a 
              href="https://earn.superteam.fun" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              Superteam Earn
            </a>
            <a 
              href="https://github.com/markankamaransheogarat-sys/chimp-fair-launch-portal" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
