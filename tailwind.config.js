/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  extend: {
    fontFamily: {
      'sans': ["Josefin Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      'alata': ["Alata", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    letterSpacing: {
      widest: '0.3em'
    },
  },
};
export const plugins = [];

