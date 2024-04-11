/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"], //tailwind duoc phep css nhung cho nao
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
      maxWidth: {
        600: "600px",
      },
      cursor: {
        pointer: "pointer",
      },
    },
  },
  plugins: [],
};

//dung de them cac class, gia tri ma tailwindcss khong co san
