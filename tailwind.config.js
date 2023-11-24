/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "css/input.css", "js/scripts.js"],
  theme: {
    extend: {
      colors: {
        noir: "#080808",
        bleu: "#2656EA",
        orange: "#FFC634",
        ocre: "#FFEDB5",
        beige: "#FFFBEE",
      },
      fontFamily: {
        champ: ["Champ"],
      },
      content: {
        "smiling-eyes": "url('../medias/img/smiling_eyes.png')",
      },
      padding: {
        "section-padding": "50px 120px",
      },
    },
  },
  plugins: [],
};
