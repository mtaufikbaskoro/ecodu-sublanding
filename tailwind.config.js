module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stan': {
          '100': '#214094',
          '200': '#8C8DB9',
        },
        'ipdn': {
          '100': '#1D94DE',
          '200': '#2F4858',
        },
        'sekdin': {
          '100': '#199D54',
          '200': '#2F4858',
        },
        'stis': {
          '100': '#da4444',
          '200': '#2F4858',
        },
        'utbk': {
          '100': '#ED7D31',
          '200': '#2F4858',
          '300': '#03989E',
        },
        'additional-color-100': '#5257A2',
        'additional-color-200': '#F8F8FF',
        'additional-color-300': '#F1F1E6',

      },
      backgroundImage: {
        'stansah': "url('/assets/stansah.jpg')",
        'ipdnsah': "url('/assets/ipdnsah.png')",
        'stissah': "url('/assets/stissah.jpg')"
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
  plugins: [
    require('tailwind-scrollbar')
  ],
}
