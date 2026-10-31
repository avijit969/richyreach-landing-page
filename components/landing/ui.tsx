"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PLAY_STORE_URL, WEB_APP_URL } from "./links";

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

/** The four-colour Google Play mark. */
export function GooglePlayIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 466 511.98" className={className} aria-hidden>
      <path fill="#EA4335" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
      <path fill="#FBBC04" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
      <path fill="#34A853" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
      <path fill="#4285F4" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
    </svg>
  );
}

/** The Apple logo, drawn in currentColor. */
export function AppleIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

export { PLAY_STORE_URL, WEB_APP_URL };

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
      <GooglePlayIcon size={size === "lg" ? 18 : 16} />
      {label}
    </a>
  );
}

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white font-medium px-5 py-3 text-[15px] hover:bg-oxblood transition-colors cursor-pointer";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white text-ink font-medium px-5 py-3 text-[15px] hover:bg-sand transition-colors cursor-pointer";
