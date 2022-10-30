module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
      body: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
      sans: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
    },
    screens: {
      mobile: '320px',
      tablet: '640px',
      largeTablet: "840px",
      laptop: '1024px',
      desktop: '1280px',
      _2k: '2000px',
    },
    extend: {
      colors: {
        gray50: '#C8C8C8',
        gray100: '#f6f5f0',
        gray105: '#F8F9FA',
        gray110: '#D8DADB',
        gray120: '#C5C5C5',
        gray150: '#8C8C8C',
        gray300: '#595959',
        gray200: '#E5E5E5',
        gray400: '#333333',
        gray550: '#11181C',
        bgGray: '#F9F9F9',
        bgWhite: '#FCFCFC',
        blueAccent: '#2379EC',
        lightBlue: '#308CE0',
        darkBlue: '#3452BC',
        twitterBlue: '#0EA0DA',
        lightOrange: '#F18A21',
        darkOrange: '#ED5332',
        darkBG: '#11181C',
        brandYellow: '#FCB60A',
        brandRed: '#ED5332',
        brandOrange: '#ED6A32',
        
      },
      fontFamily: {
        primary: "'Open Sans', 'Segoe UI', Tahoma, sans-serif",
        inter: "'Inter', sans-serif",
        secondary:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      backgroundImage: {
        'pizza-slices': "url('/pizzaSlices.svg')",
      }
    },
  },
  plugins: [],
}
