"use client";

import React, { useState } from "react";
import { Wifi, Battery, Signal } from "lucide-react";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
  url?: string;
  iframeUrl?: string;
}

export default function IPhoneFrame({
  children,
  className = "",
  iframeUrl = "https://app.richyreach.com",
}: IPhoneFrameProps) {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Glow & Ambient Reflection */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-oxblood/30 via-rose/20 to-oxblood/40 rounded-[56px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

      {/* Titanium Side Hardware Buttons */}
      {/* Left: Action Button */}
      <div className="absolute left-[-5px] top-[105px] w-[5px] h-[26px] bg-gradient-to-r from-[#1a0104] via-[#4a0812] to-[#2a0207] rounded-l-md shadow-md z-10" />
      {/* Left: Volume Up */}
      <div className="absolute left-[-5px] top-[148px] w-[5px] h-[50px] bg-gradient-to-r from-[#1a0104] via-[#4a0812] to-[#2a0207] rounded-l-md shadow-md z-10" />
      {/* Left: Volume Down */}
      <div className="absolute left-[-5px] top-[210px] w-[5px] h-[50px] bg-gradient-to-r from-[#1a0104] via-[#4a0812] to-[#2a0207] rounded-l-md shadow-md z-10" />
      {/* Right: Power Button */}
      <div className="absolute right-[-5px] top-[170px] w-[5px] h-[75px] bg-gradient-to-l from-[#1a0104] via-[#4a0812] to-[#2a0207] rounded-r-md shadow-md z-10" />

      {/* Main iPhone Titanium Body Chassis */}
      <div className="relative w-[280px] h-[570px] sm:w-[310px] sm:h-[630px] rounded-[52px] bg-gradient-to-b from-[#3a060d] via-[#1f0206] to-[#120003] p-[10px] sm:p-[12px] shadow-[0_25px_60px_-15px_rgba(42,2,7,0.7),0_0_30px_rgba(180,106,116,0.15)] border border-[#6b1420]/40">
        
        {/* Inner Titanium Bezel Highlight Ring */}
        <div className="w-full h-full rounded-[42px] sm:rounded-[44px] bg-[#0c0002] p-[3px] relative overflow-hidden ring-1 ring-white/10 shadow-inner">
          
          {/* Display Screen Canvas */}
          <div className="w-full h-full rounded-[38px] sm:rounded-[40px] overflow-hidden bg-[#fbf8f5] relative flex flex-col">
            
            {/* iOS Status Bar & Dynamic Island Layer */}
            <div className="absolute top-0 left-0 right-0 h-10 px-6 pt-2 z-40 flex items-center justify-between pointer-events-none text-oxblood">
              {/* Time */}
              <span className="text-[12px] font-semibold tracking-tight text-oxblood/90 pl-1">9:41</span>

              {/* Dynamic Island Pill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-md border border-white/10">
                {/* Camera Lens */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f] border border-white/10 relative flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1e2a4a]/80" />
                </div>
                {/* Sensor Dot */}
                <div className="w-2 h-2 rounded-full bg-[#0a0a0f] border border-white/5" />
              </div>

              {/* Status Icons (Signal, Wifi, Battery) */}
              <div className="flex items-center gap-1.5 pr-1 text-oxblood/90">
                <Signal size={12} strokeWidth={2.5} />
                <Wifi size={12} strokeWidth={2.5} />
                <Battery size={14} strokeWidth={2.5} />
              </div>
            </div>

            {/* Live Web App IFrame / Content Slot */}
            <div className="w-full h-full relative z-10 pt-8 bg-[#fbf8f5] overflow-hidden">
              {iframeUrl && !iframeError ? (
                <div className="w-[125%] h-[125%] origin-top-left transform scale-80 overflow-hidden">
                  <iframe
                    src={iframeUrl}
                    title="RichyReach Mobile Web App"
                    className="w-full h-full border-none select-none"
                    onError={() => setIframeError(true)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              ) : (
                children
              )}
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-oxblood/40 rounded-full z-40 pointer-events-none" />

            {/* Subtle Screen Glass Specular Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
