import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Icon({iconFont, value, theme, className, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const iconFontClass = typeof value === 'string' && iconFont === '' ? 'material-icons' : iconFont;

  return <span className={classnames('icon', iconFontClass, className, theme)} onClick={handleClick}>{value}</span>;
}

Icon.propTypes = {
  iconFont: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  theme: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  iconFont: '',
  value: '',
  theme: '',
  className: '',
  onClick: () => {}
};

export default Icon;