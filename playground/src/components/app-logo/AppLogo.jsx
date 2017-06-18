import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const AppLogoPropTypes = {
  color: PropTypes.string
};

const AppLogoDefaultProps = {
  color: 'red'
};

function AppLogo({color}) {
  return (
    <div className={classnames('app-logo', color)}>
      <span className="rect-left" />
      <span className="rect-right-up" />
      <span className="rect-right-down" />
      <span className="rect-center" />
    </div>
  );
}

AppLogo.propTypes = AppLogoPropTypes;
AppLogo.defaultProps = AppLogoDefaultProps;

export default AppLogo;