/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBackground: '#FF6363',
        customBackgroundShadow: '#FF204E',
        customDarkBackground: '#7572F4',
        customDarkBackgroundShadow: '#00224D'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('pushable-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.pushable:active .${e(`pushable-active${separator}${className}`)}`;
        });
      });
    }),
  ],
};
