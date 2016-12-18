import React from 'react';
import Route from 'react-router/lib/Route';

import App from './src/app.jsx';
import Buttons from './src/components/buttons/buttons';
import Colors from './src/components/colors/colors';
import Inputs from './src/components/inputs/inputs';
import Selectors from './src/components/selectors/selectors';
import Toaster from './src/components/toaster/toaster';

export default (
  <Route path="/app" component={App}>
    <Route path="/app/buttons" component={Buttons}/>
    <Route path="/app/colors" component={Colors}/>
    <Route path="/app/inputs" component={Inputs}/>
    <Route path="/app/selectors" component={Selectors}/>
    <Route path="/app/toaster" component={Toaster}/>
  </Route>
);