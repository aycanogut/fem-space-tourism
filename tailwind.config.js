module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      bellefair: ["'Bellefair', serif", 'sans-serif'],
      barlow: ["'Barlow Condensed', serif", 'sans-serif'],
    },
    colors: {
      vulcan: '#0B0D17',
      tropical_blue: '#D0D6F9',
      white: '#ffffff',
    },
    // T-17 spacing
    extend: {
      fontSize: {
        nav: '16px',
        subheading_1: '28px',
        subheading_2: '14px',
        heading_1: '150px',
        heading_2: '100px',
        heading_3: '56px',
        heading_4: '32px',
        heading_5: '28px',
        base: '18px',
      },
    },
  },
  plugins: [],
}
