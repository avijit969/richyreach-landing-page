import type { MetadataRoute } from "next";
import { ANDROID_PACKAGE, PLAY_STORE_URL, SITE_DESCRIPTION, SITE_NAME, THEME_COLOR } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: THEME_COLOR,
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
    // Lets Android Chrome offer the native app instead of installing the site.
    related_applications: [{ platform: "play", url: PLAY_STORE_URL, id: ANDROID_PACKAGE }],
    prefer_related_applications: true,
  };
}
