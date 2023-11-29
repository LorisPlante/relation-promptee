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
        "roc-grotesk-heavy": ["roc-grotesk", "sans-serif"],
      },
      content: {
        "smiling-eyes": "url('../medias/img/smiling_eyes.png')",
      },
      padding: {
        desktop: "50px 128px",
        mobile: "25px 5vw",
      },
      boxShadow: {
        btn: "2px 2px 0px 2px #080808",
        btn2: "2px 2px 0px 2px #6652DF",
      },
      translate: {
        btn: "3px",
      },
    },
  },
  plugins: [],
};
