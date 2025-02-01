/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6FFF"
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}


/*gridTemplateColumns: { 'auto': 'repeat(auto-fill, minmax(200px, 1fr))' }
Customizes grid behavior in Tailwind CSS.
auto: Creates a responsive grid with flexible columns.
repeat(auto-fill, minmax(200px, 1fr)):
Automatically fills the row with as many columns as possible.
Each column is at least 200px wide but can grow to take up remaining space equally (1fr).
Result: A flexible, responsive grid that adjusts based on the container's width.
Let me know if you need fur */
