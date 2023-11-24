/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "css/input.css", "js/scripts.js"],
  theme: {
    extend: {
      colors: {
        body: "#FFFBEE",
        noir: "#080808",
        violet: "#6652DF",
        lilas: "#C8BFFF",
        vert: "#CFF500",
        beige: "#FFFCFC",
      },
      fontFamily: {
        champ: ["Champ"],
      },
      content: {
        "smiling-eyes": "url('../medias/img/smiling_eyes.png')",
      },
      padding: {
        section: "50px 128px",
      },
    },
  },
  plugins: [],
};
