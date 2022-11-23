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
      backgroundImage: {
        'home-mobile': "url('../assets/home/background-home-mobile.webp')",
        'home-tablet': "url('../assets/home/background-home-tablet.webp')",
        'home-desktop': "url('../assets/home/background-home-desktop.webp')",
        'destination-mobile':
          "url('../assets/destination/background-destination-mobile.webp')",
        'destination-tablet':
          "url('../assets/destination/background-destination-tablet.webp')",
        'destination-desktop':
          "url('../assets/destination/background-destination-desktop.webp')",
        'crew-mobile': "url('../assets/crew/background-crew-mobile.webp')",
        'crew-tablet': "url('../assets/crew/background-crew-tablet.webp')",
        'crew-desktop': "url('../assets/crew/background-crew-desktop.webp')",
        'technology-mobile':
          "url('../assets/technology/background-technology-mobile.webp')",
        'technology-tablet':
          "url('../assets/technology/background-technology-tablet.webp')",
        'technology-desktop':
          "url('../assets/technology/background-technology-desktop.webp')",
      },
      backdropBlur: {
        nav: '20px',
      },
    },
  },
  plugins: [],
}
