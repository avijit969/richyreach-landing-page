"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  // Waitlist States
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistRole, setWaitlistRole] = useState<"creator" | "brand">("creator");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistName, setWaitlistName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  // Fetch count on modal open
  useEffect(() => {
    if (isOpen) {
      fetch("https://backend-api.richyreach.com/api/waitlist/count")
        .then((res) => res.json())
        .then((json) => {
          if (json.success && typeof json.data?.count === "number") {
            setWaitlistCount(json.data.count);
          }
        })
        .catch((err) => console.error("Failed to fetch waitlist count:", err));
    }
  }, [isOpen]);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim() || !waitlistName.trim()) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("https://backend-api.richyreach.com/api/waitlist/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: waitlistName.trim(),
          email: waitlistEmail.toLowerCase().trim(),
          role: waitlistRole,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to join waitlist. Please try again.");
      }

      setWaitlistSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setWaitlistEmail("");
    setWaitlistName("");
    setWaitlistRole("creator");
    setWaitlistSubmitted(false);
    setErrorMessage("");
    setIsLoading(false);
  };

  const handleClose = () => {
    onClose();
    // Reset form after exit animation duration
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#2a0207]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-3xl border border-rose/10 shadow-2xl w-full max-w-lg relative overflow-hidden z-10"
          >
            {/* Glow background circles inside modal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose/5 rounded-full filter blur-2xl -z-10" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-rose-deep hover:text-oxblood hover:bg-rose/5 rounded-full transition-all cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-oxblood/5 rounded-full mb-4 border border-oxblood/10">
                  <Sparkles size={13} className="text-oxblood" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-oxblood">Early Access Waitlist</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-oxblood mb-2">
                  Join RichyReach
                </h3>
                <p className="text-xs text-rose-deep max-w-sm mx-auto font-light leading-relaxed">
                  Register early to secure your matching quota and multiply your brand reach or creator income.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!waitlistSubmitted ? (
                  <motion.form
                    key="modal-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleJoinWaitlist}
                    className="flex flex-col gap-4 text-left"
                  >
                    {/* Name Input */}
                    <div>
                      <label className="block text-[10px] font-bold text-oxblood uppercase tracking-wide mb-1.5 ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        disabled={isLoading}
                        placeholder="Enter your name"
                        value={waitlistName}
                        onChange={(e) => setWaitlistName(e.target.value)}
                        className="w-full bg-[#fbf8f5] border border-rose/15 rounded-xl px-4 py-3 text-sm font-medium text-oxblood focus:outline-none focus:border-oxblood shadow-sm transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-[10px] font-bold text-oxblood uppercase tracking-wide mb-1.5 ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        disabled={isLoading}
                        placeholder="Enter your email"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        className="w-full bg-[#fbf8f5] border border-rose/15 rounded-xl px-4 py-3 text-sm font-medium text-oxblood focus:outline-none focus:border-oxblood shadow-sm transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Role Selector */}
                    <div>
                      <label className="block text-[10px] font-bold text-oxblood uppercase tracking-wide mb-2 ml-1">Select Your Role</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => setWaitlistRole("creator")}
                          className={`py-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-60 ${waitlistRole === "creator"
                            ? "bg-oxblood text-white border-oxblood shadow-sm"
                            : "bg-[#fbf8f5] text-rose-deep border-rose/15 hover:bg-rose/5"
                            }`}
                        >
                          <Sparkles size={14} />
                          Creator
                        </button>
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => setWaitlistRole("brand")}
                          className={`py-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-60 ${waitlistRole === "brand"
                            ? "bg-oxblood text-white border-oxblood shadow-sm"
                            : "bg-[#fbf8f5] text-rose-deep border-rose/15 hover:bg-rose/5"
                            }`}
                        >
                          <Briefcase size={14} />
                          Brand
                        </button>
                      </div>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                      <div className="text-xs font-semibold text-rose-deep bg-oxblood/5 border border-rose/10 p-3 rounded-xl text-center">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 bg-oxblood hover:bg-oxblood-deep text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? "Joining..." : "Join the Waitlist"}
                      {!isLoading && <ArrowRight size={16} />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="modal-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-oxblood text-white rounded-2xl p-6 border border-oxblood-deep shadow-xl flex flex-col items-center gap-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-inner">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-cream mb-1.5">You&apos;re on the list!</h4>
                      <p className="text-xs text-cream-lite/80 font-light leading-relaxed max-w-xs mx-auto">
                        Reserved your early access pass as a <span className="font-bold text-cream capitalize">{waitlistRole}</span>. We will notify you at <span className="font-bold text-cream">{waitlistEmail}</span> as soon as your cohort launches!
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="mt-2 px-6 py-2 bg-white text-oxblood font-bold text-xs rounded-full hover:bg-cream transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Proof Progress Info */}
              <div className="mt-6 pt-4 border-t border-rose/5 flex flex-col items-center gap-2 text-center">
                <span className="text-[10px] text-rose-deep font-semibold">
                  Currently in waitlist queue: <span className="text-oxblood font-bold">{waitlistCount !== null ? (1900 + (waitlistCount)).toLocaleString() : "......"} creators & brands</span>
                </span>
                <div className="w-48 h-1.5 bg-cream-dark rounded-full overflow-hidden">
                  <div className="h-full bg-oxblood rounded-full animate-pulse animate-duration-2000" style={{ width: "89%" }} />
                </div>
                <span className="text-[9px] text-rose font-medium uppercase tracking-wide">89% of spots claimed</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
