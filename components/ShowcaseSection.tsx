"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Sparkles, Briefcase, Users, Zap } from "lucide-react";
import IPhoneFrame from "@/components/IPhoneFrame";

export default function ShowcaseSection() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll position of the wrapper container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map the scroll progress to the active screen index (0 to 3) on desktop viewports
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      const index = Math.min(Math.floor(latest * 4), 3);
      setSelectedScreen(index);
    }
  });

  // Smooth scroll page to the center of the matching index's scroll region
  const handleCardClick = (index: number) => {
    setSelectedScreen(index);
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024 && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollRange = containerRef.current.scrollHeight - window.innerHeight;
        // Scroll to the midpoint of the region for this index
        // Regions: [0, 0.25], [0.25, 0.5], [0.5, 0.75], [0.75, 1.0]
        const progress = (index + 0.5) / 4;
        const targetScroll = scrollTop + rect.top + scrollRange * progress;
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  const showcaseScreens = [
    {
      title: "Home Dashboard",
      description: "Your central matching control center. Track campaigns, compatibility index, notifications, and escrow payout status.",
      image: "/app-ui/home-page.png",
      icon: <Zap size={18} />
    },
    {
      title: "Creators Arena",
      description: "Discover verified creator profiles. Compare engagement metrics, reach, post categories, and send direct match invites.",
      image: "/app-ui/arena-page.png",
      icon: <Sparkles size={18} />
    },
    {
      title: "Campaigns Marketplace",
      description: "Browse or publish campaign briefs. Brands post targets and creators apply instantly with locked escrow payment budgets.",
      image: "/app-ui/market-page.png",
      icon: <Briefcase size={18} />
    },
    {
      title: "Creator Profile",
      description: "The digital matching resume. Creators link profiles to showcase automated stats, pricing, and verified followers.",
      image: "/app-ui/profile-page.png",
      icon: <Users size={18} />
    }
  ];

  return (
    <div ref={containerRef} className="relative h-auto lg:h-[300vh] w-full bg-white border-t border-rose/5">
      {/* The section sticks to the screen on desktop during scroll */}
      <section id="showcase" className="relative lg:sticky lg:top-0 lg:h-screen flex items-center py-20 lg:py-0 px-6 md:px-12 w-full overflow-hidden">
        {/* Soft blur backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/5 rounded-full filter blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-oxblood/5 rounded-full mb-4 border border-oxblood/10">
              <Sparkles size={13} className="text-oxblood" />
              <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-oxblood">Product Showcase</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-oxblood mb-4">
              A Sneak Peek Inside the App
            </h2>
            <p className="text-base text-rose-deep font-light max-w-lg mx-auto">
              Take a visual tour through our premium, high-performance interface built for speed, safety, and high-impact marketing matches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Interactive Selector Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
              {showcaseScreens.map((screen, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full p-4 sm:p-6 rounded-3xl text-left border transition-all duration-300 cursor-pointer flex gap-4 sm:gap-5 items-start ${
                    selectedScreen === index
                      ? "bg-[#fbf8f5] border-rose/25 shadow-lg lg:translate-x-4 opacity-100"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-90 hover:bg-[#fbf8f5]/50 hover:border-rose/10"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
                    selectedScreen === index ? "bg-oxblood text-white" : "bg-white text-oxblood border border-rose/15"
                  }`}>
                    {screen.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans font-bold text-base text-oxblood mb-1">
                      {screen.title}
                    </h4>
                    <p className="text-xs text-rose-deep font-light leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Premium iPhone Frame Display */}
            <div className="lg:col-span-7 flex justify-center items-center relative order-1 lg:order-2">
              {/* Background Decorative Rings */}
              <div className="absolute w-96 h-96 rounded-full border border-dashed border-rose/15 animate-[spin_60s_linear_infinite] -z-10" />
              <div className="absolute w-80 h-80 rounded-full border border-dashed border-rose/10 animate-[spin_40s_linear_infinite_reverse] -z-10" />

              {/* iPhone Mockup Frame */}
              <IPhoneFrame>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedScreen}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={showcaseScreens[selectedScreen].image}
                      alt={showcaseScreens[selectedScreen].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </IPhoneFrame>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
