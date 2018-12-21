const defaultColors = require("./colors/default");
const { darken, lighten } = require("polished");

const BACKGROUND_COLOR = "#1e222a";
const FALLBACK_COLOR = "#1e222a";

/**
 * Checks to see if the theme is dark.
 * @param {Object} config The theme config.
 * @returns {boolean} The result.
 */
function isDark(config = defaultConfig) {
  const { type } = config;
  return type.toLowerCase() === "dark";
}

/**
 * Determines if a color is too dark.
 * @param {string} color The base color.
 * @returns {boolean} The result.
 */
function isTooDark(color = FALLBACK_COLOR) {
  return darken(0.1, color) === "#000";
}

/**
 * Generates the ideal selection background color.
 * @param {string} color The base color.
 * @returns {string} The generated background color.
 */
function getSelectionBackgroundColor(color = FALLBACK_COLOR) {
  const lightenValue = isTooDark(color) ? 0.12 : 0.07;

  return lighten(lightenValue, color);
}

function getLineHighlightBackground(color = FALLBACK_COLOR) {
  return isTooDark(color) ? "#ffffff07" : "#0003";
}

function getListFocusBackground(color = FALLBACK_COLOR) {
  return isTooDark(color) ? "#ffffff11" : "#0003";
}

function getButtonColors(
  props = { background: BACKGROUND_COLOR, colors: defaultColors, isMono: false }
) {
  const { background, colors, isMono } = props;

  const buttonBackground = isMono
    ? lighten(0.15, background)
    : `${colors.magenta}cc`;
  const buttonText = `${colors.brightWhite}cc`;
  const buttonHoverBackground = isMono
    ? lighten(0.1, background)
    : colors.magenta;

  return {
    buttonBackground,
    buttonText,
    buttonHoverBackground
  };
}

function getTerminalColors({ background } = { background: BACKGROUND_COLOR }) {
  // For now, these values are hard coded.
  return {
    termWhite: "#ffffff",
    termBlack: background,
    termBlue: "#82AAFF",
    termCyan: "#21c7a8",
    termGreen: "#22da6e",
    termMagenta: "#c792ea",
    termRed: "#EF5350",
    termYellow: "#ecc48d",
    termBrightWhite: "#ffffff",
    termBrightBlack: "#575656",
    termBrightBlue: "#82AAFF",
    termBrightCyan: "#7fdbca",
    termBrightGreen: "#22da6e",
    termBrightMagenta: "#c792ea",
    termBrightRed: "#EF5350",
    termBrightYellow: "#ffeb95"
  };
}

module.exports = {
  getButtonColors,
  getTerminalColors,
  getSelectionBackgroundColor,
  getLineHighlightBackground,
  getListFocusBackground,
  isTooDark,
  isDark
};
