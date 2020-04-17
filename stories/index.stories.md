```js script
import { html } from '@open-wc/demoing-storybook';
import '../granite-clipboard.js';

export default {
  title: 'GraniteClipboard',
  component: 'granite-clipboard',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# GraniteClipboard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add granite-clipboard
```

```js
import 'granite-clipboard/granite-clipboard.js';
```

```js preview-story
export const Simple = () => html`
  <granite-clipboard></granite-clipboard>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <granite-clipboard title="Hello World"></granite-clipboard>
`;
```
