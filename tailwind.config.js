/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#a6ddf0",
        "yellow-1": '#f5c32c',
        "orange-1": '#fca61f',
        "black-1": "#242d49",
        "gray-1": "rgba(36,45,73,0.65)",
        hrColor: "#cfcdcd",
        "cardBG":"rgba(255,255,255,0.64)",
        "inputColor": "rgba(40,52,62,0.07)",
        photo : '#4cb256',
        video: "#4a4eb7",
        location: "#ef5757",
        schedule: "#e1ae4a"
      },
    },
  },
  plugins: [],
}
