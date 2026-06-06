import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RichyReach — Influencer Marketing Platform",
  description: "The premier portal where creators get Rich and brands get Reach. Seamless campaigns, verified engagement, smart AI matching, and instant secure payments.",
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
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf8f5] text-[#2a0207] selection:bg-[#3f030b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
