import { ImageResponse } from "next/og";

export const alt = "Hartono Hong portfolio preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 72px",
          background: "#080808",
          borderTop: "2px solid #2a2a2a",
          borderBottom: "2px solid #2a2a2a"
        }}
      >
        <div style={{ display: "flex", color: "#a3e635", fontSize: 24, letterSpacing: 1 }}>
          [PORTFOLIO // SOFTWARE DEVELOPER]
        </div>
        <div style={{ display: "flex", marginTop: 48, color: "#f5f5f0", fontSize: 92, fontWeight: 800 }}>
          Hartono Hong.
        </div>
        <div style={{ display: "flex", marginTop: 16, color: "#c2cab0", fontSize: 40, fontWeight: 600 }}>
          Backend systems, shipped faster with AI agents.
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: 56,
            padding: "14px 26px",
            borderRadius: 4,
            background: "#a3e635",
            color: "#080808",
            fontSize: 20,
            fontWeight: 700
          }}
        >
          hartonohong.dev
        </div>
      </div>
    ),
    size
  );
}
