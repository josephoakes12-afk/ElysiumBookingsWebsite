/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      colors: {
        canvas: "#F5F4EF",
        ink: "#111827",
        brand: {
          navy: "#223A58",
          gold: "#C1A56E",
          blue: "#587CBB",
          bronze: "#543E1E",
          mist: "#DCE6F4",
          slate: "#32465D"
        }
      },
      boxShadow: {
        soft: "0 16px 50px rgba(16, 26, 43, 0.12)",
        panel: "0 22px 70px rgba(16, 26, 43, 0.1)"
      },
      maxWidth: {
        container: "74rem"
      }
    }
  },
  plugins: []
};

