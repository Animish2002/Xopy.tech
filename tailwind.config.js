const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the path as needed
  darkMode: "class",
  theme: {
    boxShadow: {
      "3xl": "29px 17px 0px -3px rgb(253, 218, 13)",
      new: "17px 15px 0px 0px rgb(253, 218, 13)",
      middle: "17px 15px 0px 0px rgb(253, 218, 13)"
    },
    fontFamily: {
      heading: ["var(--font-heading)", ...fontFamily.sans],
      body: ["var(--font-body)", ...fontFamily.sans],
    },
  },
  plugins: [
    // rest of the code
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          /* Hide scrollbar for Webkit browsers */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE 10+ */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
