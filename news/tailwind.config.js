/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind should scan these files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347',  // Custom primary color, change as needed
        secondary: '#2F4F4F', // Custom secondary color, change as needed
      },
    },
  },
  plugins: [],
};
