import { Building2, Coffee, Megaphone, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./ui";

const AUDIENCES: { icon: LucideIcon; tint: string; title: string; body: string; tags: string[] }[] = [
  {
    icon: Sparkles,
    tint: "from-rose-soft/50 to-cream",
    title: "Creators",
    body: "Get discovered by brands, sell fixed packages, join contests, and withdraw what you earn.",
    tags: ["Nano", "Micro", "Macro", "UGC creators"],
  },
  {
    icon: Megaphone,
    tint: "from-cream to-cream-lite",
    title: "D2C and e-commerce brands",
    body: "Brief once, pick from verified creators, and pay only for content you approve.",
    tags: ["Fashion", "Beauty", "Food", "Tech"],
  },
  {
    icon: Coffee,
    tint: "from-cream-dark/70 to-cream-lite",
    title: "Cafés, restaurants and stores",
    body: "Bring creators through the door and grow your Google rating with a review Arena.",
    tags: ["Cafés", "Salons", "Gyms", "Retail"],
  },
  {
    icon: Building2,
    tint: "from-rose-soft/40 to-cream-lite",
    title: "Anyone selling on Instagram",
    body: "Answer every comment and DM automatically, and see what your posts actually do.",
    tags: ["Comment-to-DM", "Ice breakers", "Analytics"],
  },
];

export default function Audiences() {
  return (
    <section id="who" className="py-20 md:py-32 scroll-mt-16">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-[640px] mx-auto">
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">Made for everyone who trades on reach</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            You don&apos;t need an agency or a media team. RichyReach fits the way small brands and independent creators already work.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-6">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={(i % 2) * 0.08} className="grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 sm:gap-6 lg:gap-5">
                <div className="self-start rounded-2xl sm:rounded-3xl bg-sand aspect-square sm:aspect-[5/4] flex items-center justify-center">
                  <div className={`w-[70%] sm:w-[62%] aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl bg-gradient-to-br ${a.tint} flex items-center justify-center shadow-[0_16px_40px_-20px_rgba(29,21,23,0.35)]`}>
                    <Icon size={38} strokeWidth={1.5} className="w-6 h-6 sm:w-[38px] sm:h-[38px] text-oxblood" />
                  </div>
                </div>
                <div className="flex flex-col sm:py-1">
                  <span className="text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mt-1 sm:mt-auto">
                    <h3 className="text-[16px] font-medium">{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.body}</p>
                    <p className="mt-4 text-[13px] text-faint">{a.tags.join(" • ")}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
