import { ArrowUpRight, Check, FileText, Lock, Wallet } from "lucide-react";
import { Reveal } from "./ui";

function Card({ title, body, children, delay }: { title: string; body: string; children: React.ReactNode; delay: number }) {
  return (
    <Reveal delay={delay} className="rounded-3xl border border-line p-3 flex flex-col sm:last:col-span-2 lg:last:col-span-1">
      <div className="px-4 pt-4 pb-6">
        <h3 className="text-[17px] font-medium">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
      </div>
      <div className="mt-auto rounded-2xl bg-sand p-4 sm:p-5 min-h-[260px] flex items-center">
        <div className="w-full rounded-2xl border border-line bg-white">{children}</div>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-32 scroll-mt-16">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">
            Money only moves when the work is done
            <br />
            <span className="text-faint">Both sides stay protected</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            delay={0}
            title="The brand sends a brief"
            body="Deliverables, deadline and fee in one card. The creator accepts, declines or replies with questions."
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line text-[14px] font-medium">
              <FileText size={15} /> Campaign invite
            </div>
            <div className="p-4">
              <p className="text-[14px]">Festive lookbook · 2 reels</p>
              <p className="mt-1 text-[13px] text-muted">Due 12 Nov · ₹12,000</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <span className="rounded-full bg-ink text-white text-center text-[13px] font-medium py-2">Accept</span>
                <span className="rounded-full bg-sand text-center text-[13px] font-medium py-2">Decline</span>
              </div>
            </div>
          </Card>

          <Card
            delay={0.08}
            title="The budget is held safely"
            body="The fee is set aside before shooting starts, so the creator knows the money exists."
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line text-[14px] font-medium">
              <Lock size={15} /> Payment secured
            </div>
            <div className="p-4">
              <p className="text-[28px] tracking-tight">₹12,000</p>
              <p className="mt-1 text-[13px] text-muted">Held until the brand approves the reels</p>
              <div className="mt-4 h-1.5 rounded-full bg-sand overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-rose" />
              </div>
              <p className="mt-2 text-[12px] text-muted">1 of 2 reels approved</p>
            </div>
          </Card>

          <Card
            delay={0.16}
            title="Approve, and it's paid"
            body="Once the brand approves, the fee lands in the creator's wallet, ready to withdraw."
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line text-[14px] font-medium">
              <Wallet size={15} /> Wallet
            </div>
            <div className="p-4 space-y-2.5">
              <div className="flex items-center gap-3 rounded-xl bg-sand px-3 py-2.5">
                <Check size={15} className="text-green" />
                <span className="flex-1 text-[13px]">Festive lookbook</span>
                <span className="text-[13px] font-medium text-green">+₹12,000</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-sand px-3 py-2.5">
                <ArrowUpRight size={15} />
                <span className="flex-1 text-[13px]">Withdrawn to UPI</span>
                <span className="text-[13px] text-muted">−₹10,000</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
