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
         * "night" = dark-mode surfaces, stepped up from the brand navy
         * (#13293D = 950); "day" = light-mode surfaces on crisp white.
         */
        night: {
          950: '#13293d', // page background (dark) — brand navy
          900: '#1a3349', // chart/card surface (dark)
          800: '#213d55', // raised surface / tag chips (dark)
          700: '#2c4b66', // hairline borders (dark)
          600: '#3d6080', // strong borders / hover borders (dark)
        },
        day: {
          50:  '#ffffff', // page background (light)
          100: '#f3f6f9', // raised surface / tag chips (light)
          200: '#e2e8ee', // hairline borders (light)
          300: '#c9d3dc', // strong borders / hover borders (light)
        },

        /* Text inks — one trio per mode, navy-tinted so they sit with the brand */
        ink:   { DEFAULT: '#13293d', soft: '#4a5d6e', mute: '#7b8b99' }, // on light
        frost: { DEFAULT: '#f4f8fb', soft: '#b5c4d1', mute: '#8497a8' }, // on dark

        /*
         * Brand accents. Contrast notes (vs. the surface each is used on):
         *   mint  on navy  ~9.4:1  — text/lines on dark
         *   teal  on white ~4.9:1  — mint's light-mode stand-in (mint is ~1.6:1 on white)
         *   red   on navy  ~3:1    — fills and large display type only
         *   red-d on navy  ~5.4:1  — small text on dark
         *   white on red   ~5:1    — button labels
         */
        brand: {
          navy:   '#13293d',
          mint:   '#48e5c2',
          teal:   '#0b7f69',
          red:    '#d62839',
          'red-d': '#ff6b7a',
        },

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
