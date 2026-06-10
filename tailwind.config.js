/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: ["./index.html", "./src/**/*.{jsx,html,js,tsx}"],
  theme: {
    extend: {
    keyframes: {
      'cursor-blink': {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
      'ticker-scroll': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      'cursor-blink': 'cursor-blink 0.8s step-end infinite',
      'ticker-scroll': 'ticker-scroll 18s linear infinite',
    },
    },
  },
  plugins: [
 
    typography,
  ],
};
