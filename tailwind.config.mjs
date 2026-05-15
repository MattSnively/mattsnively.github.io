/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],

  // Class-based dark mode so the JS toggle has full control
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        // Serif headlines — editorial weight
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        // Monospace labels and tech tags — technical-vintage contrast
        mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
        // Body copy — clean, legible
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      colors: {
        // Aged paper palette — core of the 70s editorial aesthetic
        paper: {
          50:  '#FFFDF8',
          100: '#F5F0E8',
          200: '#EDE5D8',
          300: '#D4C5A9',
          400: '#B8A484',
          500: '#9A8A72',
          600: '#7A6A52',
          700: '#5A4A32',
          800: '#2C1F0E',
          900: '#1A1510',
          950: '#0D0A08',
        },
        // Rust / burnt orange — primary accent
        rust: {
          light: '#E07A3A',
          DEFAULT: '#C4520A',
          dark:  '#A33E05',
        },
        // Amber / gold — secondary accent
        amber: {
          light: '#C4A44A',
          DEFAULT: '#8B6914',
          dark:  '#6B5010',
        },
        // Moss green — "Live" status indicator
        moss: {
          light: '#6AAF85',
          DEFAULT: '#4A7C59',
          dark:  '#3A5C42',
        },
      },

      // Hairline borders feel more editorial than chunky ones
      borderWidth: {
        hairline: '0.5px',
      },
    },
  },

  plugins: [],
};
