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
    },
  },
  plugins: [],
};
