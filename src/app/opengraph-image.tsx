import { ImageResponse } from "next/og";

export const alt = "Service Tools Studio — Portland-based web studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7CFED",
        }}
      >
        <span style={{ fontSize: 280 }}>👩🏽‍💻</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
