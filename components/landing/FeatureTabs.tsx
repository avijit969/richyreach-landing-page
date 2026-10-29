"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Check,
  CircleDollarSign,
  FileText,
  MessageCircle,
  MessagesSquare,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  UserRound,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { InstagramIcon, Phone, Reveal, type IconType } from "./ui";

interface Tab {
  id: string;
  label: string;
  icon: IconType;
  eyebrow: string;
  title: string;
  body: string;
  points: { icon: IconType; title: string; body: string }[];
  visual: React.ReactNode;
  caption: string;
}

function ChatMock() {
  return (
    <div className="w-full max-w-[420px] rounded-3xl border border-line bg-white shadow-[0_24px_60px_-24px_rgba(29,21,23,0.25)] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
        <span className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-[13px] font-semibold text-oxblood">KC</span>
        <div>
          <p className="text-[14px] font-medium">Kaapi &amp; Co.</p>
          <p className="text-[12px] text-green">Collab in progress</p>
        </div>
      </div>
      <div className="p-5 space-y-3 bg-sand/60">
        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white border border-line px-4 py-2.5 text-[14px]">
          Loved your café reels. Want to shoot our monsoon menu?
        </div>
        <div className="rounded-2xl border border-line bg-white p-4">
          <p className="text-[12px] text-muted">Campaign invite</p>
          <p className="mt-1 text-[15px] font-medium">Monsoon menu launch</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
            <span className="rounded-full bg-sand px-2.5 py-1">1 reel</span>
            <span className="rounded-full bg-sand px-2.5 py-1">2 stories</span>
            <span className="rounded-full bg-sand px-2.5 py-1">₹8,000</span>
          </div>
          <div className="mt-4 space-y-2 text-[13px]">
            <p className="flex items-center gap-2">
              <Check size={14} className="text-green" /> Brief accepted
            </p>
            <p className="flex items-center gap-2">
              <Check size={14} className="text-green" /> Draft shared for review
            </p>
            <p className="flex items-center gap-2 text-muted">
              <span className="w-3.5 h-3.5 rounded-full border border-faint" /> Go live and submit link
            </p>
          </div>
        </div>
        <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-ink text-white px-4 py-2.5 text-[14px]">Shooting Saturday, draft by Monday.</div>
      </div>
    </div>
  );
}

function AutomationMock() {
  return (
    <div className="w-full max-w-[440px] space-y-4">
      <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(29,21,23,0.25)]">
        <p className="flex items-center gap-2 text-[12px] text-muted">
          <InstagramIcon size={14} /> Comment on your reel
        </p>
        <div className="mt-3 flex items-start gap-3">
          <span className="w-8 h-8 rounded-full bg-rose-soft/60 shrink-0" />
          <p className="text-[14px]">
            <span className="font-medium">riya.eats</span> PRICE
          </p>
        </div>
        <div className="mt-3 ml-11 flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-oxblood shrink-0" />
          <p className="text-[14px]">
            <span className="font-medium">you</span> Sent you a DM 💌
          </p>
        </div>
      </div>
      <div className="ml-8 rounded-3xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(29,21,23,0.25)]">
        <p className="flex items-center gap-2 text-[12px] text-muted">
          <Send size={14} /> Direct message, sent automatically
        </p>
        <div className="mt-3 rounded-2xl rounded-tl-md bg-sand px-4 py-3 text-[14px]">
          Hi Riya! The full menu and prices are here. Reply if you want a table this weekend.
        </div>
        <p className="mt-3 text-[12px] text-muted">Rule: comment contains “PRICE” · reply + DM</p>
      </div>
    </div>
  );
}

/** Two app screens side by side; the second drops to a step below and hides on small phones. */
function PhonePair({ first, second }: { first: { src: string; alt: string }; second: { src: string; alt: string } }) {
  return (
    <div className="flex items-start justify-center gap-5">
      <Phone src={first.src} alt={first.alt} className="w-[220px] md:w-[230px]" />
      <Phone src={second.src} alt={second.alt} className="hidden sm:block w-[210px] md:w-[230px] mt-12" />
    </div>
  );
}

const TABS: Tab[] = [
  {
    id: "campaigns",
    label: "Campaigns",
    icon: Sparkles,
    eyebrow: "Brand campaigns",
    title: "Post a brief. Get the right creators.",
    body: "Brands describe the content, the budget and the audience they want. Matching creators see it, apply, or get invited directly from search.",
    points: [
      { icon: Search, title: "Find creators", body: "Search by niche, city and reach, then invite the ones you like in a tap." },
      { icon: BadgeCheck, title: "Verified numbers", body: "Follower and reach figures come straight from Instagram, not screenshots." },
    ],
    visual: (
      <PhonePair
        first={{ src: "/richyreach-app-ui/brand-create-campaign.png", alt: "RichyReach create campaign brief screen" }}
        second={{ src: "/richyreach-app-ui/brand-creator-discovery.png", alt: "RichyReach creator discovery screen" }}
      />
    ),
    caption: "Write the brief, then browse creators and shortlist the ones you like.",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: Store,
    eyebrow: "Creator marketplace",
    title: "Sell your services like products",
    body: "Creators list fixed packages such as a reel, a story set or a shoot day. Brands book them like an order, without a week of back-and-forth.",
    points: [
      { icon: ShoppingBag, title: "Bookable packages", body: "Clear price, deliverables and turnaround on every listing." },
      { icon: UserRound, title: "Public profile", body: "Share one link that shows your work, stats and services." },
    ],
    visual: (
      <PhonePair
        first={{ src: "/richyreach-app-ui/creator-add-service.png", alt: "RichyReach add new service screen" }}
        second={{ src: "/richyreach-app-ui/creator-profile.png", alt: "RichyReach creator profile with services" }}
      />
    ),
    caption: "Add a service with a price and delivery time, and it shows on your profile.",
  },
  {
    id: "collab",
    label: "Collab & chat",
    icon: MessagesSquare,
    eyebrow: "Collab workspace",
    title: "Every deal in one thread",
    body: "Invites, briefs, drafts and approvals live next to the conversation, so nobody hunts through DMs to remember what was agreed.",
    points: [
      { icon: MessageCircle, title: "In-app chat", body: "Talk to brands and creators without sharing personal numbers." },
      { icon: FileText, title: "Milestones", body: "Brief, draft, go-live and approval tracked step by step." },
    ],
    visual: <ChatMock />,
    caption: "A collab thread: the invite, the terms and the progress together.",
  },
  {
    id: "automation",
    label: "Instagram automation",
    icon: InstagramIcon,
    eyebrow: "Comment-to-DM",
    title: "Turn every comment into a conversation",
    body: "Connect your Instagram and set simple rules. When someone comments a keyword, RichyReach replies publicly, sends the DM, or both.",
    points: [
      { icon: Send, title: "Keyword rules", body: "“Comment LINK and we’ll DM you”, running on its own." },
      { icon: BarChart3, title: "Activity and analytics", body: "See who was reached, what was sent, and how your posts perform." },
    ],
    visual: <AutomationMock />,
    caption: "A comment rule answering in public and in the inbox.",
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: Wallet,
    eyebrow: "Payments",
    title: "Money that moves when the work is done",
    body: "The brand's budget is held before you start and released to your wallet once they approve. Withdraw to your UPI ID or bank account.",
    points: [
      { icon: CircleDollarSign, title: "Held, then released", body: "No invoices to chase and no work delivered on trust." },
      { icon: Sparkles, title: "Referral rewards", body: "Share your code; you both get rewarded when they join and verify." },
    ],
    visual: <Phone src="/richyreach-app-ui/brand-profile.png" alt="RichyReach brand profile with wallet balance" className="w-[230px] md:w-[270px]" />,
    caption: "The brand profile: wallet balance, campaigns and spend in one place.",
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section id="features" className="py-20 md:py-32 scroll-mt-16">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">Built for how collabs actually run</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            One app for briefs, bookings, contests, DMs and payouts. For creators, D2C brands, cafés and every local business on Instagram.
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <div className="no-scrollbar max-w-full overflow-x-auto rounded-full border border-line bg-white p-1 shadow-[0_2px_12px_rgba(29,21,23,0.04)]">
            <div className="flex w-max gap-1">
              {TABS.map((t) => {
                const Icon = t.icon;
                const on = t.id === active;
                return (
                  <button
                    key={t.id}
                    onClick={(e) => {
                      setActive(t.id);
                      // Keep the chosen tab visible when the bar scrolls sideways on phones.
                      e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                    }}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-[14px] whitespace-nowrap transition-colors cursor-pointer ${
                      on ? "bg-sand text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <Icon size={15} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-14 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-center"
          >
            <div>
              <p className="text-sm text-muted mb-4">{tab.eyebrow}</p>
              <h3 className="text-[26px] md:text-[28px] leading-[1.2] tracking-[-0.02em]">{tab.title}</h3>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">{tab.body}</p>
              <div className="mt-8 space-y-6">
                {tab.points.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-4">
                      <Icon size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[16px] font-medium">{p.title}</p>
                        <p className="mt-1 text-[15px] text-muted">{p.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="rounded-[28px] bg-sand min-h-[480px] md:min-h-[560px] flex items-center justify-center px-6 py-12">{tab.visual}</div>
              <p className="mt-5 text-center text-[15px] text-muted">{tab.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
