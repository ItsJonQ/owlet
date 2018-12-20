const { darken, lighten } = require("polished");

const FALLBACK_COLOR = "#000000";

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

module.exports = {
  getSelectionBackgroundColor,
  getLineHighlightBackground,
  getListFocusBackground,
  isTooDark,
  isDark
};
