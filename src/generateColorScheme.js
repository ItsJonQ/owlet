const defaultColors = require("./colors/refined");
const { getButtonColors, getShades, getTerminalColors } = require("./utils");

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
  const shades = { ...defaultShades, ...options.shades };
  const colors = { ...defaultColors, ...options.colors };

  const { background } = shades;
  const isMono = config.isMono;

  const shadeColors = getShades({ config, shades });

  const remappedShades = {
    // Background
    backgroundPrimary: shadeColors.background,
    backgroundLighter: shadeColors.lighter,

    // Tabs and Windows
    tabActiveBackground: shadeColors.light,
    tabInactiveBackground: shadeColors.slightlyDark,

    // List
    listInactiveSelectionBackground: shadeColors.light,
    listFocusBackground: shadeColors.listFocusBackground,

    // Text
    textPrimary: shadeColors.text,
    textLight: shadeColors.textLight,
    textLighter: shadeColors.textLighter,
    textDark: shadeColors.textDark,
    textComment: shadeColors.textComment,
    textQuote: shadeColors.textQuote,
    cursor: shadeColors.textLight,
    highlightBackground: shadeColors.light,
    selectionBackground: shadeColors.lighter,
    textSelectionBackground: shadeColors.selectionBackground,

    // Borders
    focusBorder: shadeColors.light,
    activityBorder: shadeColors.border,
    panelBorder: shadeColors.borderLight,
    sidebarBorder: shadeColors.border,
    statusBarBorder: shadeColors.borderDark,
    tabBorder: shadeColors.borderDark,
    tabBorderInactive: shadeColors.border,
    titleBarBorder: shadeColors.borderDark,
    ruler: shadeColors.text,

    // Badge
    activityBadge: shadeColors.text,

    // Breadcrumb
    breadcrumbBackground: shadeColors.dark,

    // Input
    inputBackground: shadeColors.dark,

    // Scrollbar
    scrollbarShadow: shadeColors.background,
    scrollbarBackground: shadeColors.lighter,

    // Line Number
    editorLineNumber: shadeColors.textDark,
    editorLineNumberActive: shadeColors.textLight,
    highlightLineBackground: shadeColors.highlightLineBackground,

    // StatusBar
    statusBarBackground: shadeColors.background,
    statusBarText: shadeColors.text,
    statusBarItemBackground: shadeColors.dark,

    // Preview
    peekViewResultBackground: shadeColors.lighter,

    // Widget
    editorWidgetBackground: shadeColors.light,
    editorWidgetBorder: shadeColors.dark
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
