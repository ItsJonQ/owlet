/**
 * Checks to see if the theme is dark.
 * @param {Object} config The theme config.
 * @returns {boolean} The result.
 */
function isDark(config = defaultConfig) {
  const { type } = config;
  return type.toLowerCase() === "dark";
}

module.exports = {
  isDark
};
