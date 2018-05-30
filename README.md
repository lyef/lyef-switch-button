# Lyef Switch Button
[![Build Status](https://travis-ci.org/lyef/lyef-switch-button.svg?branch=master)](https://travis-ci.org/lyef/lyef-switch-button)
![Badge size](https://badge-size.herokuapp.com/lyef/lyef-switch-button/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/lyef/lyef-switch-button/master/dist/Main.min.js.svg?compression=gzip)
[![NPM version](https://badge-me.herokuapp.com/api/npm/lyef-switch-button.png)](http://badges.enytc.com/for/npm/lyef-switch-button)

![Switch Button](switch-button.gif)

> A switch button (on/off) React component.

## Demo

[Live examples](https://lyef.github.io/lyef-switch-button)

## Installation

```sh
$ npm install --save lyef-switch-button
```

*Remember to import the styles on `css/main.css` folder to your project.*

## Basic Usage

```jsx
import SwitchButton from 'lyef-switch-button';

...
render() {
    return (
        <SwitchButton
            id="my-button"
            labelLeft="left"
            labelRight="right"
            isChecked
            disabled
            action={callbackFunction}
        />
    );
}
...
```

## Props

- `id` (string)- required
- `labelLeft` (string) - create a label to the left of the button
- `labelRight` (string) - create a label to the right of the button
- `isChecked` (bool) - start the button as checked
- `disabled` (bool) - disable the button for user interaction
- `action` (func) - call a function when the input is changed

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/lyef-switch-button/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/lyef-switch-button/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)
