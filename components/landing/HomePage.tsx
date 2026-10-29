"use client";

import { useEffect, useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import FeatureTabs from "@/components/landing/FeatureTabs";
import Arena from "@/components/landing/Arena";
import Audiences from "@/components/landing/Audiences";
import HowItWorks from "@/components/landing/HowItWorks";
import AllInOne from "@/components/landing/AllInOne";
import Compare from "@/components/landing/Compare";
import Cta from "@/components/landing/Cta";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  // Shared links like ?waitlist=open or #join open the signup straight away.
  useEffect(() => {
    const check = () => {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("waitlist") === "open" ||
        params.get("join") === "true" ||
        window.location.hash === "#join" ||
        window.location.hash === "#waitlist"
      ) {
        setWaitlistOpen(true);
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Android is live on Google Play; the waitlist is now only for the iOS app.
  const openIosWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="flex-1 flex flex-col">
      <Nav />
      <main>
        <Hero onJoin={openIosWaitlist} />
        <Problem />
        <FeatureTabs />
        <Arena />
        <Audiences />
        <HowItWorks />
        <AllInOne />
        <Compare />
        <Cta onJoin={openIosWaitlist} />
        <Faq />
      </main>
      <Footer />
      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}
