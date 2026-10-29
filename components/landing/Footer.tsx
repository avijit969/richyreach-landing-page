import Link from "next/link";
import { PLAY_STORE_URL } from "./links";
import { Logo } from "./ui";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#arena", label: "Arena" },
      { href: "/#how", label: "How it works" },
      { href: "/#faq", label: "FAQ" },
      { href: PLAY_STORE_URL, label: "Google Play" },
    ],
  },
  {
    title: "For",
    links: [
      { href: "/#who", label: "Creators" },
      { href: "/#who", label: "Brands" },
      { href: "/#who", label: "Local businesses" },
      { href: "/#features", label: "Instagram sellers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/refund", label: "Refund Policy" },
      { href: "/child-safety", label: "Child Safety Policy" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "mailto:support@richyreach.com", label: "Contact" },
      { href: "mailto:support@richyreach.com", label: "support@richyreach.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6 py-16 grid grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-[260px] text-[14px] leading-relaxed text-muted">Where creators get rich and brands get reach.</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">{col.title}</p>
            <ul className="mt-5 space-y-3.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link href={l.href} className="text-[15px] hover:text-oxblood transition-colors">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-[15px] hover:text-oxblood transition-colors break-all">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="py-6 border-t border-line flex flex-col sm:flex-row gap-2 justify-between font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
          <span>© {new Date().getFullYear()} MagicWebs Technologies Pvt Ltd</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}
