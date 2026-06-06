import Link from "next/link";
import Image from "next/image";
import WaitlistSection from "@/components/WaitlistSection";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf8f5] text-[#2a0207]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#fbf8f5]/85 border-b border-rose/10 px-6 py-4 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src="/richyreach-logo.png" alt="RichyReach Logo" fill className="object-cover" />
            </div>
            <span className="font-serif font-bold text-lg text-oxblood">RichyReach</span>
          </Link>
          <Link href="/" className="text-xs font-semibold text-rose-deep hover:text-oxblood transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 pt-32 pb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-rose/10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-oxblood mb-2">Privacy Policy</h1>
          <p className="text-xs text-rose mb-8">Last Updated: June 6, 2026</p>

          <div className="space-y-6 text-sm leading-relaxed text-rose-deep font-light">
            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when registering accounts, filling profile details, and linking social media handles (including follower counts, reach figures, and engagement rates). We also collect transaction records, messaging history, and payment details.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">2. How We Use Your Information</h2>
              <p>
                We use the collected data to verify profiles, calculate matching compatibility metrics, facilitate direct campaign messaging, manage escrow funds, prevent fraudulent activity, and continuously improve platform performance.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">3. Information Sharing & Disclosure</h2>
              <p>
                We do not sell your personal data. We share creator metrics and linked social statistics with brands on the marketplace to assist with match targeting. Payment data is securely routed via licensed payment processors.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">4. Data Security</h2>
              <p>
                We implement strict security measures (including secure store tokens, database encryption, and HTTPS network transfers) to safeguard user records. However, no data transmission over the internet is completely bulletproof, and users accept this inherent risk.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">5. User Control & Data Deletion</h2>
              <p>
                Users can edit their profiles or unlink social accounts at any time. To completely delete your RichyReach account and wipe your transaction/metric records, contact our privacy team at support@richyreach.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Footer */}
      <footer className="bg-oxblood-deep text-cream-lite/80 border-t border-rose/10 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>
            <span>&copy; {new Date().getFullYear()} RichyReach Platform. All rights reserved.</span>
            <span className="block sm:inline sm:ml-4 text-cream-lite/40 font-medium">Powered by MagicWebs Technologies Pvt Ltd.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
