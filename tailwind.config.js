/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        qulox: {
          cyan: '#00D9FF',
          blue: '#0099FF',
          purple: '#7B2CBF',
          dark: '#1a1a1a',
          lightblue: '#E8F4FF',
        },
      },
      backgroundImage: {
        'qulox-gradient': 'linear-gradient(135deg, #00D9FF 0%, #7B2CBF 100%)',
      },
    },
  },
  plugins: [],
}
