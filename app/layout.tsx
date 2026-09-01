import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RichyReach — Influencer Marketing Platform",
  description: "Connect creators and brands for influencer marketing collaborations, seamless campaigns, verified engagement, smart AI matching, and secure payments.",
  icons: {
    icon: "/richyreach-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf8f5] text-[#2a0207] selection:bg-[#3f030b] selection:text-white relative">
        {/* Modern Background Grid Layers */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-grid-mask opacity-70" />
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid-glow bg-grid-mask opacity-40 mix-blend-overlay" />
        
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-full">
            {children}
          </div>
        </SmoothScroll>

        <Script
          src="https://bot.magicwebs.ai/widget/apre1bj25dp76cw9rb93drzicvro/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
