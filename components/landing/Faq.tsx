"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PlayStoreButton, Reveal } from "./ui";

const FAQS = [
  {
    q: "What exactly is RichyReach?",
    a: "An app that connects creators with brands and runs the whole collaboration: briefs, invites, chat, contests, approvals and payouts. It also includes Instagram tools such as comment-to-DM rules and post analytics.",
  },
  {
    q: "Is there a minimum follower count for creators?",
    a: "No. Nano, micro and macro creators are all welcome. Brands filter by niche, city and reach, so smaller creators with an engaged audience get found too.",
  },
  {
    q: "How do payments work?",
    a: "When a creator accepts a campaign, the brand's budget is held before work starts. Once the brand approves the delivered content, the money is released to the creator's RichyReach wallet.",
  },
  {
    q: "How do creators withdraw their earnings?",
    a: "Add a payout method, either a UPI ID or a bank account, and withdraw your wallet balance to it.",
  },
  {
    q: "What is an Arena?",
    a: "An open contest any creator can join. In a Reel Reach Arena creators post reels and the highest reach wins the prize pool. In a Google Review Arena creators leave genuine Google reviews and earn ₹25 for each approved one.",
  },
  {
    q: "How does the Instagram automation work?",
    a: "You connect your Instagram professional account and set rules, for example: when a comment contains PRICE, reply publicly and send a DM. You can also set ice breakers for new conversations and see a log of everything that was sent.",
  },
  {
    q: "When can I download the app?",
    a: "RichyReach is live on Android: download it from Google Play. The iOS app is on its way; join the iOS waitlist and we'll email you as soon as it's on the App Store.",
  },
  {
    q: "Who is behind RichyReach?",
    a: "RichyReach is a brand owned and operated by MagicWebs Technologies Pvt Ltd. You can reach the team at support@richyreach.com.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16">
        <Reveal>
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">
            Your questions, covered
            <br />
            <span className="text-faint">Get started today</span>
          </h2>
          <div className="mt-9">
            <PlayStoreButton size="lg" label="Get the app" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-2xl transition-colors ${isOpen ? "bg-sand" : ""}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-4 px-5 py-5 text-left cursor-pointer" aria-expanded={isOpen}>
                  <span className="flex-1 text-[16px]">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
