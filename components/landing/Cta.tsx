import Image from "next/image";
import { Phone, PlayStoreButton, Reveal } from "./ui";

export default function Cta({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <Reveal className="relative rounded-[28px] bg-sand overflow-hidden">
          <div className="text-center pt-14 px-6">
            <h2 className="text-[32px] md:text-[34px] leading-[1.18] tracking-[-0.02em]">Your next collab is one tap away</h2>
            <p className="mt-4 text-[17px] text-muted">Join early access and be first in when your city opens.</p>
          </div>

          {/* Phones run off the bottom edge of the panel on purpose. */}
          <div className="mt-12 h-[400px] md:h-[460px] overflow-hidden flex justify-center items-start gap-6">
            <Phone src="/richyreach-app-ui/brand-arena.png" alt="RichyReach brand arena manager screen" className="hidden md:block w-[250px] mt-14" />
            <Phone src="/richyreach-app-ui/brand-home.png" alt="RichyReach brand dashboard screen" className="w-[250px] md:w-[280px]" />
          </div>

          <div className="m-4 md:m-0 md:absolute md:left-6 md:bottom-6 md:w-[290px] rounded-3xl border border-line bg-white p-5 shadow-[0_20px_50px_-20px_rgba(29,21,23,0.25)]">
            <span className="relative block w-9 h-9 rounded-full overflow-hidden">
              <Image src="/richyreach-logo.png" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <p className="mt-4 text-[16px] font-medium">Available on Android</p>
            <p className="mt-1 text-[14px] text-muted">iOS is coming soon. For creators, brands and local businesses.</p>
            <div className="mt-5 flex items-center gap-4">
              <PlayStoreButton label="Google Play" />
              <button onClick={onJoin} className="text-[14px] hover:text-oxblood cursor-pointer">
                iOS waitlist
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
