"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PLAY_STORE_URL } from "./links";

/** Fades a block up into place the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted mb-4">{children}</p>;
}

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative rounded-full overflow-hidden shrink-0" style={{ width: size, height: size }}>
        <Image src="/richyreach-logo.png" alt="" fill sizes={`${size}px`} className="object-cover" />
      </span>
      <span className="font-semibold text-[19px] tracking-tight text-ink">RichyReach</span>
    </span>
  );
}

/** A plain phone outline around a real app screenshot. */
export function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[9/20] rounded-[2.4rem] bg-white p-[7px] shadow-[0_30px_60px_-20px_rgba(29,21,23,0.25),0_0_0_1px_rgba(29,21,23,0.08)] ${className}`}
    >
      <div className="relative w-full h-full rounded-[1.95rem] overflow-hidden bg-sand">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 60vw, 300px" className="object-cover object-top" priority={priority} />
        {/* Punch-hole camera, centred in the screenshot's status bar between the clock and the icons. */}
        <span className="absolute left-1/2 top-[2.5%] w-[3.6%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111] ring-[1.5px] ring-[#2a2a2a]" />
      </div>
    </div>
  );
}

export type IconType = React.ComponentType<{ size?: number; className?: string }>;

/** lucide no longer ships brand marks, so the Instagram glyph is drawn here in its style. */
export function InstagramIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export { PLAY_STORE_URL };

/** Opens the Android app's Play Store listing in a new tab. */
export function PlayStoreButton({ size = "md", label = "Get it on Google Play" }: { size?: "md" | "lg"; label?: string }) {
  const pad = size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-4 py-2.5 text-[14px]";
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white font-medium hover:bg-oxblood transition-colors ${pad}`}
    >
      <svg width={size === "lg" ? 17 : 15} height={size === "lg" ? 17 : 15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 2.6v18.8c0 .5.5.8 1 .6l16.2-9.4a.7.7 0 0 0 0-1.2L5 2c-.5-.2-1 .1-1 .6Z" />
      </svg>
      {label}
    </a>
  );
}

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white font-medium px-5 py-3 text-[15px] hover:bg-oxblood transition-colors cursor-pointer";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white text-ink font-medium px-5 py-3 text-[15px] hover:bg-sand transition-colors cursor-pointer";
