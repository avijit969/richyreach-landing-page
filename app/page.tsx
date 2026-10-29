import HomePage from "@/components/landing/HomePage";
import { FAQS } from "@/components/landing/faq-data";
import {
  ANDROID_PACKAGE,
  COMPANY_NAME,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

/** Structured data for search engines: who runs the site, what the app is, and the FAQ. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/richyreach-logo.png`,
      email: SUPPORT_EMAIL,
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: SUPPORT_EMAIL, areaServed: "IN" },
      sameAs: [PLAY_STORE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      operatingSystem: "ANDROID",
      applicationCategory: "BusinessApplication",
      installUrl: PLAY_STORE_URL,
      downloadUrl: PLAY_STORE_URL,
      identifier: ANDROID_PACKAGE,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so no string in the payload can close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <HomePage />
    </>
  );
}
