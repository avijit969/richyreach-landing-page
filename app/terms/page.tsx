import Link from "next/link";
import Image from "next/image";
import WaitlistSection from "@/components/WaitlistSection";

export default function TermsPage() {
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
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-oxblood mb-2">Terms of Service</h1>
          <p className="text-xs text-rose mb-8">Last Updated: June 6, 2026</p>

          <div className="space-y-6 text-sm leading-relaxed text-rose-deep font-light">
            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">1. Agreement to Terms</h2>
              <p>
                Welcome to RichyReach, a brand owned and operated by MagicWebs Technologies Pvt Ltd. By accessing or using our mobile application and landing page website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the services.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">2. Description of Service</h2>
              <p>
                RichyReach is a digital matching portal that connects content creators (Influencers) with businesses (Brands) for marketing collaborations. RichyReach provides escrow settlement, campaign analytics, and communication tools.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">3. User Accounts & Verification</h2>
              <p>
                Both creators and brands must register for accounts. Creators must verify their social media metrics. You agree to provide accurate, current, and complete information. RichyReach reserves the right to suspend accounts with fraudulent followers or misleading metrics.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">4. Escrow and Payment Terms</h2>
              <p>
                Brands agree to fund campaign budgets in advance. These funds are held in secure escrow. Once a creator completes the agreed deliverables and the brand verifies completion, the escrow release is triggered. Creators are responsible for any applicable local taxes on earnings.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">5. Intellectual Property</h2>
              <p>
                Creators retain the copyright to their raw content. However, brands receive usage rights as outlined in individual campaign agreements. The RichyReach logo, seal monogram, and user interface designs are the exclusive property of the platform.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">6. Limitation of Liability</h2>
              <p>
                RichyReach is a marketplace coordinator. We are not liable for dispute outcomes between brands and creators, content quality issues, or campaign performance metrics. Use of the platform is at your own discretion.
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
            <span className="block sm:inline sm:ml-4 text-cream-lite/40 font-medium">RichyReach is a brand of MagicWebs Technologies Pvt Ltd.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/child-safety" className="hover:text-white transition-colors">Child Safety</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
