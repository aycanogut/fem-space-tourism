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
      md: '768px',
      lg: '900px',
      xl: '1200px',
      xxl: '1440px',
    },
    fontFamily: {
      bellefair: ["'Bellefair', serif", 'sans-serif'],
      barlow: ["'Barlow Condensed', serif", 'sans-serif'],
    },
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      56: '56px',
      80: '80px',
      100: '100px',
      150: '150px',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    letterSpacing: {
      tighter: '1.25px',
      tight: '2px',
      normal: '2.35px',
      wide: '2.7',
      wider: '3.38px',
      widest: '4.75px',
      widester: '5.25px',
    },
    extend: {
      colors: {
        vulcan: '#0B0D17',
        tropical_blue: '#D0D6F9',
        bright_gray: '#383B4B',
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
        button_sm: '150px',
        button_md: '242px',
        button_lg: '274px',
        button_sm_top: '76px',
        image_destination_sm: '170px',
        image_destination_md: '300px',
        image_destination_lg: '445px',
      },
      backdropBlur: {
        nav: '20px',
      },
      boxShadow: {
        button: '1px 1px 0px 88px rgba(255,255,255,0.15);',
      },
    },
  },
  plugins: [],
}
