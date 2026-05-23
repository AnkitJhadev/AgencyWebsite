import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CompanyApp — We Build Products Founders Love";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(22, 163, 74, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(15, 118, 110, 0.10)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            C
          </div>
          <span style={{ color: "white", fontSize: "24px", fontWeight: "600" }}>
            CompanyApp
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "white",
            lineHeight: 1.1,
            maxWidth: "880px",
            marginBottom: "28px",
          }}
        >
          We Build Products{" "}
          <span style={{ color: "#4ade80" }}>Founders Love</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            maxWidth: "720px",
            lineHeight: 1.5,
            marginBottom: "56px",
          }}
        >
          Validate → Design → Build → Grow. 120+ products shipped.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { v: "120+", l: "Products shipped" },
            { v: "6 wks", l: "Median launch" },
            { v: "40%", l: "Activation lift" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "20px 28px",
              }}
            >
              <span style={{ color: "white", fontSize: "32px", fontWeight: "700" }}>
                {s.v}
              </span>
              <span style={{ color: "#64748b", fontSize: "16px", marginTop: "4px" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
