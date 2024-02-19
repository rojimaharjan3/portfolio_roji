// const { calculateNewValue } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide': {
          '100%': { top: '-180px' }

        },
    
        'typing': {
          '40% ,60%': { left: 'calc(100%)' },
          // '60%': { left: 'calc(100%) ' },
          '100%' : {left: 0},
        },
      },

      animation: {
        'slide-animation': 'slide 6s steps(2) infinite ',
        'typing-animation' : 'typing 3s steps(10) infinite '
      },
     
    },
  },
  plugins: [],
}
