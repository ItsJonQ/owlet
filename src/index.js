const fs = require("fs");
const path = require("path");
const template = require("lodash.template");
const colors = require("./colors");

const fileName = "owlet-color-theme.json";

// Find
const filePath = path.resolve(__dirname, `./${fileName}`);
const destFilePath = path.resolve(__dirname, `../themes/${fileName}`);

// Modify
const themeTemplateData = fs.readFileSync(filePath, "utf8");
const content = template(themeTemplateData)(colors);

// Write
fs.writeFileSync(destFilePath, content);
