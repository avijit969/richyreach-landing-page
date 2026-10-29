"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, PLAY_STORE_URL, PlayStoreButton } from "./ui";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#arena", label: "Arena" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-white/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1272px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="RichyReach home">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[15px] text-ink/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a href="mailto:support@richyreach.com" className="text-[15px] text-ink/80 hover:text-ink">
            Contact
          </a>
          <PlayStoreButton label="Get the app" />
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 text-ink" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <div className="px-4 py-4 flex flex-col">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-ink border-b border-line last:border-0">
                  {l.label}
                </a>
              ))}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-ink text-white text-center font-medium py-3"
              >
                Get it on Google Play
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
