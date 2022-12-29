/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      main_bg_color: '#181823',
      text_white: '#d6d6d6',
      text_grey: '#b1b1b1',
      button_pressed_color: '#475266',
      button_accent_color: '#5121e5',
      apps_bg_color: '#1f1f2b',
      apps_bg_pressed: '#3a3a45',
      text_blue: "#609bff",
      text_pink: "#e95d90",
      text_teal: "#14cee3",
    },
    screens: {
      on_desktop: { 'min': '951px' },
      on_mobile: { 'max': '950px' },
      // => @media (max-width: 950px) { ... }
      min_laptop_height: { 'min': '1000px' },
      // => @media (min-width: 1350px) { ... }
      min_desktop_height: { 'max': '1000px' },
      // => @media (max-width: 1350px) { ... }
    },
      extend: {},
    },
    plugins: [],
  }
