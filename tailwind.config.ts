import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          // Primary accent (cyan) — `accent`/`accentHover` are the site-wide
          // interactive accent. Legacy `brand-orange` classes were renamed to
          // `brand-accent`, so this recolours the whole site from one place.
          accent: "#00D9FF",
          accentHover: "#33E1FF",
          // Gradient stops (cyan → blue → violet).
          cyan: "#00D9FF",
          blue: "#3B82F6",
          violet: "#6C63FF",
          // Premium dark surfaces.
          darker: "#07080D", // body / deepest ground
          dark: "#0B0D14", // alternating section background
          card: "#121521", // card surface
          surface: "#151827", // raised surface
          gray: "#232A3D", // borders / dividers / subtle fills
          // Text tones.
          text: "#C4CAD8", // primary body text (readable on dark)
          muted: "#9CA3AF", // secondary / muted text
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00D9FF 0%, #3B82F6 50%, #6C63FF 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(0,217,255,0.15) 0%, rgba(108,99,255,0.15) 100%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 24px rgba(0,217,255,0.28)",
        "glow-violet": "0 0 24px rgba(108,99,255,0.28)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
