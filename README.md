# granite-alert

> A set of [Bootstrap-like alert](http://getbootstrap.com/components/#alerts) elements.
> 
> Polymer 1.5 ready


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install LostInBrittany/granite-alert --save
```

Or [download as ZIP](https://github.com/LostInBrittany/granite-alert/archive/gh-pages.zip).## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/granite-alert/granite-alert.html">
    ```

3. Start using it!

    ```html
    <granite-alert level="danger">This is a serious alert!</granite-alert>
    ```


## Attributes

Attribute     | Type      | Default  | Description
---           | ---       | ---      | ---
`level`       | *String*  | `"info"` | The level of the alert 

Alowed values for `level`: `info`, `warning`, `danger` and `success`


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)