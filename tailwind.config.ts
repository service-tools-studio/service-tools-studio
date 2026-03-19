import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        ink: "rgb(76 20 98 / <alpha-value>)",
        "btn-primary": "var(--btn-primary)",
        accent: {
          50: "rgb(61 191 184 / 0.08)",
          100: "rgb(61 191 184 / 0.15)",
          200: "rgb(61 191 184 / 0.28)",
          400: "rgb(61 191 184 / 0.7)",
          700: "#3DBFB8",
          DEFAULT: "#3DBFB8",
        },
        lavender: "rgb(243 236 253 / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
