/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "pages/temoignages.html", "css/input.css", "js/scripts.js"],
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
      content: {
        "smiling-eyes": "url('../medias/img/smiling_eyes.png')",
      },
      padding: {
        desktop: "75px 128px",
        mobile: "35px 5vw",
      },
      boxShadow: {
        btn: "2px 2px 0px 2px #080808",
        btn2: "2px 2px 0px 2px #6652DF",
      },
      fontSize: {
        h2desktop: "50px",
        h2mobile: "35px",
        h3desktop: "28px",
        h3mobile: "24px",
        h4: "24px",
        para: "16px",
        link: "16px",
      },
      fontFamily: {
        h2: "roc-grotesk, sans-serif",
        h3: "roc-grotesk, sans-serif",
        h4: "space-grotesk-variable, sans-serif",
        para: "space-grotesk-variable, sans-serif",
        link: "space-grotesk-variable, sans-serif",
        "roc-grotesk-heavy": "roc-grotesk, sans-serif",
        "space-grotesk-variable": "space-grotesk-variable, sans-serif",
      },
      fontWeight: {
        h2: "700",
        h3: "700",
        h4: "700",
      },
      lineHeight: {
        h2: "1",
        para: "1.5rem",
      },
    },
  },
  plugins: [],
};
