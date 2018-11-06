[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-spinner)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/LostInBrittanygranite-spinner.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-spinner)

# granite-spinner #

A simple, lightweight spinner web component.


> Built on [lit-element](https://github.com/Polymer/lit-element)
>
> The old Polymer 2.x-1.x version is available on the [`polymer-1.x` branch](https://github.com/LostInBrittany/granite-spinner/tree/polymer-1.x).



## Doc & demo

[https://lostinbrittany.github.io/granite-spinner](https://lostinbrittany.github.io/granite-spinner)


## Usage example

<!---
```
<custom-element-demo>
  <template>
    <script src="@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="@granite-elements/granite-spinner/granite-spinner.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-spinner
    color="#ff4081" 
    line-width="2em" 
    active></granite-spinner>
```


## Install


Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-spinner 
```

Once installed, import it in your application:

import '@granite-elements/granite-spinner/granite-spinner.js';



## Running demos and tests in browser

1. Fork the `granite-spinner` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) 
and the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) installed.

1. When in the `granite-spinner` directory, run `npm install` to install dependencies.

1. Serve the project using Polyumer CLI:

    `polymer serve --npm`

1. Open the demo in the browser

    - http://127.0.0.1:8080/components/@greanite-elements/granite-spinner/demo


## Attributes

Attribute     | Type      | Default  | Description
---                 | ---       | ---       | ---
`active`            | *Boolean* | false     | When true, the spinner is shown
`hover`             | *Boolean* | false     | When true, the spinner hovers over the underlaying content
`size`              | *Number*  | `100px`   | The size of the spinner
`color`             | *String*  | `#28b6d8` | The color of the moving part of the spinner
`lineWidth`         | *String*  | `1.5em`   | The spinning element line width
`containerHeight`  | *Number*  | `150px`   | The size of the spinner container 


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)