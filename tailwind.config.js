/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "md" : "1.25rem",
      "lg": "2.5rem",
      "xl": "3rem",
      "2xl": "4rem",
      "3xl": "5rem",
      "4xl": "6rem",
      "5xl": "7em",
      "6xl": "8rem",
      "7xl": "9rem",
      "8xl": "10rem",
      "9xl": "11rem",
      
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
    },
  },
  plugins: [],
}