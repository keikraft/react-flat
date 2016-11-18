import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const XRadioButton = (props) => {
  const { label, value, className, theme, checked, disabled, onChange} = props;

  const handleClick = (event) => {
    if (!checked && !disabled && onChange) {
      onChange(event);
    }
  }

  return (
    <label className={classnames('radiobutton', className, theme)}>
      <input type="radio" value={value} onClick={handleClick}/>
      <span className={classnames('radio', { disabled: disabled, checked: checked })}/>
      <span className={classnames('text', { disabled: disabled })}>{label}</span>
    </label>
  );
};

XRadioButton.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

XRadioButton.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

export default XRadioButton;