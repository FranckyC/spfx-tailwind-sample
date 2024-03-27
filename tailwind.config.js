
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', // allow to update CSS classes automatically when a file is updated (watch mode)
  content: {
    files: [
      './src/**/*.{html,ts,tsx}', // scan for these files in the solution
    ]
  },
  corePlugins: {
    preflight: false, // to avoid conflict with base SPFx styles otherwise (ex: buttons background-color)
  },
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
          sans: ['var(--myWebPart-fontPrimary)','Roboto', ...defaultTheme.fontFamily.sans]
        },
        colors: {

          /* light/dark is controlled by the theme values at WebPart level */
          primary: "var(--myWebPart-primary, #7C4DFF)",
          background: "var(--myWebPart-background, #F3F5F6)",
          link: "var(--myWebPart-link, #1E252B)",
          linkHover: "var(--myWebPart-linkHover, #1E252B)",
          bodyText: "var(--myWebPart-bodyText, #1E252B)"
        }
    }
  },
  plugins: [
    require('@tailwindcss/forms'), // to be able to style inputs
  ],
};