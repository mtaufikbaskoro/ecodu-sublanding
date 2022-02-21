module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#214094',
        'additional-color-100': '#5257A2',
        'additional-color-200': '#F8F8FF',
        'additional-color-300': '#F1F1E6',
        'additional-color-400': '#8C8DB9',

      },
      backgroundImage: {
        'hero': "url('/assets/stansah.jpg')",
      },
      gridTemplateColumns: {
        'lesson-col': '0.3fr 1fr',
        'testimonial': '1fr 0.3fr'
      },
      width: {
        'lesson-card': '300px',
        'testimonial-card': '400px',
      },
      height: {
        'lesson-card': '320px'
      }
    },
  },
  plugins: [],
}
