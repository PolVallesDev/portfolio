/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Shippori Mincho"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070709',
          900: '#0d0e13',
          850: '#12141a',
          800: '#171922',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
        },
        washi: {
          DEFAULT: '#eceae4',
          muted: '#92949e',
          subtle: '#636571',
        },
        cinnabar: {
          DEFAULT: '#bd1e2d',
          dark: '#991624',
          subtle: 'rgba(189, 30, 45, 0.15)',
        }
      }
    },
  },
  plugins: [],
}
