const shades = {
  background: "#1e222a",
  dark: "#141820",
  light: "#2d3139",
  lighter: "#3c4048",
  text: "#737e83",
  textLight: "#cad3e8",
  textLighter: "#d7dbe0",
  textDark: "#555a6f",
  textQuote: "#697098",
  border: "#ffffff11",
  borderLight: "#ffffff33"
};

// These are the "Base16" colors we're to be using in our theme,
const colors = {
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

const aliases = {
  // Background
  backgroundPrimary: shades.background,

  // Tabs and Windows
  tabActiveBackground: shades.light,
  tabInactiveBackground: shades.dark,

  // List
  listInactiveSelectionBackground: shades.light,

  // Text
  textPrimary: shades.text,
  textLight: shades.textLight,
  textLighter: shades.textLighter,
  cursor: shades.textLight,
  selectionBackground: shades.lighter,
  quote: shades.quote,

  // Borders
  focusBorder: shades.light,
  activityBorder: shades.border,
  panelBorder: shades.borderLight,
  sidebarBorder: shades.border,
  ruler: shades.text,

  // Badge
  activityBadge: shades.text,

  // Input
  inputBackground: shades.dark,

  // Scrollbar
  scrollbarShadow: shades.background,
  scrollbarBackground: shades.lighter,

  // Line Number
  editorLineNumber: shades.textDark,

  // StatusBar
  statusBarBackground: shades.background,
  statusBarText: shades.textDark
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

module.exports = Object.assign({}, aliases, colors, termColors);
