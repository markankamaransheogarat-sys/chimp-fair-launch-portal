import React, { useState } from 'react';
import { 
  Zap, 
  Coins, 
  ShieldCheck, 
  CheckCircle2, 
  RotateCcw, 
  TrendingUp, 
  Lock, 
  Unlock 
} from 'lucide-react';

export const FairLaunchSimulator: React.FC = () => {
  const [totalContributed, setTotalContributed] = useState<number>(1200000);
  const [userDeposit, setUserDeposit] = useState<number>(500);

  const targetHardCap = 750000; // $750k target for 75M tokens ($0.01 base)
  const totalPublicTokens = 75000000; // 75M $CHIMP

  // Pro-rata mechanics
  const isOverSubscribed = totalContributed > targetHardCap;
  const allocationRatio = isOverSubscribed ? targetHardCap / totalContributed : 1.0;
  const userEffectiveContribution = userDeposit * allocationRatio;
  const userRefundUsdc = userDeposit - userEffectiveContribution;
  const effectivePricePerToken = isOverSubscribed ? 0.01 : (totalContributed / totalPublicTokens);
  const userTokensReceived = Math.round(userEffectiveContribution / 0.01);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Raydium Direct Fair Launch Model
          </span>
          <span className="text-xs text-slate-400">Total Supply: 1,000,000,000 $CHIMP</span>
        </div>
        <h2 className="text-2xl font-black text-white mb-2">
          $CHIMP Fair Launch & Pro-Rata Refund Engine
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Why nobody overpays: If the raise exceeds the target cap, extra funds are automatically refunded pro-rata. Zero sniper bot advantage.
        </p>

        {/* 5 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs mb-1">
              <Unlock className="w-3.5 h-3.5" />
              <span>100% Unlocked at TGE</span>
            </div>
            <p className="text-[11px] text-slate-400">Public sale buyers receive 100% liquid tokens at launch. Zero vesting locks.</p>
          </div>

          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs mb-1">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Pro-Rata Refunds</span>
            </div>
            <p className="text-[11px] text-slate-400">Over-subscribed pools refund unallocated USDC directly to your wallet.</p>
          </div>

          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold text-xs mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Team & Advisors Locked</span>
            </div>
            <p className="text-[11px] text-slate-400">Team tokens cannot dump at launch. Community gets 50% for rewards.</p>
          </div>
        </div>
      </div>

      {/* Interactive Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-emerald-400" />
            <span>Simulate Public Sale Allocation</span>
          </h3>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <span>Total Pool Raise</span>
              <span className="text-white font-mono">${totalContributed.toLocaleString()} USDC</span>
            </div>
            <input
              type="range"
              min="300000"
              max="3000000"
              step="50000"
              value={totalContributed}
              onChange={(e) => setTotalContributed(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>Soft Cap ($300k)</span>
              <span>Target ($750k)</span>
              <span>3x Oversubscribed ($2.25M)</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Your Contribution (USDC)
            </label>
            <div className="flex gap-2 mb-2">
              {[50, 100, 250, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setUserDeposit(amt)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                    userDeposit === amt
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="10"
              step="50"
              value={userDeposit}
              onChange={(e) => setUserDeposit(Math.max(10, parseFloat(e.target.value) || 10))}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-400">Oversubscription:</span>
              <span className={isOverSubscribed ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                {((totalContributed / targetHardCap) * 100).toFixed(0)}% of target
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Guaranteed Token Rate:</span>
              <span className="text-white font-bold">$0.0100 USDC / $CHIMP</span>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-1">
              <span className="text-slate-400">Bot Sniping Advantage:</span>
              <span className="text-emerald-400 font-bold">0% (Pro-Rata Window)</span>
            </div>
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span>Your Exact Settlement Breakdown</span>
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block mb-1">Tokens Allocated (100% Liquid)</span>
              <span className="text-2xl font-black text-emerald-400">{userTokensReceived.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">$CHIMP at $0.01</span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block mb-1">USDC Refunded to Wallet</span>
              <span className="text-2xl font-black text-cyan-400">${userRefundUsdc.toFixed(2)}</span>
              <span className="text-[10px] text-cyan-400/80 block mt-0.5">Automated pro-rata return</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs leading-relaxed text-slate-300">
            <strong className="text-white block font-sans">Why this Fair Launch model protects investors:</strong>
            <p>
              In traditional launchpads, whales and sniper bots buy out the entire supply in 1 block, or users get diluted at arbitrary valuation spikes.
              With <span className="text-emerald-400 font-semibold">$CHIMP on Raydium</span>:
            </p>
            <ul className="space-y-1 pl-4 list-disc text-slate-400">
              <li>Everyone pays the exact same fair valuation ($0.01).</li>
              <li>If 2x funds are deposited, everyone gets 50% allocation and 50% of their USDC returned instantly.</li>
              <li>You never buy tokens above the fair target cap.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
