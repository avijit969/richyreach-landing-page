import { Check, FileText, Heart, Search, Wallet, type LucideIcon } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const JOBS: { icon: LucideIcon; title: string; body: string; before: string }[] = [
  {
    icon: Search,
    title: "Finding brands that actually pay",
    body: "Briefs, invites and open contests that come to you",
    before: "Cold DMs and hashtag scrolling",
  },
  {
    icon: FileText,
    title: "Agreeing the work and the price",
    body: "Deliverables, deadline and fee fixed in one card",
    before: "Terms lost somewhere in a chat",
  },
  {
    icon: Wallet,
    title: "Getting paid without chasing",
    body: "Budget held before you shoot, released on approval",
    before: "Invoices and reminder messages",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 self-start">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em] max-w-[460px]">
            Three jobs stand between a creator and their next brand deal.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted max-w-[440px]">
            RichyReach takes all three off your plate, so making great content goes back to being the whole job. Brands get the same
            in reverse: verified creators, clear terms, and money that only moves when the work is done.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-white divide-y divide-line">
            {JOBS.map((job, i) => {
              const Icon = job.icon;
              return (
                <div key={job.title} className="flex items-start gap-4 sm:gap-5 p-5 sm:p-7">
                  <span className="w-11 h-11 shrink-0 rounded-xl bg-sand flex items-center justify-center text-oxblood">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-faint">Job {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-[17px] font-medium">{job.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">{job.body}</p>
                    <p className="mt-3 text-[13px] text-faint">
                      Before: <span className="line-through">{job.before}</span>
                    </p>
                  </div>
                  <span className="shrink-0 flex items-center gap-1.5 rounded-full bg-green/10 text-green px-2 sm:px-3 py-1 text-[13px]">
                    <Check size={14} />
                    <span className="sr-only sm:not-sr-only">Handled</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-3xl bg-ink text-white p-5 sm:p-7 flex items-start gap-4 sm:gap-5">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
              <Heart size={20} strokeWidth={1.75} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-white/50">What&apos;s left for you</p>
              <h3 className="mt-1 text-[17px] font-medium">The content you&apos;re great at</h3>
              <p className="mt-1 text-[15px] text-white/65">The reason you started posting</p>
              {/* On phones the pill drops under the text instead of squeezing it. */}
              <span className="sm:hidden inline-block mt-3 rounded-full bg-white px-3 py-1 text-[13px] font-medium text-ink">Yours again</span>
            </div>
            <span className="hidden sm:inline-block shrink-0 rounded-full bg-white px-3 py-1 text-[13px] font-medium text-ink">Yours again</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
