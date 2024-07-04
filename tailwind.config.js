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
        'custom-purple': '#9C12A0',
        'purple-button': '#9E1B9A',
        'custom-offWhite': '#DEDEDE',
        'custom-grey': '#AEAEAE',
        'white-background': '#F2F2F2'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '100px', 
        'ss': '600px'
      },
    },
  },
  plugins: [],
}
