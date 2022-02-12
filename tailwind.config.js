module.exports = {
  purge: { enabled: true, content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],},
  theme: {
    extend: {
      spacing: {
        '11%': '11%',
        '12%': '12%',
        '55%': '55%',
        '45%': '45%',
        heroCardGradientWidth: 'calc(55% - 16rem)',
      },
      colors: {
        bgFull: '#0c111b',
        bg2: '#192133',
        bg3: '#030b17',
        bg4: '#000000',
        textNormal: 'rgba(255, 255, 255, 0.8)',
        textHighlight: '#ffffff',
        inputPlaceholder: 'rgba(255, 255, 255, 0.6)',
        inputBorder: 'rgba(255, 255, 255, 0.6)',
        accent: '#1f80e0',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      width: ['focus'],
      zIndex: ['hover'],
    },
  },
  plugins: [],
}