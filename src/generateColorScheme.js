const { darken, lighten } = require("polished");
const defaultColors = require("./colors/default");
const {
  isDark,
  getButtonColors,
  getSelectionBackgroundColor,
  getLineHighlightBackground,
  getListFocusBackground,
  getTerminalColors
} = require("./utils");

// Sensible defaults
const defaultConfig = {
  name: "Owlet",
  type: "Dark",
  fontStyle: "",
  isMono: false
};

const defaultShades = {
  // Background + text are the key co'ors
  background: "#1e222a",
  text: "#737e83"
};

/**
 * Generates the color map used by our template.json file.
 *
 * @param {Object} options Containing the shades and colors
 * @param {Object} options.config The theme's details.
 * @param {Object} options.shades The theme's shades
 * @param {Object} options.colors The theme's colors. Used for syntax highligting
 * @returns {Object}
 */
function generateColorScheme(
  options = {
    config: defaultConfig,
    shades: defaultShades,
    colors: defaultColors
  }
) {
  const config = { ...defaultConfig, ...options.config };
  const { background, text } = { ...defaultShades, ...options.shades };
  const colors = { ...defaultColors, ...options.colors };

  const isMono = config.isMono;
  const borderColor = isDark(config) ? "#ffffff" : "#000000";

  const shadeConfig = {
    // Backgrounds
    background,
    dark: darken(0.045, background),
    light: lighten(0.07, background),
    lighter: lighten(0.14, background),
    // Text
    text,
    textLight: lighten(0.325, text),
    textLighter: lighten(0.37, text),
    textDark: darken(0.125, text),
    textQuote: darken(0.04, text),
    textComment: darken(0.04, text),
    // Borders
    border: `${borderColor}11`,
    borderDark: `${borderColor}06`,
    borderLight: `${borderColor}33`,
    // Computed
    selectionBackground: getSelectionBackgroundColor(background),
    highlightLineBackground: getLineHighlightBackground(background),
    listFocusBackground: getListFocusBackground(background)
  };

  const remappedShades = {
    // Background
    backgroundPrimary: shadeConfig.background,

    // Tabs and Windows
    tabActiveBackground: shadeConfig.light,
    tabInactiveBackground: shadeConfig.dark,

    // List
    listInactiveSelectionBackground: shadeConfig.light,
    listFocusBackground: shadeConfig.listFocusBackground,

    // Text
    textPrimary: shadeConfig.text,
    textLight: shadeConfig.textLight,
    textLighter: shadeConfig.textLighter,
    textDark: shadeConfig.textDark,
    textComment: shadeConfig.textComment,
    cursor: shadeConfig.textLight,
    selectionBackground: shadeConfig.lighter,
    quote: shadeConfig.quote,
    textSelectionBackground: shadeConfig.selectionBackground,

    // Borders
    focusBorder: shadeConfig.light,
    activityBorder: shadeConfig.border,
    panelBorder: shadeConfig.borderLight,
    sidebarBorder: shadeConfig.border,
    statusBarBorder: shadeConfig.borderDark,
    tabBorder: shadeConfig.borderDark,
    tabBorderInactive: shadeConfig.border,
    titleBarBorder: shadeConfig.borderDark,
    ruler: shadeConfig.text,

    // Badge
    activityBadge: shadeConfig.text,

    // Input
    inputBackground: shadeConfig.dark,

    // Scrollbar
    scrollbarShadow: shadeConfig.background,
    scrollbarBackground: shadeConfig.lighter,

    // Line Number
    editorLineNumber: shadeConfig.textDark,
    editorLineNumberActive: shadeConfig.textLight,
    highlightLineBackground: shadeConfig.highlightLineBackground,

    // StatusBar
    statusBarBackground: shadeConfig.background,
    statusBarText: shadeConfig.text,
    statusBarItemBackground: shadeConfig.dark,

    // Preview
    peekViewResultBackground: shadeConfig.lighter,

    // Widget
    editorWidgetBackground: shadeConfig.light,
    editorWidgetBorder: shadeConfig.dark
  };

  const buttonColors = getButtonColors({ background, colors, isMono });
  const terminalColors = getTerminalColors({ background });

  return {
    ...config,
    ...remappedShades,
    ...colors,
    ...terminalColors,
    ...buttonColors
  };
}

module.exports = generateColorScheme;
