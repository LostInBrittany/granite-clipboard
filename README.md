[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-clipboard)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/LostInBrittanygranite-clipboard.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-clipboard)

# granite-clipboard #

A simple, lightweight element wrapping-up [clipboard.js](https://clipboardjs.com/)


> Built on [lit-element](https://github.com/Polymer/lit-element)
>
> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid-1.x-2.x` branch](https://github.com/LostInBrittany/granite-clipboard/tree/polymer-hybrid-1.x-2.x).



## Doc & demo

[https://lostinbrittany.github.io/granite-clipboard](https://lostinbrittany.github.io/granite-clipboard)


## Usage example

<!---
```
<custom-element-demo>
  <template>
    <script src="@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="@granite-elements/granite-clipboard/granite-clipboard.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-clipboard text="Text to be copied">
    <div style="width:250px;height:50px;border-radius:5px;background-color:#aaaaff;cursor:pointer;">Click here</div>
</granite-clipboard> 
```


## Install


Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-clipboard 
```

Once installed, import it in your application:

import '@granite-elements/granite-clipboard/granite-clipboard.js';



## Running demos and tests in browser

1. Fork the `granite-clipboard` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) 
and the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) installed.

1. When in the `granite-clipboard` directory, run `npm install` to install dependencies.

1. Serve the project using Polyumer CLI:

    `polymer serve --npm`

1. Open the demo in the browser

    - http://127.0.0.1:8080/components/@greanite-elements/granite-clipboard/demo


## Attributes

Attribute     | Type      | Default  | Description
---           | ---       | ---      | ---
`text`        | *String*  | ``       | The text to copy
`action`      | *String*  | `copy`   | The action to do (either `copy` or `cut`)  


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)