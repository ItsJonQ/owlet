# 🦉 Owlet

[![Version](https://vsmarketplacebadge.apphb.com/version/itsjonq.owlet.svg)](https://marketplace.visualstudio.com/items?itemName=itsjonq.owlet)

> A series of simple VSCode themes

## Preview

### Default

> If you want something **dark** and relatively **neutral**.

![Default](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-default.jpg)

### Charcoal

> If you want something **really dark** (almost **black**).

![Charcoal](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-charcoal.jpg)

### Dracula

> If you want something **kinda dark** and with a **hint** of **purple**.

![Dracula](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-dracula.jpg)

### Espresso

> If you want something **dark** and **brown**.

![Espresso](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-espresso.jpg)

### Matcha

> If you want something **dark** and with a **hint** of **green**.

![Matcha](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-matcha.jpg)

### Mocha

> If you want something **kinda dark** and **brown**.

![Mocha](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-mocha.jpg)

### Mono

> If you want something **dark** and **colourless**!

![Mono](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-mono.jpg)

### Night Owl

> If you want something **dark**, **blue**, and **awesome**.

![Night Owl](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-night-owl.jpg)

### One

> If you want something **kinda dark** and relatively **neutral**.

![One](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-one.jpg)

### Oceanic Next

> If you want something **kinda dark** and with a **hint** of **green**.

![Oceanic Next](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-oceanic-next.jpg)

### Palenight

> If you want something **kinda dark** and with **some** **purple**.

![palenight](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-palenight.jpg)

### Purple

> If you want something **kinda dark** and with **lots** of **purple**.

![purple](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-purple.jpg)

### Slate

> If you want something **dark** and with a **hint** of **blue**.

![slate](https://raw.githubusercontent.com/ItsJonQ/owlet/master/images/owlet-slate.jpg)

The font in the above screenshots is [SF Mono](http://osxdaily.com/2018/01/07/use-sf-mono-font-mac/).

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

## See Also

- [Dark Refined Theme](https://github.com/ItsJonQ/dark-refined)
