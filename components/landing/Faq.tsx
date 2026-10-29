"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "./faq-data";
import { PlayStoreButton, Reveal } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 scroll-mt-16">
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
