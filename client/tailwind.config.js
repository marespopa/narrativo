module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,astro}", // Adjust paths based on your project structure
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};