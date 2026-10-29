import type { Metadata } from "next";
import LegalPage from "@/components/landing/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How RichyReach collects, uses and protects the data of creators and brands.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 6, 2026">
      <p className="lead">
        RichyReach is a brand owned and operated by MagicWebs Technologies Pvt Ltd.
      </p>
      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when registering accounts, filling profile details, and linking social media handles (including follower counts, reach figures, and engagement rates). We also collect transaction records, messaging history, and payment details.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the collected data to verify profiles, calculate matching compatibility metrics, facilitate direct campaign messaging, manage escrow funds, prevent fraudulent activity, and continuously improve platform performance.
        </p>
      </section>

      <section>
        <h2>3. Information Sharing & Disclosure</h2>
        <p>
          We do not sell your personal data. We share creator metrics and linked social statistics with brands on the marketplace to assist with match targeting. Payment data is securely routed via licensed payment processors.
        </p>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement strict security measures (including secure store tokens, database encryption, and HTTPS network transfers) to safeguard user records. However, no data transmission over the internet is completely bulletproof, and users accept this inherent risk.
        </p>
      </section>

      <section>
        <h2>5. User Control & Data Deletion</h2>
        <p>
          Users can edit their profiles or unlink social accounts at any time. To completely delete your RichyReach account and wipe your transaction/metric records, contact our privacy team at support@richyreach.com.
        </p>
      </section>
    </LegalPage>
  );
}
