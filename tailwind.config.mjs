/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "xl": "1142px",
      }
    },
    extend: {
      colors: {
        "custom-black": "#070508",
        "off-black": "#0F0D10",
        "custom-grey": "#232224",
        "custom-sky": "#71CED0",
        "off-sky": "#71CED000",
        "custom-white": "#FFFFFF3D"
      },
      fontSize: {
        "custom-xl":"64px",
      },
    },
  },
  plugins: [],
};
