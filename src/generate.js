const fs = require("fs");
const path = require("path");
const glob = require("glob");
const mkdirp = require("mkdirp");
const template = require("lodash.template");
const pkg = require("../package.json");
const generateColorTheme = require("./generateColorScheme");
const { isDark } = require("./utils");

const baseThemeName = "owlet";

// Paths
const themePath = path.resolve(__dirname, "./themes/*.js");
const themeOutputPath = path.resolve(__dirname, "../themes");
const templatePath = path.resolve(__dirname, "./templates/owlet-theme.json");
const pkgPath = path.resolve(__dirname, "../package.json");

/**
 * Updates the package.json with theme details for the VS Code marketplace
 * @param {Array<Theme>} themeList A collection of theme details
 */
function updatePkg(themeList = []) {
  if (!themeList.length) return;
  const nextPkg = {
    ...pkg,
    contributes: {
      ...pkg.contributes,
      themes: themeList
    }
  };

  fs.writeFileSync(pkgPath, JSON.stringify(nextPkg, null, 2));
}

/**
 * Generates the themes and updates the package.json with details
 */
function generate() {
  // Create the theme directory
  mkdirp.sync(themeOutputPath);

  // Generate the themes!
  glob(themePath, (err, files) => {
    const themeList = [];

    console.log();
    console.log("🦉", "", "Generating themes!");
    console.log("🔍", "", `Found ${files.length} theme(s)`);
    console.log();

    files.forEach(file => {
      const fileThemeName = path.basename(file).split(".")[0];
      const themeTemplateData = fs.readFileSync(templatePath, "utf8");
      const themeData = require(file);

      const props = generateColorTheme(themeData);
      const content = template(themeTemplateData)(props);

      const themeFileName = `${baseThemeName}-theme-${fileThemeName}.json`;
      const destFilePath = path.resolve(themeOutputPath, themeFileName);

      fs.writeFileSync(destFilePath, content);

      // Add theme details for package.json
      const themePublishProps = {
        label: props.name,
        uiTheme: isDark(props) ? "vs-dark" : "vs-light",
        path: `./themes/${themeFileName}`
      };

      // Log
      console.log("Generated:", props.name, `[${props.type}]`);

      themeList.push(themePublishProps);
    });

    updatePkg(themeList);

    console.log();
    console.log("✨", "", "Done generating themes!");
    console.log();
  });
}

module.exports = generate;
