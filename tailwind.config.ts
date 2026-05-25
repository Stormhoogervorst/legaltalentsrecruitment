import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#587dfe",
          hover: "#4569f5",
          muted: "rgba(88, 125, 254, 0.08)",
          border: "rgba(88, 125, 254, 0.24)",
        },
      },
    },
  },
} satisfies Config;

export default config;
