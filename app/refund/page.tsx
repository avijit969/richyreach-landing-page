import type { Metadata } from "next";
import LegalPage from "@/components/landing/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description: "When and how RichyReach refunds campaign payments to brands and creators.",
  path: "/refund",
});

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="June 6, 2026">
      <p className="lead">
        RichyReach is a brand owned and operated by MagicWebs Technologies Pvt Ltd.
      </p>
      <section>
        <h2>1. Escrow Funding and Campaign Cancellations</h2>
        <p>
          When a Brand launches a campaign and allocates budget, the funds are held securely in the RichyReach Escrow account. 
          If a campaign is cancelled by the Brand before any creator accepts the brief or begins work, the Brand is entitled to a 100% refund of the escrowed amount (minus standard transaction/payment gateway fees).
        </p>
      </section>

      <section>
        <h2>2. Active Campaign Cancellations</h2>
        <p>
          Once a creator has accepted a campaign brief and committed to work, the escrow funds are locked. 
          If a Brand chooses to cancel the campaign mid-progress without cause, the creator is entitled to a partial payout (pro-rata based on milestones achieved), and the remainder will be refunded to the Brand.
        </p>
      </section>

      <section>
        <h2>3. Dispute Resolution</h2>
        <p>
          If a creator fails to submit the agreed deliverables or submits content that does not meet the brief guidelines, the Brand can raise a dispute. 
          RichyReach moderators will review the submission against the agreed campaign brief. 
          If the dispute is decided in favor of the Brand, the locked escrow funds will be fully refunded to the Brand.
        </p>
      </section>

      <section>
        <h2>4. Processing of Refunds</h2>
        <p>
          Approved refunds are processed back to the original payment method (Bank account, Credit Card, or UPI) within 5 to 7 business days from the resolution date.
        </p>
      </section>
    </LegalPage>
  );
}
