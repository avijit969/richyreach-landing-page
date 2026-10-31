/** Site-wide facts shared by metadata, the sitemap, the manifest and structured data. */

// Set NEXT_PUBLIC_SITE_URL in the deploy environment if the site moves (e.g. to a www host).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://richyreach.com").replace(/\/$/, "");

export const SITE_NAME = "RichyReach";

export const SITE_TAGLINE = "Where creators get rich and brands get reach";

export const SITE_DESCRIPTION =
  "RichyReach is the influencer marketing app for India. Creators find paid brand campaigns, sell services and join reel and Google review contests; brands find verified creators and pay only when the work is approved.";

export const SITE_KEYWORDS = [
  "influencer marketing app",
  "influencer marketing India",
  "creator marketplace",
  "brand collaborations",
  "paid collabs for creators",
  "UGC creators India",
  "Instagram influencers",
  "reel contest",
  "Google review campaign",
  "Instagram comment to DM automation",
  "creator payouts UPI",
  "RichyReach",
];

export const ANDROID_PACKAGE = "com.richyreach.app";

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export const WEB_APP_URL = "https://app.richyreach.com";

export const SUPPORT_EMAIL = "support@richyreach.com";

export const COMPANY_NAME = "MagicWebs Technologies Pvt Ltd";

export const THEME_COLOR = "#3f030b";
