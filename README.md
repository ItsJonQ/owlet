# 🦉 Owlet

[![Version](https://vsmarketplacebadge.apphb.com/version/itsjonq.owlet.svg)](https://marketplace.visualstudio.com/items?itemName=itsjonq.owlet)

> A series of simple VSCode themes

## Preview

### Default

![Default](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-default.jpg)

### Dracula

![Dracula](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-dracula.jpg)

### One

![One](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-one.jpg)

### Oceanic Next

![Oceanic Next](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-oceanic-next.jpg)

### Palenight

![palenight](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-palenight.jpg)

### Purple

![purple](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-purple.jpg)

## Simple

Sarah's (gorgeous) [Night Owl](https://github.com/sdras/night-owl-vscode-theme) is 90%+ perfect for me! There are just a couple of things that I wanted to adjust.
I've ~wasted~ spent many hours tweaking and [generating iTerm and Vim](https://github.com/ItsJonQ/base16-builder) themes. From this, I've learned that the easiest way (for me) to make fine-tune adjustments would be to distill the colour palette down to as few variables as possible.

## Generate

This is the magic sauce for Owlet's themes!

### Setup

This project only has a couple of dependencies, which it uses to generate the VS Code `theme.json` files.

To install the dependencies, run:

```
npm install
```

To build the theme file(s), run:

```
npm start
```

### Theme files

An Owlet theme only really requires a single shade, which makes up the background.

**Example**

```js
// themes/palenight.js
const colors = require("../colors/default");

const config = {
  name: "Owlet (Palenight)",
  type: "dark"
};

const shades = {
  background: "#292d3e"
};

module.exports = {
  config,
  shades,
  colors
};
```

The theme is generated into `/themes/`, with it's details added to `package.json` - ready for publishing!
