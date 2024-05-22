/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#121212',         // Fundo principal
        'sidebar-gray': '#2a2f32',      // Barra lateral
        'dark-border': '#3b3b3b',       // Bordas
        'hover-gray': '#3a3f44',        // Hover nas conversas
        'input-bg': '#1e2428',          // Fundo do input de mensagem
        'green-500': '#075e54',         // Bolhas de mensagem do usuário
        'gray-600': '#3b3b3b',          // Bolhas de mensagem de outros
        'gray-400': '#b1b3b5',          // Texto cinza claro
      },
    },
  },
  plugins: [],
}

