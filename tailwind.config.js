/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primer: 'oklch(0.3 0.0749 145.58)',        // #0F3714
        sekunder: 'oklch(0.59 0.1239 130.44)',     // #638b35
        sekunderDark: 'oklch(0.42 0.1051 142.54)', // #255B22
        tersier: 'oklch(0.61 0.0801 131.78)',      // #728E5B
        kuarter: 'oklch(0.91 0.1501 123.02)',      // #CEF17B
        bsoft: 'oklch(0.91 0.0845 130.49)',        // #CEEDB2
        bkrem: 'oklch(0.94 0.0825 112.34)',        // #ECF2B2
        bblue: 'oklch(0.88 0.0495 153.41)',        // #BEE0C7
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

