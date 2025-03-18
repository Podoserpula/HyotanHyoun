import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px', // 小さな画面用の新しいブレークポイント
        'sm': '640px', // 既存のsmブレークポイント
        'md': '768px', // 既存のmdブレークポイント
        'lg': '1024px', // 既存のlgブレークポイント
        'xl': '1280px', // 既存のxlブレークポイント
        '2xl': '1536px', // 既存の2xlブレークポイント
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorWhite: "#FAFAFA",
        colorBlack: "#222222"
      },
    },
    fontFamily: {
      titleFnt: ["Cherry Bomb One", "sans-serif"],
    }
  },
  plugins: [],
} satisfies Config;
