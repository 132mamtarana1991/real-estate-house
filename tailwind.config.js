/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
        quentinregular: ['Satisfy', 'cursive'],
      },
      fontSize: {
        11: '0.687rem',
        12: '0.75rem',
        M12: '0.793rem', //12.6px-12.8px
        13: '0.8125rem',
        M13: '0.843rem', //13.3px-13.71px
        14: '0.875rem',
        M14: '0.9rem', //14.4px
        15: '0.9375rem',
        16: '1rem',
        M17: '1.09rem', //17.5px
        18: '1.125rem',
        19: '1.181rem', //18.76px-19px
        20: '1.25rem',
        21: '1.313rem',
        22: '1.375rem',
        M22: '1.4rem', //22.4px
        24: '1.5rem',
        26: '1.625rem',
      },
      colors: {
        'realestate-orange': {
          100: '#ffa500',
          200: '#ffa500',
          300: '#ffa500',
          400: '#ff8f15',
          500: '#ff8f15',
          600: '#ff8f15',
          700: '#d96315',
          800: '#d96315',
          900: '#d96315',
        },
        'realestate-blue': {
          100: '#b6cae4',
          200: '#b6cae4',
          300: '#A8D8F3',
          400: '#3c7494',
          500: '#0000FF',
          600: '#0000FF,',
          700: '#3333CC,',
          800: '#3333CC',
          900: '#0000CC',
        },
        'realestate-green': {
          100: '#008200',
        },
        'realestate-gray': {
          100: '#F8F8F8',
          200: '#FCFCF9',
          300: '#EFEFEF',
          400: '#E1E1DF',
          500: '#DEDEDE',
          600: '#D5D5D5',
          700: '#CCCCCC',
          800: '#C8C9C7',
          900: '#808080',
        },
        'realestate-black': {
          100: '#767676',
          200: '#767676',
          300: '#55565b',
          400: '#57585C',
          500: '#57585C',
          600: '#444444',
          700: '#000000',
        },
        'realestate-red': {
          100: '#DB4145',
          200: '#8B0607',
        },
        'realestate-pink': {
          100: '#ab35c7',
          200: '#a30097',
        },
        transparent: 'transparent',
        current: 'currentColor',
      },
      spacing: {
        1.25: '0.3125rem', // 5px
        3.75: '0.9375rem', // 15px
        4.5: '1.125rem', // 18px
        7.5: '1.875rem', // 30px
        15: '3.75rem', // 60px
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        145: '9.063rem',
        47: '47%',
        63: '63%',
      },
    },
    borderWidth: {
      DEFAULT: '0.063rem',
      0: '0',
      1: '1px',
      3: '0.188rem',
      5: '0.3125rem',
    },
    screens: {
      mob: { min: '375px' },
      smmob: { min: '400px' },
      bmob: { min: '480px' },
      xs: { min: '576px' },
      sm: { min: '767px' },
      tab: { min: '850px' },
      smd: { min: '960px' },
      lg: { min: '1024px' },
      xl: { min: '1200px' },
      xxl: { min: '1400px' },
    },
    maxWidth: {
      heading: '26.875rem',
      maincontainer: '85rem',
      smcontainer: '67.375rem',
      internetbanner: '31.125rem',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
