import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "RichyReach — Where creators get rich and brands get reach. Live on Google Play.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUri(path: string) {
  const file = await readFile(join(process.cwd(), "public", path));
  return `data:image/png;base64,${file.toString("base64")}`;
}

/** The share card: headline on the left, two real app screens on the right. */
export default async function Image() {
  const [logo, home, arena] = await Promise.all([
    dataUri("richyreach-logo.png"),
    dataUri("richyreach-app-ui/creator-home.png"),
    dataUri("richyreach-app-ui/creator-arena.png"),
  ]);

  const phone = (src: string, top: number, rotate: number) => (
    <div
      style={{
        display: "flex",
        width: 250,
        height: 556,
        marginTop: top,
        padding: 7,
        borderRadius: 40,
        background: "#ffffff",
        boxShadow: "0 30px 60px -20px rgba(29,21,23,0.35)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
      <img src={src} width={236} height={542} style={{ borderRadius: 33, objectFit: "cover", objectPosition: "top" }} alt="" />
    </div>
  );

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#ffffff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640, padding: "64px 0 64px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
            <img src={logo} width={52} height={52} style={{ borderRadius: 26 }} alt="" />
            <span style={{ fontSize: 32, fontWeight: 600, color: "#1d1517" }}>RichyReach</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Two fixed lines: Satori wraps inline spans unpredictably. */}
            <div style={{ display: "flex", flexDirection: "column", fontSize: 54, lineHeight: 1.15, letterSpacing: -1.5, color: "#1d1517" }}>
              <div style={{ display: "flex" }}>
                <span>Where creators get&nbsp;</span>
                <span style={{ color: "#3f030b", borderBottom: "5px solid #b46a74" }}>rich</span>
              </div>
              <div style={{ display: "flex", marginTop: 6 }}>
                <span>and brands get&nbsp;</span>
                <span style={{ color: "#3f030b", borderBottom: "5px solid #b46a74" }}>reach</span>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 24, lineHeight: 1.4, color: "#7b7072" }}>
              Paid brand campaigns, reel contests and Google review drives, with payouts when work is approved.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#1d1517", color: "#ffffff", borderRadius: 999, padding: "14px 26px", fontSize: 24 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M4 2.6v18.8c0 .5.5.8 1 .6l16.2-9.4a.7.7 0 0 0 0-1.2L5 2c-.5-.2-1 .1-1 .6Z" />
              </svg>
              Get it on Google Play
            </div>
            <span style={{ fontSize: 22, color: "#7b7072" }}>iOS coming soon</span>
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, gap: 20, justifyContent: "center", background: "#f6f3f0", borderRadius: "36px 0 0 36px", paddingTop: 50 }}>
          {phone(home, 0, -3)}
          {phone(arena, 60, 3)}
        </div>
      </div>
    ),
    { ...size },
  );
}
