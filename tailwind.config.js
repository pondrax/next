import daisyui from "daisyui"
import { addIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    daisyui,
    addIconSelectors({
      // List of prefixes, required
      prefixes: ['bxs'],

      // All other properties below are optional. This example shows default values.
      // Mask and background selectors
      // maskSelector: '.iconify-color',
      // backgroundSelector: '.iconify',
      // // Icon selector, must have "{prefix}" and "{name}" in it
      // iconSelector: '.{prefix}--{name}',
      // // Variable name to use for icon data
      // varName: 'svg',
      // // Scale icons, which sets width/height in background/mask selectors
      scale: 1.3,
      // // Extra rules to add to mask and background selectors
      // extraMaskRules: {},
      // extraBackgroundRules: {},
      // // Callback to customise icons (such as change stroke-width, color, etc...).
      // // First param is content, second is icon name, third is icon set prefix.
      // // Function should return modified content.
      // customise: (content, name, prefix) => content,
    }),
  ],
  daisyui: {
    themes: [  // list theme you want to use in your project.
      "light",
      "dark",
      "retro",
      "aqua ",
      "cupcake"
    ]
  }
};
