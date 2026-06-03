/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0A0F',
        surface: '#111118',
        'surface-raised': '#13131C',
        ink: '#E8E8F0',
        muted: '#8888A0',
        accent: '#4F8EF7',
        'accent-hover': '#3D7AE8',
        border: 'rgba(255, 255, 255, 0.07)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        subheading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        btn: '7px',
      },
      boxShadow: {
        subtle: '0 8px 24px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'hero-shift': 'heroShift 18s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroShift: {
          '0%': { opacity: '0.35' },
          '100%': { opacity: '0.55' },
        },
      },
    },
  },
  plugins: [],
};
