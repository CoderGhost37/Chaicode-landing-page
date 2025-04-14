/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-primary': '#13141B', // Dark background
        'brand-primary': '#FF7700', // Main brand color
        'brand-secondary': '#362420', // Accent/complementary brand color
        'text-primary': '#F59D0F', // Primary text color
        'text-secondary': '#868484', // Secondary/muted text color
      },
      keyframes: {
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        'marquee-horizontal': 'marquee-x var(--duration) infinite linear',
        'marquee-vertical': 'marquee-y var(--duration) linear infinite',
      },
    },
  },
  plugins: [],
};
