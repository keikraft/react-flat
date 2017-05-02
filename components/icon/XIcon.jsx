import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const XIcon = (props) => {
  const { value, theme, className, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (<span className={classnames('icon', className, theme)} onClick={handleClick}>{value}</span>);
};

XIcon.propTypes = {
  value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
  ]),
  theme: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

XIcon.defaultProps = {
  value: '',
  theme: '',
  className: ''
}

export default XIcon;