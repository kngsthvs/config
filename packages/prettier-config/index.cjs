/** @type {import("prettier").Config} */
module.exports = {
  order: "alphabetical",
  plugins: [
    require("prettier-plugin-css-order"),
    require("prettier-plugin-organize-imports"),
  ],
};
