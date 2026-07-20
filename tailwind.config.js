/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#fff8e6',
          100: '#ffefc2',
          200: '#ffe08a',
          300: '#ffcc4d',
          400: '#f5b921',
          500: '#e0a015',
          600: '#b87a0d',
          700: '#8a5a0a',
          800: '#5c3a06',
          900: '#2e1d03',
        },
        comb: {
          50: '#fdf6e3',
          100: '#f7e6b3',
          200: '#ead07a',
          300: '#d9b34a',
          400: '#c4962a',
          500: '#a37818',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bee-float': 'beeFloat 6s ease-in-out infinite',
        'bee-bob': 'beeBob 1.6s ease-in-out infinite',
        'wing-flap': 'wingFlap 0.12s linear infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
      },
      keyframes: {
        beeFloat: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '25%': { transform: 'translate(40px, -20px) rotate(3deg)' },
          '50%': { transform: 'translate(80px, 10px) rotate(-1deg)' },
          '75%': { transform: 'translate(30px, 25px) rotate(2deg)' },
        },
        beeBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wingFlap: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.4)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
