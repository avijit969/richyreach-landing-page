import type { Metadata } from "next";
import LegalPage from "@/components/landing/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Child Safety Policy",
  description: "RichyReach's zero-tolerance policy on child sexual abuse and exploitation, and how to report a concern.",
  path: "/child-safety",
});

export default function ChildSafetyPage() {
  return (
    <LegalPage title="Child Safety Standards & Anti-CSAE Policy" updated="August 2026">
      <p className="lead">
        RichyReach (a brand owned and operated by MagicWebs Technologies Pvt Ltd) is committed to maintaining a safe digital environment for all content creators, influencers, and brand partners. We enforce a zero-tolerance policy against Child Sexual Abuse Material (CSAM) and Child Sexual Exploitation and Abuse (CSAE).
      </p>

      <section>
        <h2>
          1. Zero-Tolerance Policy Against CSAE & CSAM
        </h2>
        <p>
          RichyReach strictly prohibits the creation, uploading, sharing, distribution, or solicitation of Child Sexual Abuse Material (CSAM) or Child Sexual Exploitation and Abuse (CSAE) anywhere within our mobile app, services, and web platform. Any account found attempting to share or promote such illegal content will be permanently banned immediately, and all relevant details will be reported to appropriate law enforcement authorities.
        </p>
      </section>

      <section>
        <h2>
          2. User Guidelines & Age Restrictions
        </h2>
        <p>
          Users must be at least 18 years of age (or have express consent from a parent or legal guardian) to register and use RichyReach. We do not knowingly collect personal information from children under the age of 13, and our platform is designed strictly for professional creator and brand marketing collaborations.
        </p>
      </section>

      <section>
        <h2>
          3. Content Moderation & Reporting Mechanisms
        </h2>
        <p>
          We employ proactive and reactive measures to enforce community safety:
        </p>
        <ul>
          <li><strong>In-App Reporting:</strong> Users can flag profiles, campaign briefs, media previews, or chat messages directly inside the app for immediate review by our trust & safety team.</li>
          <li><strong>Moderation Escalation:</strong> Reported safety violations involving child safety are prioritized and reviewed urgently within 24 hours.</li>
          <li><strong>Content Removal & Banning:</strong> Content violating safety standards is removed immediately, and violating accounts are permanently disabled.</li>
        </ul>
      </section>

      <section>
        <h2>
          4. Dedicated Safety Contact Information
        </h2>
        <p>
          If you encounter any content or behavior on RichyReach that you believe violates our child safety standards or involves child exploitation, please report it immediately to our dedicated safety contact:
        </p>
        <div className="callout">
          <p className="callout-label">Safety & Compliance Desk</p>
          <p>
            Email: <a href="mailto:support@richyreach.com">support@richyreach.com</a> / <a href="mailto:safety@richyreach.com">safety@richyreach.com</a>
          </p>
          <p className="callout-note">Company: MagicWebs Technologies Pvt Ltd</p>
        </div>
      </section>

      <section>
        <h2>
          5. Law Enforcement & Mandatory Reporting
        </h2>
        <p>
          RichyReach fully cooperates with global law enforcement agencies and statutory child protection organizations. When required by applicable law, we submit mandatory reports to the National Center for Missing & Exploited Children (NCMEC) and local law enforcement authorities.
        </p>
      </section>
    </LegalPage>
  );
}
