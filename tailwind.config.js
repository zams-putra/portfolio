/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: ["./index.html", "./src/**/*.{jsx,html,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
 
    typography,
  ],
};
