import Link from "next/link";
import Image from "next/image";
import WaitlistSection from "@/components/WaitlistSection";

export default function ChildSafetyPage() {
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
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-oxblood mb-2">
            Child Safety Standards & Anti-CSAE Policy
          </h1>
          <p className="text-xs text-rose mb-8">Last Updated: August 2026</p>

          <div className="space-y-6 text-sm leading-relaxed text-rose-deep font-light">
            <p className="font-medium text-oxblood">
              RichyReach (a brand owned and operated by MagicWebs Technologies Pvt Ltd) is committed to maintaining a safe digital environment for all content creators, influencers, and brand partners. We enforce a zero-tolerance policy against Child Sexual Abuse Material (CSAM) and Child Sexual Exploitation and Abuse (CSAE).
            </p>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">
                1. Zero-Tolerance Policy Against CSAE & CSAM
              </h2>
              <p>
                RichyReach strictly prohibits the creation, uploading, sharing, distribution, or solicitation of Child Sexual Abuse Material (CSAM) or Child Sexual Exploitation and Abuse (CSAE) anywhere within our mobile app, services, and web platform. Any account found attempting to share or promote such illegal content will be permanently banned immediately, and all relevant details will be reported to appropriate law enforcement authorities.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">
                2. User Guidelines & Age Restrictions
              </h2>
              <p>
                Users must be at least 18 years of age (or have express consent from a parent or legal guardian) to register and use RichyReach. We do not knowingly collect personal information from children under the age of 13, and our platform is designed strictly for professional creator and brand marketing collaborations.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">
                3. Content Moderation & Reporting Mechanisms
              </h2>
              <p>
                We employ proactive and reactive measures to enforce community safety:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>In-App Reporting:</strong> Users can flag profiles, campaign briefs, media previews, or chat messages directly inside the app for immediate review by our trust & safety team.</li>
                <li><strong>Moderation Escalation:</strong> Reported safety violations involving child safety are prioritized and reviewed urgently within 24 hours.</li>
                <li><strong>Content Removal & Banning:</strong> Content violating safety standards is removed immediately, and violating accounts are permanently disabled.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">
                4. Dedicated Safety Contact Information
              </h2>
              <p>
                If you encounter any content or behavior on RichyReach that you believe violates our child safety standards or involves child exploitation, please report it immediately to our dedicated safety contact:
              </p>
              <div className="bg-[#fbf8f5] rounded-xl p-4 mt-3 border border-rose/10 font-sans">
                <p className="font-medium text-oxblood text-xs uppercase tracking-wider mb-1">Safety & Compliance Desk</p>
                <p className="text-sm">
                  Email: <a href="mailto:support@richyreach.com" className="font-semibold text-oxblood underline">support@richyreach.com</a> / <a href="mailto:safety@richyreach.com" className="font-semibold text-oxblood underline">safety@richyreach.com</a>
                </p>
                <p className="text-xs text-rose-deep mt-1">Company: MagicWebs Technologies Pvt Ltd</p>
              </div>
            </section>

            <section>
              <h2 className="font-sans font-bold text-base text-oxblood mb-2">
                5. Law Enforcement & Mandatory Reporting
              </h2>
              <p>
                RichyReach fully cooperates with global law enforcement agencies and statutory child protection organizations. When required by applicable law, we submit mandatory reports to the National Center for Missing & Exploited Children (NCMEC) and local law enforcement authorities.
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
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/child-safety" className="hover:text-white transition-colors">Child Safety</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
