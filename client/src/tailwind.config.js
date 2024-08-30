/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            dark: "#000000",
            darkHover: "#3D404A",
            light: "#f5f5f5",
            primary: "#39E079",
            danger: "#ef4444",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        animation: {
            "up-down": "up-down 2s ease-in-out infinite alternate",
        },
    },
},
  plugins: [],
}

