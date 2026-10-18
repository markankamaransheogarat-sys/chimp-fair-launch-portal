import React from 'react';
import { 
  Users, 
  Cpu, 
  DollarSign, 
  Award, 
  Flame, 
  ShieldAlert, 
  ShieldCheck, 
  Check, 
  X, 
  Sparkles, 
  ArrowUpRight,
  BrainCircuit,
  Bot
} from 'lucide-react';

export const MojoAITraction: React.FC = () => {
  const metrics = [
    {
      label: 'Active Solana Wallets',
      value: '56,400+',
      growth: '+318% QoQ',
      icon: Users,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      label: 'AI Inference Requests',
      value: '1,240,000+',
      growth: 'Real-time on-chain',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      label: 'Platform Trading Volume',
      value: '$3,920,000+',
      growth: '100% on Solana DEXs',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-400'
    },
    {
      label: 'HOOTs Community Rewards',
      value: '14,800,000',
      growth: 'Retroactive points pool',
      icon: Award,
      color: 'from-amber-500 to-yellow-400'
    }
  ];

  const comparison = [
    {
      feature: 'Token Distribution',
      predatory: '80% held by stealth insiders & snipers',
      chimp: '100% unlocked for public participants at TGE',
      icon: ShieldCheck
    },
    {
      feature: 'Team & Core Allocations',
      predatory: 'Unlocked day 1 or hidden under multiple caller wallets',
      chimp: '18-24 month linear vesting with transparent cliff',
      icon: Check
    },
    {
      feature: 'Over-subscription Logic',
      predatory: 'Front-run by MEV bots; late retail receives 0 or gets dumped on',
      chimp: 'Pro-rata overflow return: 100% fair access regardless of speed',
      icon: Check
    },
    {
      feature: 'Underlying Utility & Revenue',
      predatory: 'Zero utility, pure PVP speculation',
      chimp: 'Powers Mojo AI agents, fee buybacks & API compute credits',
      icon: Sparkles
    },
    {
      feature: 'Liquidity Pool Management',
      predatory: 'LP keys held by anonymous deployer (rug pull risk)',
      chimp: '100% Raydium LP burned permanently at launch',
      icon: Flame
    }
  ];

  return (
    <div className="space-y-8">
      {/* Ecosystem Metrics Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-indigo-400" />
              Mojo AI Ecosystem Traction
            </h3>
            <p className="text-xs text-slate-400">
              Live on-chain metrics verifying real-world agent utility prior to token launch
            </p>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            Pre-TGE Traction Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="relative p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-lg overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${m.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white`}>
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-0.5">
                    {m.growth}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-2xl font-black text-white tracking-tight">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison: Fair Launch vs PVP Sh*tcoins */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="mb-5">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
            Integrity Benchmark
          </span>
          <h3 className="text-xl font-bold text-white mt-2">
            Why $CHIMP Differs from Predatory Token Launches
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Fair Launch mechanics mathematically guarantee protection against MEV snipers and insider dumps.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                <th className="pb-3 font-semibold">Mechanism</th>
                <th className="pb-3 font-semibold text-rose-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Typical Memecoin / PVP
                </th>
                <th className="pb-3 font-semibold text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    $CHIMP Fair Launch
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {comparison.map((c, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 font-medium text-slate-200 w-1/4">
                    {c.feature}
                  </td>
                  <td className="py-3.5 text-rose-300/90 w-3/8 pr-4">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{c.predatory}</span>
                    </div>
                  </td>
                  <td className="py-3.5 text-emerald-300/90 w-3/8">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{c.chimp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Agent Utility Suite */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/20">
          <Bot className="w-6 h-6 text-indigo-400 mb-3" />
          <h4 className="text-base font-bold text-white mb-1.5">Autonomous Execution</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mojo AI agents monitor Solana meme velocity, DEX liquidity shifts, and execute automated arbitrage without manual intervention.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/20">
          <Flame className="w-6 h-6 text-emerald-400 mb-3" />
          <h4 className="text-base font-bold text-white mb-1.5">Deflationary Buybacks</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            25% of all Mojo AI platform subscription and API fees are committed to programmatic buyback and burning of $CHIMP tokens.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500/20">
          <Award className="w-6 h-6 text-purple-400 mb-3" />
          <h4 className="text-base font-bold text-white mb-1.5">HOOTs Staking Multipliers</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Early HOOTs point holders unlock yield boosts and priority RPC tier bandwidth inside the Mojo AI ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};
