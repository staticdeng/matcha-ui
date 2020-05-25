# matcha-ui

[![Build Status](https://travis-ci.org/staticdeng/matcha-ui.svg?branch=master)](https://travis-ci.org/staticdeng/matcha-ui)

## Install

```bash
npm i --save matcha-ui
```

## Quick Start

```js
import { Button } from 'matcha-ui'
import 'matcha-ui/dist/index.css'
export default {
  components: {
    Button
  }
}
```

You also need to add the CSS (later it will be changed to SCSS)

```css
:root {
  --button-height: 32px;
  --button-bg: white;
  --button-active-bg: #eee;
  --font-size: 14px;
  --border-radius: 4px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
```


