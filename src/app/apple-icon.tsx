import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a0a0f",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg
          aria-hidden="true"
          height="116"
          viewBox="0 0 64 64"
          width="116"
        >
          <path d="M17 14h9v28h22v8H17V14Z" fill="#fff" />
        </svg>
      </div>
    ),
    size,
  );
}
