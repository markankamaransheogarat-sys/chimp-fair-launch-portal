import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Share2, 
  MessageSquare, 
  Heart, 
  Repeat2,
  Sparkles,
  Bookmark
} from 'lucide-react';

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


interface TweetItem {
  id: number;
  text: string;
  charCount: number;
  tags: string[];
}

export const ChimpThreadViewer: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [allCopied, setAllCopied] = useState<boolean>(false);

  const tweets: TweetItem[] = [
    {
      id: 1,
      text: `1/9 🚨 99% of Solana token launches are engineered to make you exit liquidity for insiders and MEV snipers.

Today, @chimpxAI is breaking the mold with the $CHIMP Fair Launch on @solana & @Raydium.

Here is the complete blueprint of how it works and why it changes the game 👇 🧵`,
      charCount: 263,
      tags: ['@chimpxAI', '@solana', '@Raydium']
    },
    {
      id: 2,
      text: `2/9 ⚡️ First: What is Mojo AI?

Unlike vaporware launches, Mojo AI already has battle-tested on-chain traction:
• 56,400+ active Solana wallets
• 1.2M+ AI agent inference queries
• $3.9M+ verified decentralized trading volume
• 14.8M community HOOTs points distributed

Real users before token launch.`,
      charCount: 279,
      tags: ['#Solana', '#AIAgents']
    },
    {
      id: 3,
      text: `3/9 ⚖️ The Problem with Standard DEX Launches:

In standard launches:
❌ Dev snipes 40% in block 0
❌ Fast bots frontrun retail on bonding curves
❌ Insiders dump within 15 minutes

$CHIMP Fair Launch solves this with a mathematically enforced Pro-Rata Allocation model. Zero sniper advantage.`,
      charCount: 278,
      tags: ['#DeFi', '#SolanaEcosystem']
    },
    {
      id: 4,
      text: `4/9 🧮 How the Pro-Rata Refund Engine Works:

Suppose the target raise is $750k, but $1.5M is deposited:
• Everyone receives 50% of their intended allocation in $CHIMP
• The remaining 50% USDC is instantly refunded to your wallet
• Everyone pays the exact same effective price: $0.01

Fair for whales and dolphins alike.`,
      charCount: 282,
      tags: ['#FairLaunch']
    },
    {
      id: 5,
      text: `5/9 🔒 Transparency & Vesting:

• Public Participants: 100% UNLOCKED at TGE. No waiting, no predatory lockups.
• Team & Core Contributors: 24-month linear vesting with 6-month cliff.
• Raydium LP: 100% of liquidity tokens are BURNED permanently upon pool creation.

Rug pulls are code-level impossible.`,
      charCount: 277,
      tags: ['#Raydium', '#SolanaSecurity']
    },
    {
      id: 6,
      text: `6/9 🤖 Real Token Utility:

$CHIMP is not just a ticker, it's the gas & governance of Mojo AI:
1. Agent Subscriptions: Pay for high-frequency algorithmic trading bots
2. Deflationary Burns: 25% of all platform API fees buy back and burn $CHIMP
3. Staking Multipliers: Boost your yield on ecosystem HOOTs points`,
      charCount: 284,
      tags: ['#AgenticAI', '#CryptoAI']
    },
    {
      id: 7,
      text: `7/9 📊 $CHIMP Tokenomics Breakdown:

Total Supply: 1,000,000,000 $CHIMP (Fixed forever)
• 7.5% - Fair Launch Public Sale (100% unlocked)
• 25.0% - Burned @Raydium Liquidity Pool
• 32.5% - Mojo AI Ecosystem & Agent Treasury (36m vest)
• 20.0% - Community Rewards & HOOTs Conversions
• 15.0% - Core Team & Dev (24m linear vest)`,
      charCount: 283,
      tags: ['#Tokenomics']
    },
    {
      id: 8,
      text: `8/9 🛡 Safe Participation Checklist:

1. Always double-check official links via @chimpxAI
2. Use trusted Solana wallets (Phantom, Solflare)
3. Ensure you have native SOL for gas fees
4. Verify the smart contract address on Solscan before confirming any transaction
5. Unused USDC refunds claimable immediately post-launch.`,
      charCount: 284,
      tags: ['#SecurityFirst']
    },
    {
      id: 9,
      text: `9/9 🚀 The era of predatory PvP launches is coming to an end. Autonomous AI agents + fair transparent capital formation is the future of @solana.

Follow @chimpxAI for launch time announcements.
Explore the interactive simulator: https://markankamaransheogarat-sys.github.io/chimp-fair-launch-portal/

RT if you support fair launches! 🔄`,
      charCount: 295,
      tags: ['@chimpxAI', '@solana', '@Raydium']
    }
  ];

  const handleCopyTweet = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const fullThread = tweets.map(t => t.text).join('\n\n---\n\n');
    navigator.clipboard.writeText(fullThread);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 2500);
  };

  const openTwitterIntent = (text: string) => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <TwitterIcon className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">
              Official 9-Tweet Educational Launch Thread
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Optimized for maximum viral reach, algorithmic retention, and community trust. Tags <span className="text-sky-300">@chimpxAI</span>, <span className="text-purple-300">@solana</span>, and <span className="text-emerald-300">@Raydium</span>.
          </p>
        </div>

        <button
          onClick={handleCopyAll}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-sky-500/20 active:scale-95 shrink-0"
        >
          {allCopied ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>Full Thread Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy All 9 Tweets</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        {tweets.map((tweet) => {
          const isCopied = copiedId === tweet.id;
          return (
            <div 
              key={tweet.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all shadow-md group relative"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {tweet.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">Mojo AI / $CHIMP</span>
                      <span className="text-xs text-sky-400 font-mono">@chimpxAI</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Tweet {tweet.id} of 9</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyTweet(tweet.text, tweet.id)}
                    title="Copy this tweet"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => openTwitterIntent(tweet.text)}
                    title="Post on X"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 text-xs font-medium transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Tweet content */}
              <div className="pl-12 text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans">
                {tweet.text}
              </div>

              {/* Tweet footer / metrics mock */}
              <div className="pl-12 mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1.5 hover:text-sky-400 cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" /> 24
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 cursor-pointer">
                    <Repeat2 className="w-3.5 h-3.5" /> 89
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-rose-400 cursor-pointer">
                    <Heart className="w-3.5 h-3.5" /> 342
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-indigo-400 cursor-pointer">
                    <Bookmark className="w-3.5 h-3.5" /> 58
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {tweet.charCount} / 280 chars
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
