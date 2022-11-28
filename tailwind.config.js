module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
    letterSpacing: {
      wide: '2.35px',
      wider: '2.7px',
      widest: '4.75px',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      colors: {
        vulcan: '#0B0D17',
        tropical_blue: '#D0D6F9',
        white: '#ffffff',
      },
      spacing: {
        nav_sm: '450px',
        nav_lg: '830px',
        nav_sm_top: '90px',
        nav_md_top: '96px',
        nav_lg_top: '175px',
        nav_lg_left: '123px',
        nav_lg_gap: '11px',
      },
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
      backdropBlur: {
        nav: '20px',
      },
    },
  },
  plugins: [],
}
