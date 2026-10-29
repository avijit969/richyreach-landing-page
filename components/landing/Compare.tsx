import { CircleCheck, CircleX } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const ROWS = [
  { label: "Finding the right fit", us: "Verified creators by niche, city and reach", them: "Scrolling hashtags and cold DMs" },
  { label: "Agreeing the terms", us: "Deliverables and fee in one card", them: "Lost somewhere in a chat" },
  { label: "Getting paid", us: "Held upfront, released on approval", them: "Invoices and reminders" },
  { label: "Proving results", us: "Reach pulled from Instagram", them: "Screenshots and trust" },
  { label: "Comments and DMs", us: "Answered by your own rules", them: "Missed when you're busy" },
];

export default function Compare() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-20 items-center">
        <Reveal>
          <Eyebrow>Why RichyReach</Eyebrow>
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em] max-w-[440px]">
            DMs and spreadsheets don&apos;t scale. RichyReach does the work.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted max-w-[460px]">
            Most creator deals still happen in Instagram DMs, where nothing is written down and nobody is protected. RichyReach puts the
            whole deal, from first hello to final payout, in one place both sides can see.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-line overflow-hidden">
          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] text-[13px] sm:text-[14px]">
            <div className="px-4 sm:px-5 py-4 border-b border-line" />
            <div className="px-3 sm:px-5 py-4 border-b border-line font-medium">RichyReach</div>
            <div className="px-3 sm:px-5 py-4 border-b border-line text-muted">DMs and spreadsheets</div>
            {ROWS.map((r, i) => (
              <div key={r.label} className="contents">
                <div className={`px-4 sm:px-5 py-5 font-medium ${i < ROWS.length - 1 ? "border-b border-line" : ""}`}>{r.label}</div>
                <div className={`px-3 sm:px-5 py-5 flex gap-2 ${i < ROWS.length - 1 ? "border-b border-line" : ""}`}>
                  <CircleCheck size={16} className="mt-0.5 shrink-0" />
                  {r.us}
                </div>
                <div className={`px-3 sm:px-5 py-5 flex gap-2 text-muted ${i < ROWS.length - 1 ? "border-b border-line" : ""}`}>
                  <CircleX size={16} className="mt-0.5 shrink-0 text-faint" />
                  {r.them}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
