"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

export default function WaitlistSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://backend-api.richyreach.com/api/waitlist/count")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && typeof json.data?.count === "number") {
          setWaitlistCount(json.data.count);
        }
      })
      .catch((err) => console.error("Failed to fetch waitlist count:", err));
  }, []);

  return (
    <section id="waitlist" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden w-full border-t border-rose/5">
      {/* Glow background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-oxblood/5 rounded-full mb-6 border border-oxblood/10">
          <Sparkles size={13} className="text-oxblood" />
          <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-oxblood">Early Access Waitlist</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-oxblood mb-4">
          Secure Your Spot in Line
        </h2>
        <p className="text-base text-rose-deep max-w-xl mx-auto font-light leading-relaxed mb-8">
          Whether you are a premium creator looking to multiply your income, or a high-growth brand seeking real conversion ROI, register early to claim your matching quota.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-oxblood hover:bg-oxblood-deep text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2 mx-auto cursor-pointer"
        >
          Join the Waitlist
          <ArrowRight size={18} />
        </button>

        {/* Social Proof Progress Info */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <span className="text-xs text-rose-deep font-semibold">
            Currently in waitlist queue: <span className="text-oxblood font-bold">{waitlistCount !== null ? (1900 + (waitlistCount)).toLocaleString() : "......"} creators & brands</span>
          </span>
          <div className="w-64 h-2 bg-cream-dark rounded-full overflow-hidden">
            <div className="h-full bg-oxblood rounded-full animate-pulse animate-duration-2000" style={{ width: "89%" }} />
          </div>
          <span className="text-[10px] text-rose font-medium uppercase tracking-wide">89% of Early-access spots claimed</span>
        </div>
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
