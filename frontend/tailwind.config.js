/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural-cream': '#F7F3E3',
        'Terracotta': "#E2725B",
        'GoldenYellow' : '#FFD700',
        'earthly-green' : '#075159',
        'olive-green ' : '#6B8E23',
        'peach' : '#FCEDDA',
        'orange' : 'rgb(255,165,0)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.ayurkart.com/cdn/shop/files/kottakkal-ayurvedic-medicines-slider_2048x.jpg?v=1639652056')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
