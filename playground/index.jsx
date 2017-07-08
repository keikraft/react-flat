import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer as HotLoader} from 'react-hot-loader';
import {HashRouter as Router} from 'react-router-dom';

import App from './src/App';

const renderApp = () => {
  ReactDOM.render(
    <HotLoader>
      <Router><App /></Router>
    </HotLoader>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./src/App', renderApp);
}