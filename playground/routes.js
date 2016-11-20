import React from 'react';
import Route from 'react-router/lib/Route';

import App from './src/app.jsx';
import Buttons from './src/components/buttons/buttons.jsx';
import Selectors from './src/components/selectors/selectors.jsx';
import Colors from './src/components/colors/colors.jsx';

export default (
  <Route path="/app" component={App}>
    <Route path="/app/buttons" component={Buttons}/>
    <Route path="/app/selectors" component={Selectors}/>
    <Route path="/app/colors" component={Colors}/>
  </Route>
);