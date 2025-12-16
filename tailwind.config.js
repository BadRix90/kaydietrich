/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors basierend auf Design-Guide
        primary: {
          DEFAULT: '#2563eb', // Corporate Blue
          dark: '#1e40af',
          light: '#3b82f6'
        },
        accent: {
          DEFAULT: '#f97316', // Orange für CTAs
          dark: '#ea580c',
          light: '#fb923c'
        },
        text: {
          DEFAULT: '#1a1a1a',
          secondary: '#4d4d4d',
          muted: '#6b7280'
        },
        background: {
          DEFAULT: '#ffffff',
          light: '#f8fafc',
          dark: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }], // 64px
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],    // 48px
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }], // 36px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],  // 24px
        'body': ['1.125rem', { lineHeight: '1.75' }],                // 18px
        'small': ['0.875rem', { lineHeight: '1.5' }],                // 14px
      },
      maxWidth: {
        'content': '1200px',
        'wide': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
