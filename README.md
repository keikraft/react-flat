# <a href='https://k3ira.github.io/react-flat-web' target='_blank'><img src='http://i.imgur.com/zHxviLb.png'></a>

[![npm version](https://img.shields.io/npm/v/react-flat.svg?style=flat-square)](https://www.npmjs.com/package/react-flat) [![Build Status](https://img.shields.io/travis/k3ira/react-flat/master.svg?style=flat-square)](https://travis-ci.org/k3ira/react-flat)

React Flat is a set of UI components made with and for [React](http://facebook.github.io/react/), mixing [Google's Material Design](https://material.google.com/) and [Flat Design](https://en.wikipedia.org/wiki/Flat_design).

<a href='https://k3ira.github.io/react-flat-web' target='_blank'>Here</a> you can see examples and how to get started

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
