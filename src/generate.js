const fs = require("fs");
const path = require("path");
const glob = require("glob");
const mkdirp = require("mkdirp");
const template = require("lodash.template");
const generateColorTheme = require("./generateColorScheme");

const baseThemeName = "owlet";
const fileName = "owlet-theme.json";

// Paths
const themePath = path.resolve(__dirname, "./themes/*.js");
const themeOutputPath = path.resolve(__dirname, "../themes");
const templatePath = path.resolve(__dirname, `./${fileName}`);

// Create the theme directory
mkdirp.sync(themeOutputPath);

// Generate the themes!
glob(themePath, (err, files) => {
  files.forEach(file => {
    const fileThemeName = path.basename(file).split(".")[0];
    const themeTemplateData = fs.readFileSync(templatePath, "utf8");
    const themeData = require(file);

    const props = generateColorTheme(themeData);
    const content = template(themeTemplateData)(props);

    const destFilePath = path.resolve(
      themeOutputPath,
      `${baseThemeName}-theme-${fileThemeName}.json`
    );

    fs.writeFileSync(destFilePath, content);
  });
});
