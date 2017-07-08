import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const AppLogoPropTypes = {
  color: PropTypes.string,
  small: PropTypes.bool,
  big: PropTypes.bool
};

const AppLogoDefaultProps = {
  color: 'red',
  small: false,
  big: false
};

function AppLogo({color, small, big}) {
  const size = small ? 'small' : big ? 'big' : '';

  return (
    <div className={classnames('app-logo', color, size)}>
      <span className="rect-left-up" />
      <span className="rect-left-down" />
      <span className="rect-right-up" />
      <span className="rect-right-down" />
      <span className="rect-center" />
    </div>
  );
}

AppLogo.propTypes = AppLogoPropTypes;
AppLogo.defaultProps = AppLogoDefaultProps;

export default AppLogo;