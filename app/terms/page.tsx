import type { Metadata } from "next";
import LegalPage from "@/components/landing/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that apply when creators and brands use the RichyReach app and website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 6, 2026">
      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          Welcome to RichyReach, a brand owned and operated by MagicWebs Technologies Pvt Ltd. By accessing or using our mobile application and landing page website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the services.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          RichyReach is a digital matching portal that connects content creators (Influencers) with businesses (Brands) for marketing collaborations. RichyReach provides escrow settlement, campaign analytics, and communication tools.
        </p>
      </section>

      <section>
        <h2>3. User Accounts & Verification</h2>
        <p>
          Both creators and brands must register for accounts. Creators must verify their social media metrics. You agree to provide accurate, current, and complete information. RichyReach reserves the right to suspend accounts with fraudulent followers or misleading metrics.
        </p>
      </section>

      <section>
        <h2>4. Escrow and Payment Terms</h2>
        <p>
          Brands agree to fund campaign budgets in advance. These funds are held in secure escrow. Once a creator completes the agreed deliverables and the brand verifies completion, the escrow release is triggered. Creators are responsible for any applicable local taxes on earnings.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          Creators retain the copyright to their raw content. However, brands receive usage rights as outlined in individual campaign agreements. The RichyReach logo, seal monogram, and user interface designs are the exclusive property of the platform.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          RichyReach is a marketplace coordinator. We are not liable for dispute outcomes between brands and creators, content quality issues, or campaign performance metrics. Use of the platform is at your own discretion.
        </p>
      </section>
    </LegalPage>
  );
}
