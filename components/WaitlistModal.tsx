"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Prefills the email field. */
  initialEmail?: string;
}

const API = "https://backend-api.richyreach.com/api/waitlist";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] text-ink placeholder:text-faint outline-none focus:border-ink transition-colors";

export default function WaitlistModal({ isOpen, onClose, initialEmail = "" }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [role, setRole] = useState<"creator" | "brand">("creator");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    fetch(`${API}/count`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && typeof json.data?.count === "number") setCount(json.data.count);
      })
      .catch((err) => console.error("Failed to fetch waitlist count:", err));
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(`${API}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.toLowerCase().trim(), role }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to join waitlist. Please try again.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after the exit animation so the form doesn't visibly clear while closing.
    setTimeout(() => {
      setName("");
      setEmail(initialEmail);
      setRole("creator");
      setSubmitted(false);
      setErrorMessage("");
      setIsLoading(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative z-10 w-full max-w-[440px] rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-2xl"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-ink hover:bg-sand cursor-pointer" aria-label="Close">
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <span className="mx-auto w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center">
                  <Check size={22} />
                </span>
                <h2 id="waitlist-title" className="mt-5 text-[24px] tracking-[-0.02em]">
                  You&apos;re on the list
                </h2>
                <p className="mt-2 text-[15px] text-muted">We&apos;ll email {email.trim()} as soon as the iOS app is on the App Store.</p>
                <button onClick={handleClose} className="mt-7 rounded-full bg-ink text-white font-medium px-6 py-3 text-[15px] cursor-pointer">
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2 id="waitlist-title" className="text-[24px] tracking-[-0.02em]">
                  Join the iOS waitlist
                </h2>
                <p className="mt-2 text-[15px] text-muted">
                  {count !== null && count >= 100 ? `${count.toLocaleString("en-IN")} people are already in line.` : "RichyReach is live on Android. Leave your details and we'll tell you when it lands on iPhone."}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <div className="grid grid-cols-2 gap-1 rounded-full bg-sand p-1">
                    {(["creator", "brand"] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`rounded-full py-2 text-[14px] transition-colors cursor-pointer ${role === r ? "bg-white text-ink shadow-sm" : "text-muted"}`}
                      >
                        I&apos;m a {r}
                      </button>
                    ))}
                  </div>
                  <input className={field} placeholder={role === "brand" ? "Brand or business name" : "Your name"} value={name} onChange={(e) => setName(e.target.value)} required aria-label="Name" />
                  <input className={field} type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label="Email address" />
                  {errorMessage && <p className="text-[14px] text-[#b42318]">{errorMessage}</p>}
                  <button type="submit" disabled={isLoading} className="w-full rounded-full bg-ink text-white font-medium py-3.5 text-[15px] hover:bg-oxblood transition-colors disabled:opacity-60 cursor-pointer">
                    {isLoading ? "Joining…" : "Join the waitlist"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
