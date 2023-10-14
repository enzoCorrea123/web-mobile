/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        '440px': '440px',
        '700px': '700px',
      },
      backgroundImage: {
        'banner': "url('./public/images/banner.png')",
      },
      colors: {
        'primary': '#B88E2F',
        'secondary': '#FFF3E3',
        'lightyellow': '#FAF3EA',
        'lightlightyellow': '#FCF8F3',
        'gray': '#F4F5F7',
        'gray-font': '#898989',
        'lightgray-font': '#B0B0B0',
      },
      letterSpacing: {
        '3px': '3px',
      },
    },
  },
  plugins: [
  ],
}

