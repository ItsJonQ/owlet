const shades = {
  background: "#1e222a",
  dark: "#141820",
  light: "#2d3139",
  lighter: "#3c4048",
  text: "#737e83",
  textLight: "#cad3e8",
  textDark: "#555a6f",
  textQuote: "#697098",
  border: "#ffffff11",
  borderLight: "#ffffff33"
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

// 21c7a8 - cyan

const colors = {
  // Base
  red: "#EF5350",
  green: "#addb67",
  yellow: "#ffcb8b",
  blue: "#82AAFF",
  white: "#d6deeb",
  magenta: "#7e57c2",
  orange: "#F78C6C",
  // Bright
  brightRed: "#ff5874",
  brightMagenta: "#c792ea",
  brightCyan: "#7fdbca",
  brightWhite: "#bec5d4",
  brightYellow: "#ffeb95",
  brightWhite: "#ffffff"
};

const termColors = {
  termRed: "#EF5350",
  termCyan: "#21c7a8",
  termGreen: "#22da6e",
  termBlack: "#575656",
  termYellow: colors.green
};

module.exports = Object.assign({}, aliases, colors, termColors);
