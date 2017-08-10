import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const XIconPropTypes = {
  iconFont: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  theme: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
const XIconDefaultProps = {
  iconFont: '',
  value: '',
  theme: '',
  className: '',
  onClick: () => {}
};

function XIcon({iconFont, value, theme, className, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const iconFontClass = typeof value === 'string' && iconFont === '' ? 'material-icons' : iconFont;

  return <span className={classnames('icon', iconFontClass, className, theme)} onClick={handleClick}>{value}</span>;
}

XIcon.propTypes = XIconPropTypes;
XIcon.defaultProps = XIconDefaultProps;

export default XIcon;