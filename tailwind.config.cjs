import animate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        familyDelaGothicOne: ["DelaGothicOne", "sans-serif"],
        familyGroticTitulOtlHv: ["a_GroticTitulOtlHv", "sans-serif"],
      },
      backgroundImage: {
        "tabs-gradient-custom":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(181, 181, 181, 0.1) 100%)",
        "tabs-hover-gradient-custom":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(181, 181, 181, 0.15) 100%)",
        "freeze-gradient-custom":
          "linear-gradient(270deg,#00100f 0%,rgba(0, 0, 0, 0) 58.19%)",
        "fitnes-club-gradient-custom":
          "linear-gradient(180deg,rgba(255, 255, 255, 0.2) 0%,rgba(181, 181, 181, 0.2) 100%)",
        "water-zone-gradient-custom":
          "linear-gradient(270deg,#00100f 28.37%,rgba(0, 16, 15, 0.75) 55.82%)",
      },
      colors: {
        customGray: "rgb(60, 60, 60)",
        customGrayLight: "rgb(30, 30, 30)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      screens: {
        "3xl": { min: "1921px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [animate],
};
