const { darken, lighten } = require("polished");
const { isDark } = require("./utils");

// Sensible defaults
const defaultConfig = {
  name: "Owlet",
  type: "Dark",
  fontStyle: ""
};

const defaultShades = {
  // Background + text are the key co'ors
  background: "#1e222a",
  text: "#737e83"
};

// These are the "Base16" colors we're to be using in our theme,
const defaultColors = {
  // Base
  red: "#EF5350",
  green: "#addb67",
  yellow: "#ffcb8b",
  blue: "#82AAFF",
  magenta: "#7e57c2",
  orange: "#F78C6C",
  cyan: "#80CBC4",
  white: "#d6deeb",
  // Bright
  brightRed: "#ff5874",
  brightGreen: "#d9f5dd",
  brightYellow: "#ffeb95",
  brightMagenta: "#c792ea",
  brightCyan: "#7fdbca",
  brightWhite: "#ffffff"
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
    // Borders
    border: `${borderColor}11`,
    borderLight: `${borderColor}33`
  };

  const remappedShades = {
    // Background
    backgroundPrimary: shadeConfig.background,

    // Tabs and Windows
    tabActiveBackground: shadeConfig.light,
    tabInactiveBackground: shadeConfig.dark,

    // List
    listInactiveSelectionBackground: shadeConfig.light,
    listFocusBackground: shadeConfig.dark,

    // Text
    textPrimary: shadeConfig.text,
    textLight: shadeConfig.textLight,
    textLighter: shadeConfig.textLighter,
    cursor: shadeConfig.textLight,
    selectionBackground: shadeConfig.lighter,
    quote: shadeConfig.quote,
    textSelectionBackground: shadeConfig.light,

    // Borders
    focusBorder: shadeConfig.light,
    activityBorder: shadeConfig.border,
    panelBorder: shadeConfig.borderLight,
    sidebarBorder: shadeConfig.border,
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

    // StatusBar
    statusBarBackground: shadeConfig.background,
    statusBarText: shadeConfig.textDark
  };

  // These are special colors only for the Terminal. Ideally, we'd want to
  // be using the same Base16 colors.
  // These will most likely be removed in the future.
  const termColors = {
    termRed: colors.red,
    termCyan: "#21c7a8",
    termGreen: "#22da6e",
    termBlack: "#575656",
    termYellow: colors.green
  };

  return {
    ...config,
    ...remappedShades,
    ...colors,
    ...termColors
  };
}

module.exports = generateColorScheme;
