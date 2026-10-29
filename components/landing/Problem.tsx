import { Check, Heart, Wallet } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const JOBS = [
  { title: "Finding brands that actually pay", body: "Briefs, invites and open contests that come to you" },
  { title: "Agreeing the work and the price", body: "Deliverables, deadline and fee fixed in one card" },
  { title: "Getting paid without chasing", body: "Budget held before you shoot, released on approval" },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 lg:gap-24">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em] max-w-[460px]">
            Three jobs stand between a creator and their next brand deal.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted max-w-[440px]">
            RichyReach takes all three off your plate, so making great content goes back to being the whole job. Brands get the same
            in reverse: verified creators, clear terms, and money that only moves when the work is done.
          </p>

          <div className="mt-10 w-full max-w-[300px] rounded-2xl border border-line bg-white p-5 shadow-[0_8px_30px_-12px_rgba(29,21,23,0.12)]">
            <div className="flex items-center gap-2 text-[13px] text-muted">
              <Wallet size={15} />
              Wallet
            </div>
            <p className="mt-3 text-[40px] leading-none tracking-tight">₹8,000</p>
            <p className="mt-1.5 text-[15px] text-muted">Released to your wallet</p>
            <div className="mt-5 pt-4 border-t border-line flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-green/10 text-green flex items-center justify-center">
                <Check size={15} />
              </span>
              <span className="text-[14px] leading-snug">
                Reel approved by the brand
                <span className="block text-[13px] text-muted">Withdraw to UPI or bank</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          {JOBS.map((job, i) => (
            <div key={job.title} className="flex items-start gap-5 py-7 border-b border-line first:pt-2">
              <span className="w-5 text-[15px] text-faint pt-0.5">{i + 1}</span>
              <div className="flex-1">
                <h3 className="text-[17px] font-medium">{job.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{job.body}</p>
              </div>
              <span className="hidden sm:inline-block shrink-0 rounded-full bg-sand px-3 py-1 text-[13px] text-muted">Handled by RichyReach</span>
            </div>
          ))}

          <div className="mt-6 rounded-3xl bg-sand p-5 sm:p-7 flex items-start gap-4 sm:gap-5">
            <Heart size={20} className="mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-[17px] font-medium">The content you&apos;re great at</h3>
              <p className="mt-1 text-[15px] text-muted">The reason you started posting</p>
              {/* On phones the pill drops under the text instead of squeezing it. */}
              <span className="sm:hidden inline-block mt-3 rounded-full bg-ink px-3 py-1 text-[13px] font-medium text-white">Yours again</span>
            </div>
            <span className="hidden sm:inline-block shrink-0 rounded-full bg-ink px-3 py-1 text-[13px] font-medium text-white">Yours again</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
