import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const XRadioButton = (props) => {
  const { label, className, theme, checked, disabled } = props;

  return (
      <input type="radio" defaultChecked={checked} disabled={disabled} value={value}>{label}</input>
  );
};

XRadioButton.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool
};

XRadioButton.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

export default XRadioButton;