/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'yt-spec-base-background': '#0f0f0f'
      },
    },
  },
  plugins: [],
}
