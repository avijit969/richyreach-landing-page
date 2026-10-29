import {
  BadgeCheck,
  ChartColumn,
  FileText,
  Gift,
  MessageCircle,
  MessagesSquare,
  Search,
  ShoppingBag,
  Star,
  Trophy,
  Wallet,
} from "lucide-react";
import { InstagramIcon, Reveal, type IconType } from "./ui";

const ITEMS: { icon: IconType; title: string; body: string }[] = [
  { icon: FileText, title: "Campaign briefs", body: "Post the work, budget and audience you want" },
  { icon: Search, title: "Creator search", body: "Filter by niche, city and reach, then invite" },
  { icon: BadgeCheck, title: "Verified profiles", body: "Stats pulled from Instagram, not screenshots" },
  { icon: Trophy, title: "Reel Reach Arena", body: "Highest reach wins the prize pool" },
  { icon: Star, title: "Google Review Arena", body: "₹25 for every approved review" },
  { icon: ShoppingBag, title: "Service marketplace", body: "Bookable creator packages with fixed prices" },
  { icon: MessagesSquare, title: "Collab workspace", body: "Brief, drafts and approvals in one thread" },
  { icon: InstagramIcon, title: "Comment-to-DM", body: "Keyword rules that reply and DM for you" },
  { icon: MessageCircle, title: "Ice breakers", body: "Ready questions when someone opens your DMs" },
  { icon: ChartColumn, title: "Instagram analytics", body: "Reach and engagement for every post" },
  { icon: Wallet, title: "Wallet and payouts", body: "Withdraw to your UPI ID or bank account" },
  { icon: Gift, title: "Referral rewards", body: "Share your code and you both get rewarded" },
];

export default function AllInOne() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal className="max-w-[560px]">
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">And it&apos;s all one app</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Everything creators and brands need to find each other, work together and get paid. No spreadsheets, no stitched-together tools.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.05} className="flex gap-3.5">
                <Icon size={19} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-[16px] font-medium">{item.title}</p>
                  <p className="mt-1 text-[15px] text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
