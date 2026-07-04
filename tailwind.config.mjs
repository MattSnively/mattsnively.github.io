/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],

  // Class-based dark mode so the JS toggle has full control
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        // Geometric grotesque headlines — contemporary, data-forward
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Monospace labels, tags, and axis-style annotations
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        // Body copy — clean, legible
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      colors: {
        /*
         * Neutral surfaces.
         * "night" = dark-mode surfaces (deep blue-black, not pure gray, so the
         * category hues glow against it); "day" = light-mode surfaces.
         */
        night: {
          950: '#0b0b12', // page background (dark)
          900: '#12121a', // chart/card surface (dark) — validated vs palette
          800: '#1a1a26', // raised surface / tag chips (dark)
          700: '#262636', // hairline borders (dark)
          600: '#3a3a4e', // strong borders / hover borders (dark)
        },
        day: {
          50:  '#fafaf8', // page background (light) — validated vs palette
          100: '#f2f1ec', // raised surface / tag chips (light)
          200: '#e6e4db', // hairline borders (light)
          300: '#d2cfc2', // strong borders / hover borders (light)
        },

        /* Text inks — one trio per mode */
        ink:   { DEFAULT: '#16151d', soft: '#565360', mute: '#8b8894' }, // on light
        frost: { DEFAULT: '#f2f2f5', soft: '#b8b6c2', mute: '#82808e' }, // on dark

        /*
         * Category accents — CVD-validated 4-hue categorical palette
         * (run through the dataviz palette validator for both surfaces).
         * Plain slots are the light-mode steps; "-d" slots are the dark-mode
         * steps of the SAME hues, re-picked for the dark surface.
         */
        cat: {
          data:      '#2a78d6', 'data-d':  '#3987e5', // blue    — data & analytics
          civic:     '#4a3aa7', 'civic-d': '#9085e9', // violet  — civic tech
          apps:      '#1baf7a', 'apps-d':  '#199e70', // aqua    — apps & tools
          play:      '#e87ba4', 'play-d':  '#d55181', // magenta — just for fun
        },

        /* Status colors — reserved, never reused as series/category hues */
        status: {
          live:     '#0ca30c',
          beta:     '#fab219',
          progress: '#3987e5',
          planning: '#898781',
        },
      },
    },
  },

  plugins: [],
};
