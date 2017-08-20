# <a href=''><img src='http://i.imgur.com/6mIDYUa.png'></a>

React Flat is a set of UI components made with and for [React](http://facebook.github.io/react/), mixing [Google's Material Design](https://material.google.com/) and [Flat Design](https://en.wikipedia.org/wiki/Flat_design).

## Installation

React Flat can be installed as an [npm package](https://www.npmjs.org/package/react-flat):

```bash
$ npm install --save react-flat
```

## Usage

Here is a quick example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Badge from 'react-flat/Badge';

function App() {
  return (
    <Badge icon="thumb_up" text="It works!" theme="green" />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## License

This project is licensed under the terms of the
[MIT license](https://github.com/k3ira/react-flat/blob/master/LICENSE)