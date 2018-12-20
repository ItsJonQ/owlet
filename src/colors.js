const shades = {
  background: "#1e222a",
  dark: "#141820",
  light: "#2d3139",
  lighter: "#3c4048",
  text: "#737e83",
  textLight: "#cad3e8",
  textDark: "#555a6f",
  border: "#ffffff11",
  borderLight: "#ffffff33"
};

const colors = {
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
  editorLineNumber: shades.textDark
};

module.exports = colors;
