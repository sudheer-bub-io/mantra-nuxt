/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './nuxt/**/*.{vue,js}',
    './app/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      width:{
        '26':'109px'
      },
      animation: {
        'gradient-animation': 'gradient-animation 18s ease infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(300deg,  #00bfff, #ff4c68, #ef8172)',
        'gradient-background2': 'linear-gradient(300deg,  rgb(203 213 225) ,rgb(148 163 184), rgb(71 85 105))',
      },
      backgroundSize: {
        '180%': '180%',
      },
    },
  },
  plugins: [],
}
