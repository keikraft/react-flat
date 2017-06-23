import React from 'react';
import {Route} from 'react-router-dom';

import PagesEnum from './pages.enum';

import Home from './components/content/home/Home';
import Badges from './components/content/badges/Badges';
import Buttons from './components/content/buttons/Buttons';
import Colors from './components/content/colors/Colors';
import Inputs from './components/content/inputs/Inputs';
import Selectors from './components/content/selectors/Selectors';
import Toaster from './components/content/toaster/Toaster';

export default [
  <Route key="home" path={PagesEnum.home} component={Home} />,
  <Route key="badges" path={PagesEnum.badges} component={Badges} />,
  <Route key="buttons" path={PagesEnum.buttons} component={Buttons} />,
  <Route key="colors" path={PagesEnum.colors} component={Colors} />,
  <Route key="inputs" path={PagesEnum.inputs} component={Inputs} />,
  <Route key="selectors" path={PagesEnum.selectors} component={Selectors} />,
  <Route key="toaster" path={PagesEnum.toaster} component={Toaster} />
];