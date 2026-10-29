import Footer from "./Footer";
import Nav from "./Nav";
import { PlayStoreButton } from "./ui";

/** Shell for the policy pages: the landing nav and footer around a single readable column. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col">
      <Nav />
      <main className="flex-1 px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <article className="max-w-[720px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Legal</p>
          <h1 className="mt-5 text-[36px] md:text-[44px] leading-[1.12] tracking-[-0.025em]">{title}</h1>
          <p className="mt-4 text-[15px] text-muted">Last updated {updated}</p>
          <div className="legal mt-12 pt-10 border-t border-line">{children}</div>
        </article>
      </main>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-[1272px] mx-auto rounded-[28px] bg-sand px-6 py-14 text-center">
          <h2 className="text-[26px] md:text-[30px] tracking-[-0.02em]">Where creators get rich and brands get reach</h2>
          <p className="mt-3 text-[16px] text-muted">RichyReach is live on Android. iOS is coming soon.</p>
          <div className="mt-8 flex justify-center">
            <PlayStoreButton size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
