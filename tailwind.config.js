/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#09090b',       // Zinc-950 profundo
          panel: '#121215',    // Fondo de tarjetas
          border: '#27272a',   // Bordes sutiles
          accent: '#10b981',   // Esmeralda técnico
          accentHover: '#059669',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}