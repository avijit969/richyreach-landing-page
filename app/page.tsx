"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import WaitlistSection from "@/components/WaitlistSection";
import WaitlistModal from "@/components/WaitlistModal";
import ShowcaseSection from "@/components/ShowcaseSection";
import { 
  TrendingUp, 
  Wallet, 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  Briefcase, 
  Zap, 
  ShieldCheck, 
  Star,
  Download,
  Menu,
  X
} from "lucide-react";
import { Variants } from "framer-motion";

// Fade in container animation helper
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// FAQ Type
interface FAQItem {
  q: string;
  a: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"creator" | "brand">("creator");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const faqs: FAQItem[] = [
    {
      q: "How does the creator-brand matching algorithm work?",
      a: "Our smart matching engine evaluates content style, audience demographics, category alignment, and historical engagement rates to connect brands with the most relevant creators, ensuring high-impact campaigns."
    },
    {
      q: "Is there a minimum follower requirement for creators?",
      a: "No! We welcome nano, micro, and macro influencers alike. What matters most to us is authentic engagement, content quality, and a verified niche audience."
    },
    {
      q: "How are campaign payments secured?",
      a: "RichyReach uses a transparent escrow-style payment system. Brands fund the campaign budget upfront. Funds are released automatically and securely to the creator's wallet once milestones are completed and verified."
    },
    {
      q: "How fast can a brand launch a campaign?",
      a: "With our automated onboarding, briefs can be created and distributed to matching creators in under 48 hours. Review, negotiation, and selection happen entirely within the app."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative">
      {/* == Navigation Bar == */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#fbf8f5]/85 border-b border-rose/10 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-md">
              <Image 
                src="/richyreach-logo.png" 
                alt="RichyReach Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-oxblood">
              RichyReach
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-rose-deep">
            <a href="#features" className="hover:text-oxblood transition-colors">Features</a>
            <a href="#showcase" className="hover:text-oxblood transition-colors">Showcase</a>
             <a href="#brands" className="hover:text-oxblood transition-colors">Brands</a>
             <button 
               onClick={() => setIsWaitlistOpen(true)} 
               className="hover:text-oxblood transition-colors cursor-pointer bg-transparent border-none p-0 font-medium font-sans text-sm"
             >
               Waitlist
             </button>
             <a href="#stats" className="hover:text-oxblood transition-colors">Stats</a>
            <a href="#faq" className="hover:text-oxblood transition-colors">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="px-5 py-2.5 rounded-full bg-oxblood text-white font-semibold text-sm hover:bg-oxblood-deep shadow-md hover:shadow-lg transition-all cursor-pointer border-none"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-oxblood"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/95 rounded-2xl border border-rose/10 p-5 flex flex-col gap-4 shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto"
            >
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#8d4750] hover:text-oxblood py-1"
              >
                Features
              </a>
              <a 
                href="#showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#8d4750] hover:text-oxblood py-1"
              >
                Showcase
              </a>
              <a 
                href="#brands" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#8d4750] hover:text-oxblood py-1"
              >
                Brands
              </a>
               <button 
                 onClick={() => { setMobileMenuOpen(false); setIsWaitlistOpen(true); }}
                 className="font-medium text-[#8d4750] hover:text-oxblood py-1 text-left cursor-pointer bg-transparent border-none p-0"
               >
                 Waitlist
               </button>
              <a 
                href="#stats" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#8d4750] hover:text-oxblood py-1"
              >
                Stats
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#8d4750] hover:text-oxblood py-1"
              >
                FAQ
              </a>
              <hr className="border-rose/10" />
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsWaitlistOpen(true); }}
                className="w-full py-3 rounded-full bg-oxblood text-white text-center font-semibold text-sm cursor-pointer border-none"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* == Hero Section == */}
      <section className="relative min-h-screen pt-32 sm:pt-36 pb-12 sm:pb-20 px-6 md:px-12 flex items-center bg-gradient-to-br from-[#fbf8f5] via-[#f5eae0] to-[#fbf8f5]">
        {/* Glow Shapes */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-rose/10 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-cream/20 rounded-full filter blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-oxblood/5 rounded-full self-center lg:self-start mb-6 border border-oxblood/10"
            >
              <Sparkles size={14} className="text-oxblood" />
              <span className="font-sans font-semibold text-xs tracking-wide text-oxblood uppercase">
                #1 Influencer matching Portal
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-oxblood leading-tight tracking-tight mb-6"
            >
              Where Creators Get <span className="italic font-normal text-rose-deep block md:inline">Rich</span>,<br className="hidden md:block"/> and Brands Get <span className="font-sans font-extrabold text-oxblood-deep uppercase tracking-tighter">Reach</span>.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-rose-deep leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light"
            >
              RichyReach bridges the gap between premium content creators and high-growth brands. Smart matches, automated campaigns, verified stats, and instant escrow payments.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              <button 
                onClick={() => setIsWaitlistOpen(true)} 
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-oxblood hover:bg-oxblood-deep text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer border-none"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#showcase" 
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white border border-rose-soft hover:bg-rose-soft/5 text-oxblood font-semibold rounded-full shadow-sm hover:shadow transition-all text-center"
              >
                Learn More
              </a>
            </motion.div>

            {/* Avatar Row */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-cream-dark">
                    <Image 
                      src={i === 1 ? "/ananya-profile.png" : "/onboarding-actor.png"} 
                      alt="User avatar" 
                      width={40} 
                      height={40} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-oxblood text-oxblood" />
                  ))}
                </div>
                <span className="text-xs text-rose-deep font-semibold">
                  Trusted by 25,000+ Active Users
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full max-w-[340px] sm:max-w-none mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            {/* Soft backdrop glow */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-oxblood/5 border border-rose/10 -z-10 animate-pulse" />

            {/* Premium Phone Container */}
            <div className="relative w-[270px] h-[550px] sm:w-[300px] sm:h-[610px] bg-oxblood-deep rounded-[40px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-4 border-oxblood shrink-0">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-oxblood-deep rounded-b-2xl z-30 flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-black/60 mr-2" />
                <div className="w-10 h-1 bg-black/40 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="w-full h-full rounded-[32px] sm:rounded-[38px] overflow-hidden bg-[#f4ece4] relative">
                <Image 
                  src="/app-ui/home-page.png" 
                  alt="RichyReach Home Screen" 
                  fill 
                  className="object-cover"
                  priority 
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-2 sm:-left-12 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-rose/10 z-20 scale-90 sm:scale-100 origin-right sm:origin-center"
            >
              <div className="w-9 h-9 rounded-xl bg-oxblood/10 flex items-center justify-center text-oxblood">
                <Wallet size={18} />
              </div>
              <div>
                <span className="block text-[10px] text-rose uppercase tracking-wider font-semibold">Total Paid</span>
                <span className="block text-sm font-bold text-oxblood">₹2.4Cr+ Earnings</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 sm:-right-8 bottom-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-rose/10 z-20 scale-90 sm:scale-100 origin-left sm:origin-center"
            >
              <div className="w-9 h-9 rounded-xl bg-green/10 flex items-center justify-center text-green">
                <TrendingUp size={18} />
              </div>
              <div>
                <span className="block text-[10px] text-rose uppercase tracking-wider font-semibold">Average Rate</span>
                <span className="block text-sm font-bold text-green">4.8x Engagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* == Value Proposition Section == */}
      <section id="features" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-oxblood mb-4">
              Two Worlds. One Seamless App.
            </h2>
            <p className="text-base text-rose-deep font-light">
              RichyReach brings creator talent and brand outreach together into a clean, integrated experience. Select your path below.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#f4ece4] p-1.5 rounded-full flex items-center">
              <button 
                onClick={() => setActiveTab("creator")}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === "creator" 
                    ? "bg-oxblood text-white shadow-md" 
                    : "text-oxblood hover:text-oxblood-deep"
                }`}
              >
                <Sparkles size={16} />
                For Creators
              </button>
              <button 
                onClick={() => setActiveTab("brand")}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === "brand" 
                    ? "bg-oxblood text-white shadow-md" 
                    : "text-oxblood hover:text-oxblood-deep"
                }`}
              >
                <Briefcase size={16} />
                For Brands
              </button>
            </div>
          </div>

          {/* Feature Showcase Grid */}
          <AnimatePresence mode="wait">
            {activeTab === "creator" ? (
              <motion.div 
                key="creator-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Mock Card Representation (Ananya Sharma profile card) */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl border border-rose/10">
                    {/* Header profile info */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-oxblood/10">
                        <Image src="/ananya-profile.png" alt="Ananya Sharma Profile" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-sans font-bold text-base text-oxblood">Ananya Sharma</h4>
                          <MaterialIcons name="verified" size={16} color={Colors.oxblood} className="text-oxblood" />
                        </div>
                        <p className="text-xs text-rose">Lifestyle • Fashion • Beauty</p>
                        <div className="inline-block px-2.5 py-0.5 bg-oxblood/8 rounded-full mt-2">
                          <span className="text-[10px] font-sans font-semibold text-oxblood uppercase tracking-wide">Top Creator</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between border-b border-rose/10 pb-4 mb-4 text-center">
                      <div className="flex-1">
                        <span className="block font-sans font-bold text-base text-oxblood">120K</span>
                        <span className="block text-[10px] text-rose uppercase tracking-wider font-semibold">Followers</span>
                      </div>
                      <div className="w-[1px] bg-rose/10 h-8 shrink-0" />
                      <div className="flex-1">
                        <span className="block font-sans font-bold text-base text-oxblood">8.9%</span>
                        <span className="block text-[10px] text-rose uppercase tracking-wider font-semibold">Engagement</span>
                      </div>
                      <div className="w-[1px] bg-rose/10 h-8 shrink-0" />
                      <div className="flex-1">
                        <span className="block font-sans font-bold text-base text-oxblood">₹ 1.2L+</span>
                        <span className="block text-[10px] text-rose uppercase tracking-wider font-semibold">Earnings</span>
                      </div>
                    </div>

                    {/* Growth Header */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-sans font-bold text-xs text-oxblood">Growth Tracker</span>
                      <span className="text-[9px] px-2.5 py-1 border border-rose/15 rounded-full text-rose font-medium">This Month ▼</span>
                    </div>

                    {/* Growth Native Bars */}
                    <div className="h-24 flex items-end justify-between px-3 pt-6 relative">
                      {/* Peak Indicator */}
                      <div className="absolute top-0 left-[62%] -translate-x-1/2 bg-oxblood px-2 py-0.5 rounded-md">
                        <span className="font-sans font-bold text-[8px] text-white">+32%</span>
                      </div>
                      
                      <div className="w-10 h-10 bg-rose-soft/40 rounded-t-lg" />
                      <div className="w-10 h-14 bg-rose-soft/40 rounded-t-lg" />
                      <div className="w-10 h-20 bg-oxblood rounded-t-lg shadow-md" />
                      <div className="w-10 h-24 bg-rose-soft/40 rounded-t-lg" />
                    </div>
                  </div>
                </div>

                {/* Creator features */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-oxblood mb-2">Build Your Creator Legacy</h3>
                    <p className="text-rose-deep font-light">Join the elite network of influencers getting paid fairly for content creation.</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <Sparkles size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">Tailored Matchmaking</h4>
                        <p className="text-sm text-rose-deep font-light">No more cold emails. Brands find you directly based on your content parameters, location, and audience alignment.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <Wallet size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">Escrow Secured Payments</h4>
                        <p className="text-sm text-rose-deep font-light">Get paid fully and on-time. Funds are locked securely in escrow before you shoot and released immediately upon submission approval.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <TrendingUp size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">Advanced Performance Tracking</h4>
                        <p className="text-sm text-rose-deep font-light">A clean growth dashboard mapping your followers, link clicks, brand matching, and ROI to help you negotiate better rates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="brand-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Brand features */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-8 order-2 lg:order-1">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-oxblood mb-2">Drive High-Yield Campaigns</h3>
                    <p className="text-rose-deep font-light">Scale brand exposure using verified influencer talent and precise ROI dashboards.</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <ShieldCheck size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">Verified Creators & Data</h4>
                        <p className="text-sm text-rose-deep font-light">Avoid fake followers and duplicate profiles. Every influencer on RichyReach goes through manual profile verification and metric checks.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <Zap size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">48h Campaign Deployment</h4>
                        <p className="text-sm text-rose-deep font-light">Create a campaign brief, set your budget, and receive qualified match applications immediately. Shortlist and launch inside the app.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-oxblood/5 flex items-center justify-center text-oxblood shrink-0">
                        <TrendingUp size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-oxblood mb-1">Live Multi-Campaign ROI Analytics</h4>
                        <p className="text-sm text-rose-deep font-light">Measure campaign performance in real-time. Track total reach, clicks, cost-per-acquisition, and link click progress on a dashboard.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Card Representation (Brand campaign dashboard) */}
                <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl border border-rose/10">
                    <h4 className="font-sans font-bold text-sm text-oxblood mb-4">Live Campaigns Overview</h4>

                    {/* Campaign row 1 */}
                    <div className="flex items-center gap-3 p-3 bg-cream-lite/45 rounded-2xl border border-oxblood/5 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-oxblood/10 flex items-center justify-center text-oxblood font-bold text-xs">
                        ME
                      </div>
                      <div className="flex-1">
                        <span className="block font-sans font-bold text-xs text-oxblood">Mamaearth Summer Launch</span>
                        <span className="block text-[9px] text-rose">12 Active Creators • Beauty & Wellness</span>
                      </div>
                      <span className="font-sans font-bold text-xs text-green">+3.2x ROI</span>
                    </div>

                    {/* Campaign row 2 */}
                    <div className="flex items-center gap-3 p-3 bg-cream-lite/45 rounded-2xl border border-oxblood/5 mb-5">
                      <div className="w-9 h-9 rounded-xl bg-oxblood/10 flex items-center justify-center text-oxblood font-bold text-xs">
                        CS
                      </div>
                      <div className="flex-1">
                        <span className="block font-sans font-bold text-xs text-oxblood">Campus Sneakers Launch</span>
                        <span className="block text-[9px] text-rose">8 Active Creators • Fashion & Style</span>
                      </div>
                      <span className="font-sans font-bold text-xs text-green">+2.8x ROI</span>
                    </div>

                    {/* ROI Progression indicator */}
                    <div className="bg-[#fbf8f5] rounded-2xl p-4 border border-rose/10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-sans font-semibold text-oxblood">Total Budget Utilization</span>
                        <span className="text-[10px] font-sans font-bold text-oxblood">78%</span>
                      </div>
                      <div className="w-full h-2.5 bg-cream-dark rounded-full overflow-hidden">
                        <div className="h-full bg-oxblood rounded-full" style={{ width: "78%" }} />
                      </div>
                      <div className="flex justify-between mt-3 text-[9px] text-rose">
                        <span>Allocated: ₹5.5L</span>
                        <span>Delivered Reach: 1.2M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* -- App Showcase Section -- */}
      <ShowcaseSection />

      {/* -- Steps Timeline Section -- */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#fbf8f5] to-[#f5eae0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-oxblood mb-4">
              Three Simple Steps to Scale
            </h2>
            <p className="text-base text-rose-deep font-light">
              We&apos;ve stripped away the complexity. No endless negotiations or paper contracts. Just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-oxblood flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-oxblood mb-3">Create Profile</h3>
              <p className="text-sm text-rose-deep leading-relaxed font-light max-w-xs">
                Creators link their social accounts for metric verification. Brands outline their audience demographics and budget guidelines.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-oxblood flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-oxblood mb-3">Secure Matching</h3>
              <p className="text-sm text-rose-deep leading-relaxed font-light max-w-xs">
                Our matching system shortlists candidates instantly. Terms, briefs, and milestones are confirmed directly inside the app.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-oxblood flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-oxblood mb-3">Instant Settlement</h3>
              <p className="text-sm text-rose-deep leading-relaxed font-light max-w-xs">
                Once deliverables are completed and approved by the brand, locked campaign funds release directly to the creator&apos;s bank.
              </p>
            </div>

            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-oxblood/10 -z-0" />
          </div>
        </div>
      </section>

      {/* == Stats Section == */}
      <section id="stats" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 md:p-8 bg-[#fbf8f5] rounded-3xl text-center border border-rose/10 shadow-sm hover:shadow transition-shadow">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood mb-2">2.5M+</span>
              <span className="block text-xs md:text-sm text-rose uppercase tracking-wider font-semibold">Active Creators</span>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-[#fbf8f5] rounded-3xl text-center border border-rose/10 shadow-sm hover:shadow transition-shadow">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood mb-2">₹2.4Cr+</span>
              <span className="block text-xs md:text-sm text-rose uppercase tracking-wider font-semibold">Earnings Paid</span>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-[#fbf8f5] rounded-3xl text-center border border-rose/10 shadow-sm hover:shadow transition-shadow">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood mb-2">4.8x</span>
              <span className="block text-xs md:text-sm text-rose uppercase tracking-wider font-semibold">Avg. Engagement</span>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-[#fbf8f5] rounded-3xl text-center border border-rose/10 shadow-sm hover:shadow transition-shadow">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood mb-2">10K+</span>
              <span className="block text-xs md:text-sm text-rose uppercase tracking-wider font-semibold">Brand Campaigns</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waitlist Section ─────────────────────────────────── */}
      <WaitlistSection />

      {/* ── FAQ Section ────────────────────────────────────── */}
      <section id="faq" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#fbf8f5] to-[#f5eae0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-oxblood mb-4">Frequently Asked Questions</h2>
            <p className="text-base text-rose-deep font-light">Have questions about launching campaigns or getting matched? We have answers.</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-rose/10 overflow-hidden shadow-sm hover:shadow transition-all"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-sans font-bold text-sm md:text-base text-oxblood">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-oxblood shrink-0 ml-4"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-rose-deep leading-relaxed font-light border-t border-rose/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* == Call to Action Section == */}
      <section id="download" className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-oxblood to-oxblood-deep p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Absolute Glowing Blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose/15 rounded-full filter blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-deep/10 rounded-full filter blur-3xl -z-0" />

            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-base text-cream-lite/85 font-light leading-relaxed max-w-xl mb-10">
                Experience smart matching, verified campaigns, secure escrow payments, and live growth analytics. Available on iOS & Android development client builds.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white hover:bg-cream-lite text-oxblood font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer border-none"
                >
                  <Download size={18} />
                  Download iOS App
                </button>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 border border-cream hover:bg-white/5 text-cream font-bold rounded-full shadow transition-all flex items-center justify-center gap-2.5 cursor-pointer bg-transparent"
                >
                  <Download size={18} />
                  Download Android APK
                </button>
              </div>
            </div>

            <div className="w-60 h-60 sm:w-64 sm:h-64 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col items-center justify-center shadow-lg relative z-10 shrink-0">
              {/* Mock QR Code */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-xl p-2 mb-4">
                <div className="w-full h-full relative">
                  {/* Decorative grid pattern mimicking QR */}
                  <div className="absolute inset-0 grid grid-cols-5 gap-1.5 opacity-90">
                    {[...Array(25)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-sm ${(i === 0 || i === 4 || i === 20 || i === 24 || i % 3 === 0) ? 'bg-oxblood' : 'bg-transparent'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="font-sans font-bold text-xs text-cream uppercase tracking-wide text-center">Scan to Register</span>
            </div>
          </div>
        </div>
      </section>

      {/* == Footer == */}
      <footer className="bg-oxblood-deep text-cream-lite/80 border-t border-rose/10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image src="/richyreach-logo.png" alt="RichyReach Logo" fill className="object-cover" />
              </div>
              <span className="font-serif font-bold text-lg text-cream">RichyReach</span>
            </div>
            <p className="text-xs text-cream-lite/70 leading-relaxed font-light">
              Connect premium content creators with fast-growing brands. Escrow payouts, verified engagement, smart AI matching.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-sans font-bold text-xs text-cream uppercase tracking-wider mb-4">For Creators</h4>
            <div className="flex flex-col gap-3 text-xs font-light">
              <a href="#showcase" className="hover:text-white transition-colors">Start Matching</a>
              <a href="#features" className="hover:text-white transition-colors">Creator Benefits</a>
              <a href="#download" className="hover:text-white transition-colors">Get Paid Safely</a>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-sans font-bold text-xs text-cream uppercase tracking-wider mb-4">For Brands</h4>
            <div className="flex flex-col gap-3 text-xs font-light">
              <a href="#features" className="hover:text-white transition-colors">Brand Dashboard</a>
              <a href="#stats" className="hover:text-white transition-colors">ROI Analytics</a>
              <a href="#faq" className="hover:text-white transition-colors">Campaign Rules</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs text-cream uppercase tracking-wider mb-4">Support</h4>
            <div className="flex flex-col gap-3 text-xs font-light">
              <span>support@richyreach.com</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        <hr className="border-rose/10 mb-8" />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-lite/50 font-light">
          <div>
            <span>&copy; {new Date().getFullYear()} RichyReach Platform. All rights reserved.</span>
            <span className="block sm:inline sm:ml-4 text-cream-lite/40 font-medium">Powered by MagicWebs Technologies Pvt Ltd.</span>
          </div>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </span>
        </div>
      </footer>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

// Inline fallback for MaterialIcons so we don't need external libraries in CSS/HTML render
function MaterialIcons({ name, size, color, className }: { name: string; size: number; color?: string; className?: string }) {
  if (name === "verified") {
    return (
      <span className={className}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color || "currentColor"}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </span>
    );
  }
  return null;
}

// Fallback Colors token helper for local reference
const Colors = {
  oxblood: "#3f030b",
  rose: "#b46a74",
  green: "#2a7a5a"
};
