"use client";

import { motion } from "framer-motion";
import { Smartphone, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { Phone, PlayStoreButton, secondaryButton } from "./ui";

const CX = 700;
const CY = 700;

const DOT_STEP = 2.2;
const TICK_ANGLES = Array.from({ length: 13 }, (_, i) => 180 + i * 15);
const RUN_COLORS = ["#e8d8cc", "#d8a7ad", "#d8a7ad", "#b46a74", "#b46a74", "#8d4750", "#3f030b"];
/** Angle of each run dot before rotation; the last (darkest, largest) is the head. */
const RUN_ANGLES = RUN_COLORS.map((_, i) => 270 + (i - 3) * DOT_STEP);
const SWEEP = 80; // degrees either side of the top
const SWEEP_MS = 9000; // one pass, left to right

const TICK_IDLE = [217, 210, 207]; // #d9d2cf
const TICK_LIT = [63, 3, 11]; // oxblood

/** How strongly a tick is lit by the run: 1 when the head sits on it, fading to 0 a few degrees away. */
function tickIntensity(tick: number, rotation: number) {
  let lit = 0;
  RUN_ANGLES.forEach((a, i) => {
    const weight = 0.25 + (0.75 * i) / (RUN_ANGLES.length - 1);
    const distance = Math.abs(tick - (a + rotation));
    lit = Math.max(lit, weight * Math.max(0, 1 - distance / 3));
  });
  return lit;
}

function point(angle: number, radius: number) {
  const r = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(r), y: CY + radius * Math.sin(r) };
}

/** A headline word with a slow colour shimmer and a hand-drawn underline that draws itself in. */
function Highlight({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="relative inline-block">
      <span className="hero-shimmer">{children}</span>
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute left-0 -bottom-[0.16em] w-full h-[0.22em] overflow-visible" aria-hidden>
        <motion.path
          d="M3 9 C 45 3, 110 2, 197 7"
          fill="none"
          stroke="#b46a74"
          strokeWidth={5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </span>
  );
}

/** Dotted arc with tick marks behind the headline. A run of coloured dots sweeps along the arc and lights each tick it crosses. */
function Dial() {
  const runRef = useRef<SVGGElement>(null);
  const tickRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    const paint = (rotation: number) => {
      runRef.current?.setAttribute("transform", `rotate(${rotation} ${CX} ${CY})`);
      TICK_ANGLES.forEach((tick, i) => {
        const line = tickRefs.current[i];
        if (!line) return;
        const t = tickIntensity(tick, rotation);
        const [r, g, b] = TICK_IDLE.map((c, k) => Math.round(c + (TICK_LIT[k] - c) * t));
        line.setAttribute("stroke", `rgb(${r},${g},${b})`);
        line.setAttribute("stroke-width", String(1.5 + 1.5 * t));
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(0);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      // Back and forth with an ease at each end, like the old CSS alternate animation.
      const phase = ((now - start) / SWEEP_MS) % 2;
      const p = phase < 1 ? phase : 2 - phase;
      paint(-SWEEP + 2 * SWEEP * ((1 - Math.cos(Math.PI * p)) / 2));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const dots: React.ReactNode[] = [];
  for (let a = 180; a <= 360; a += DOT_STEP) {
    const p = point(a, 680);
    dots.push(<circle key={a} cx={p.x} cy={p.y} r={1.6} />);
  }

  return (
    <svg viewBox="0 0 1400 710" className="absolute inset-x-0 top-0 w-full h-full" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <g fill="#c9c0bd">{dots}</g>
      <g stroke="#d9d2cf" strokeWidth={1.5} strokeLinecap="round">
        {TICK_ANGLES.map((a, i) => {
          const from = point(a, a === 180 || a === 360 ? 600 : 560);
          const to = point(a, 620);
          return (
            <line
              key={a}
              ref={(el) => {
                tickRefs.current[i] = el;
              }}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
            />
          );
        })}
      </g>
      <g ref={runRef} transform={`rotate(${-SWEEP} ${CX} ${CY})`}>
        {RUN_COLORS.map((c, i) => {
          const p = point(RUN_ANGLES[i], 680);
          return <circle key={i} cx={p.x} cy={p.y} r={i === RUN_COLORS.length - 1 ? 4.5 : 2.4} fill={c} />;
        })}
      </g>
    </svg>
  );
}

export default function Hero({ onJoin }: { onJoin: () => void }) {

  return (
    <section id="top" className="relative pt-16 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        <div className="hidden md:block absolute inset-x-0 top-6 h-[640px] pointer-events-none">
          <Dial />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-20 md:pt-40 pb-14"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[13px] text-ink mb-7">
            <Sparkles size={14} className="text-rose-deep" />
            For creators and the brands that need them
          </span>

          <h1 className="max-w-[760px] text-[40px] leading-[1.08] sm:text-[56px] md:text-[64px] font-normal tracking-[-0.03em] text-ink">
            Where creators get <Highlight delay={0.6}>rich</Highlight> and brands get <Highlight delay={1}>reach</Highlight>
          </h1>

          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted">
            Find paid brand work, run reel contests and review drives, and get paid the moment the work is approved. All in one app.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <PlayStoreButton size="lg" />
            <button onClick={onJoin} className={secondaryButton}>
              <Smartphone size={17} />
              Join the iOS waitlist
            </button>
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[13px] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            <span>
              Live on <span className="text-ink">Android</span> · <span className="text-ink">iOS</span> coming soon
            </span>
          </span>
        </motion.div>
      </div>

      {/* Product panel: the real app, three screens */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-[1272px] mx-auto px-4 sm:px-6"
      >
        <div className="relative rounded-[28px] border border-line bg-sand overflow-hidden h-[460px] sm:h-[560px] md:h-[620px]">
          <div className="absolute inset-0 flex items-start justify-center gap-3 md:gap-5 lg:gap-10 pt-10 md:pt-14">
            <Phone src="/richyreach-app-ui/creator-marketplace.png" alt="RichyReach marketplace screen" className="hidden sm:block w-[170px] md:w-[200px] lg:w-[260px] mt-16 -rotate-3" />
            <Phone src="/richyreach-app-ui/creator-home.png" alt="RichyReach creator home screen" className="w-[230px] sm:w-[210px] md:w-[240px] lg:w-[290px]" priority />
            <Phone src="/richyreach-app-ui/creator-arena.png" alt="RichyReach arena screen" className="hidden sm:block w-[170px] md:w-[200px] lg:w-[260px] mt-16 rotate-3" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand to-transparent" />
        </div>
        <p className="text-center text-[15px] text-muted mt-6">
          Built in India by MagicWebs Technologies, for creators of every size.
        </p>
      </motion.div>
    </section>
  );
}
