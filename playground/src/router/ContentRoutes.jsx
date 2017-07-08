import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import RoutesEnum from './routes.enum';

import Installation from '../components/content/installation/Installation';
import Badges from '../components/content/badges/Badges';
import Buttons from '../components/content/buttons/Buttons';
import Colors from '../components/content/colors/Colors';
import Inputs from '../components/content/inputs/Inputs';
import Selectors from '../components/content/selectors/Selectors';
import Toaster from '../components/content/toaster/Toaster';

const ContentRoutesPropTypes = {
  theme: PropTypes.string
};
const ContentRoutesDefaultProps = {
  theme: 'red'
};

function ContentRoutes({theme}) {
  const renderRoute = (Component, props) => {
    return <Component theme={theme} {...props} />;
  };

  return (
    <Switch>
      <Route key="installation" path={RoutesEnum.installation} render={renderRoute.bind(this, Installation)} />
      <Route key="badges" path={RoutesEnum.badges} render={renderRoute.bind(this, Badges)} />
      <Route key="buttons" path={RoutesEnum.buttons} render={renderRoute.bind(this, Buttons)} />
      <Route key="colors" path={RoutesEnum.colors} render={renderRoute.bind(this, Colors)} />
      <Route key="inputs" path={RoutesEnum.inputs} render={renderRoute.bind(this, Inputs)} />
      <Route key="selectors" path={RoutesEnum.selectors} render={renderRoute.bind(this, Selectors)} />
      <Route key="toaster" path={RoutesEnum.toaster} render={renderRoute.bind(this, Toaster)} />
    </Switch>
  );
}

ContentRoutes.propTypes = ContentRoutesPropTypes;
ContentRoutes.defaultProps = ContentRoutesDefaultProps;

export default ContentRoutes;