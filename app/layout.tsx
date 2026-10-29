import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RichyReach — Where creators get rich and brands get reach",
  description:
    "RichyReach is the app where Indian creators find paid brand work and brands launch campaigns, reel contests and Google review drives, with payments held safely until the work is approved.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-oxblood selection:text-white">
        <SmoothScroll>
          <div className="flex flex-col min-h-full">{children}</div>
        </SmoothScroll>

        <Script
          src="https://bot.magicwebs.ai/widget/apre1bj25dp76cw9rb93drzicvro/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
