const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      backgroundImage: {
        'lime-fade': 'linear-gradient(90deg, lime 0%, transparent 100%)',
      'radial-custom': 'radial-gradient(closest-side circle, rgba(137, 243, 54, 0.3), rgba(0, 0, 0, 0))',
      
      },
    
      boxShadow: {
        'blurry-dot': '0 0 15px rgba(137, 243, 54, 0.5)',
      },
      
     
      fontFamily: {
        custom: ['CustomFont'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#c3c3c4',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neonGreen: 'rgb(124, 252, 0)', 
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          'custom-green': '#89f336',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          primary: '#111317',
          'primary-light': '#1f2125',
          'primary-extra-light': '#35373b',
          secondary: '#f9ac54',
          'secondary-dark': '#d79447',
          'text-light': '#d1d5db',
          white: '#ffffff',
          'custom-gray': '#3c3c3c',
        },
      },
      spacing: {
        '5rem': '5rem',
        '2rem': '2rem',
        '1rem': '1rem',
        '3rem': '3rem',
      },
      boxShadow: {
        'blur': '0 0 1000px 50px rgba(249, 172, 84, 0.5)',
      },
      fontSize: {
        '10rem': '10rem',
        '5rem': '5rem',
        '2.25rem': '2.25rem',
        '1rem': '1rem',
      },
      lineHeight: {
        '7rem': '7rem',
        '6rem': '6rem',
        '20rem': '20rem',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],

  keyframes: {
    moveUp: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  animation: {
    'move-up': 'moveUp 1s ease-out forwards',
  },
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', // Adjust paths as necessary
  ],
  
}
