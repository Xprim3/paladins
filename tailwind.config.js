/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blood Red variations
        'blood-red': '#DC143C',
        'blood-red-dark': '#8B0000',
        'blood-red-light': '#FF1744',
        
        // Gold variations
        'paladin-gold': '#FFD700',
        'paladin-gold-dark': '#B8860B',
        'paladin-gold-light': '#FFEB3B',
        
        // Dark theme backgrounds
        'dark-bg': '#0A0A0A',
        'dark-surface': '#1A1A1A',
        'dark-border': '#2A2A2A',
        'dark-gray': '#1a1a1a',
        
        // Text colors
        'text-light': '#FFFFFF',
        'text-muted': '#B0B0B0',
      },
      fontFamily: {
        'heading': ['Cinzel', 'Playfair Display', 'serif'],
        'body': ['Inter', 'Roboto', 'Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        'dark': '#0A0A0A',
        'dark-surface': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

