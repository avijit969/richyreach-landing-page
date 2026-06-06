import Link from "next/link";
import Image from "next/image";
import WaitlistSection from "@/components/WaitlistSection";

export default function RefundPage() {
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
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-oxblood mb-2">Refund Policy</h1>
          <p className="text-xs text-rose mb-8">Last Updated: June 6, 2026</p>

          <div className="space-y-6 text-sm leading-relaxed text-rose-deep font-light">
            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">1. Escrow Funding and Campaign Cancellations</h2>
              <p>
                When a Brand launches a campaign and allocates budget, the funds are held securely in the RichyReach Escrow account. 
                If a campaign is cancelled by the Brand before any creator accepts the brief or begins work, the Brand is entitled to a 100% refund of the escrowed amount (minus standard transaction/payment gateway fees).
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">2. Active Campaign Cancellations</h2>
              <p>
                Once a creator has accepted a campaign brief and committed to work, the escrow funds are locked. 
                If a Brand chooses to cancel the campaign mid-progress without cause, the creator is entitled to a partial payout (pro-rata based on milestones achieved), and the remainder will be refunded to the Brand.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">3. Dispute Resolution</h2>
              <p>
                If a creator fails to submit the agreed deliverables or submits content that does not meet the brief guidelines, the Brand can raise a dispute. 
                RichyReach moderators will review the submission against the agreed campaign brief. 
                If the dispute is decided in favor of the Brand, the locked escrow funds will be fully refunded to the Brand.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">4. Processing of Refunds</h2>
              <p>
                Approved refunds are processed back to the original payment method (Bank account, Credit Card, or UPI) within 5 to 7 business days from the resolution date.
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
