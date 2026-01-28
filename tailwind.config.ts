import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#070A12",
          800: "#0B1020",
          700: "#11162A"
        },
        gold: {
          500: "#D4AF37",
          400: "#E6C969"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.25)",
        card: "0 20px 60px rgba(4, 8, 22, 0.45)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(212,175,55,0.25), transparent 45%)",
        "glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
