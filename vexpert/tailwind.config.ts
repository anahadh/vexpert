import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-bg': '#2e1065',
        'dark-bg': '#581c87',
        'medium-bg': '#7c3aed',
        'light-bg': '#c084fc',
      },
      fontFamily: {
        title: ['Outfit', 'sans-serif'],
        para: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
