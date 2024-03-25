/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 7.5s linear infinite",
        "blur-scroll-dark": "blur-scroll-dark linear both",
        "blur-scroll-light": "blur-scroll-light linear both",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "blur-scroll-dark": {
          to: {
            "box-shadow":
              "0px 5px 50px -5px rgba(0, 0, 0, 0.1), 0px 5px 50px rgba(0, 0, 0, 0.3)",
            background: "rgba(0, 0, 0, 0.3)",
            "backdrop-filter": "blur(10px)",
          },
        },
        "blur-scroll-light": {
          to: {
            "box-shadow":
              "0px 5px 50px -5px rgba(250, 250, 250, 0.1), 0px 5px 50px rgba(250, 250, 250, 0.1)",
            background: "rgba(250, 250, 250, 0.1)",
            "backdrop-filter": "blur(10px)",
          },
        },
      },
      minHeight: {
        contact: "calc(100dvh - 179px)",
      },
    },
  },
  plugins: [],
};
