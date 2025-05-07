/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f4fa',
          100: '#dbe6f7',
          200: '#bcd1ef',
          300: '#8fb3e5',
          400: '#5c8fd7',
          500: '#3972c7',
          600: '#2b59a8',
          700: '#254a89',
          800: '#234072',
          900: '#1E3A8A', // Primary blue
        },
        teal: {
          50: '#eefaf8',
          100: '#d5f1ed',
          200: '#aedfda',
          300: '#7ec5c1',
          400: '#4ea8a5',
          500: '#34908e',
          600: '#0D9488', // Secondary teal
          700: '#0c6561',
          800: '#0e504e',
          900: '#0f4240',
        },
        amber: {
          50: '#fefaec',
          100: '#fcf0c9',
          200: '#f9df93',
          300: '#f6c855',
          400: '#F59E0B', // Accent amber
          500: '#e68509',
          600: '#c45f07',
          700: '#9d420a',
          800: '#80340e',
          900: '#6b2c0f',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      spacing: {
        // Base 8px spacing system
        '0': '0',
        '1': '0.25rem', // 4px
        '2': '0.5rem', // 8px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
        '12': '3rem', // 48px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '32': '8rem', // 128px
        '40': '10rem', // 160px
        '48': '12rem', // 192px
        '56': '14rem', // 224px
        '64': '16rem', // 256px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '9999px',
      },
    },
  },
  plugins: [],
};