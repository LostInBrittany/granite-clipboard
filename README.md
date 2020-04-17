[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-clipboard)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/LostInBrittanygranite-clipboard.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-clipboard)

# \<granite-clipboard>

A simple, lightweight element wrapping-up [clipboard.js](https://clipboardjs.com/).

Built on [lit-element](https://github.com/Polymer/lit-element) following the [open-wc](https://github.com/open-wc/open-wc) recommendation.

> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid-1.x-2.x` branch](https://github.com/LostInBrittany/granite-clipboard/tree/polymer-hybrid-1.x-2.x).


## Installation
```bash
npm i granite-clipboard
```

## Usage
```html
<script type="module">
  import 'granite-clipboard/granite-clipboard.js';
</script>

<granite-clipboard text="Text to be copied">
    <div style="width:250px;height:50px;border-radius:5px;background-color:#aaaaff;cursor:pointer;">Click here</div>
</granite-clipboard> 
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)