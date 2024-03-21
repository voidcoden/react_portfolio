/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          0: '#FFFFFF',
          10: '#F7FAF3',
        },
        green: {
          50: '#91B958',
          60: '#A5DAB5',
          70: '#96BAAB',
          80: '#78C7A5'
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },

      boxShadow: {
        // box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color].
        hardShadowLight: '7px 7px 0px 0px rgba(0,0,1)',
        hardShadowRight: '10px 10px 0px 0px rgba(0,0,1)',
        hardShadowLeft: '-10px 10px 0px 0px rgba(0,0,1)',
        hardShadowWhite: '10px 10px 0px 0px rgba(255,255,255)',
        hardShadowWhiteSmall: '5px 5px 0px 0px rgba(255,255,255)'
      },

      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};