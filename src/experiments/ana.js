const { darken, lighten } = require("polished");
// const colors = require("../colors/default");

const mainColor = "#289aff";
const baseDark = "#141820";
const baseLight = "#f9f9fb";
const subColor = darken(0.16, baseLight);
const subColorAlt = darken(0.35, baseLight);

const colors = {
  // Base
  red: subColorAlt,
  green: subColor,
  yellow: subColor,
  blue: mainColor,
  magenta: mainColor,
  cyan: subColor,
  white: baseLight,
  // Bright
  brightRed: subColor,
  brightGreen: subColor,
  brightBlue: subColor,
  brightYellow: subColor,
  brightMagenta: mainColor,
  brightCyan: subColor,
  brightWhite: baseLight,
  // Extra
  orange: subColor,
  gold: mainColor,
  softBlue: subColor,
  softMagenta: mainColor,
  pink: subColor
};

const config = {
  name: "Owlet (Ana)",
  type: "dark"
};

const shades = {
  background: baseDark
};

module.exports = {
  config,
  shades,
  colors
};
