const baseColors = require("../colors/default");

const textColor = "#eeeeee";

const colors = Object.keys(baseColors).reduce((colors, key) => {
  return { ...colors, [key]: textColor };
}, {});

const config = {
  name: "Owlet (Mono)",
  type: "dark",
  isMono: true
};

const shades = {
  background: "#101010",
  text: "#888888"
};

module.exports = {
  config,
  shades,
  colors
};
