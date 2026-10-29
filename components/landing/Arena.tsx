import { Check, Star, Trophy } from "lucide-react";
import { PlayStoreButton, Reveal } from "./ui";

const LEADERBOARD = [
  { name: "neha.travels", reach: "48.2K", prize: "₹5,000" },
  { name: "the.foodie.guy", reach: "39.7K", prize: "₹3,000" },
  { name: "styledbyaarav", reach: "31.4K", prize: "₹2,000" },
];

export default function Arena() {
  return (
    <section id="arena" className="py-20 md:py-32 scroll-mt-16">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal className="grid lg:grid-cols-2 gap-6 items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-5">Arena</p>
            <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">
              <span className="text-faint">Pay for results, not promises.</span>
              <br />
              Run a contest in minutes.
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-muted lg:max-w-[460px] lg:justify-self-end">
            An Arena is an open challenge any creator can join. Set the prize, set the rules, and let the work compete.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <Reveal className="min-w-0 rounded-3xl border border-line p-3">
            <div className="px-3 sm:px-4 pt-4 pb-6">
              <h3 className="text-[18px] font-medium">Reel Reach Arena</h3>
              <p className="mt-2 text-[15px] text-muted">Creators post reels for your brand. The highest reach wins the prize pool.</p>
            </div>
            <div className="rounded-2xl bg-sand p-2.5 sm:p-6">
              <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2 text-[14px] font-medium">
                    <Trophy size={16} /> Leaderboard
                  </p>
                  <span className="text-[12px] text-muted">Prize pool ₹10,000</span>
                </div>
                <div className="mt-4 divide-y divide-line">
                  {LEADERBOARD.map((row, i) => (
                    <div key={row.name} className="flex items-center gap-2.5 sm:gap-3 py-3">
                      <span className="w-4 shrink-0 text-[13px] text-muted">{i + 1}</span>
                      <span className={`hidden min-[400px]:block shrink-0 w-8 h-8 rounded-full ${["bg-rose-soft/70", "bg-cream", "bg-cream-dark"][i]}`} />
                      <span className="flex-1 min-w-0 truncate text-[14px]">{row.name}</span>
                      <span className="text-[13px] text-muted w-12 shrink-0 text-right">{row.reach}</span>
                      <span className="text-[13px] font-medium w-14 shrink-0 text-right">{row.prize}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 rounded-3xl border border-line p-3">
            <div className="px-3 sm:px-4 pt-4 pb-6">
              <h3 className="text-[18px] font-medium">Google Review Arena</h3>
              <p className="mt-2 text-[15px] text-muted">Creators visit and leave genuine Google reviews. Each approved review earns them ₹25.</p>
            </div>
            <div className="rounded-2xl bg-sand p-2.5 sm:p-6">
              <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-cream" />
                  <div>
                    <p className="text-[14px] font-medium">ishita.k</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} size={13} className="fill-[#f4b400] text-[#f4b400]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed">
                  Cosy place, the filter coffee is the real deal. Staff were quick even on a busy Sunday.
                </p>
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-sand px-3 py-2.5 text-[13px]">
                  <Check size={15} className="text-green" />
                  Review verified · ₹25 added to wallet
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <PlayStoreButton size="lg" label="Launch your first Arena" />
        </Reveal>
      </div>
    </section>
  );
}
