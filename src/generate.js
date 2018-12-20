const fs = require("fs");
const path = require("path");
const glob = require("glob");
const template = require("lodash.template");

const baseThemeName = "owlet-color";
const fileName = "owlet-color-theme.json";

// Paths
const themePath = path.resolve(__dirname, "./themes/*.js");
const themeOutputPath = path.resolve(__dirname, "../themes");
const templatePath = path.resolve(__dirname, `./${fileName}`);

// Sensible defaults!
const defaultProps = {
  name: "Owlet",
  type: "Dark",
  fontStyle: ""
};

// Write
glob(themePath, (err, files) => {
  files.forEach(file => {
    const fileThemeName = path.basename(file).split(".")[0];
    const themeTemplateData = fs.readFileSync(templatePath, "utf8");
    const colors = require(file);
    const props = Object.assign({}, defaultProps, colors);
    const content = template(themeTemplateData)(props);

    const destFilePath = path.resolve(
      themeOutputPath,
      `${baseThemeName}-theme-${fileThemeName}.json`
    );

    fs.writeFileSync(destFilePath, content);
  });
});
