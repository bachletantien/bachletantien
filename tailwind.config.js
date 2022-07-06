const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/index.html', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', ...defaultTheme.fontFamily['sans']],
      mono: ['Roboto Mono', ...defaultTheme.fontFamily['mono']],
    },

    fontSize: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '22px',
      heading: '32px',
    },

    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      navy: {
        lightest: '#233554',
        light: '#112240',
        DEFAULT: '#0a192f',
        dark: '#020c1b',
        shadow: 'rgba(2,12,27,0.7)',
      },
      slate: {
        lightest: '#ccd6f6',
        light: '#a8b2d1',
        DEFAULT: '#8892b0',
        dark: '#495670',
      },
      white: '#e6f1ff',
      green: {
        DEFAULT: '#64ffda',
        tint: 'rgba(100,255,218,0.1)',
      },
    },

    extend: {
      lineHeight: {
        1.1: 1.1,
        1.3: 1.3,
      },
      content: {
        empty: '""',
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
