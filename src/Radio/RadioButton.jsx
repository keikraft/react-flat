import React from 'react';
import classnames from 'classnames';

import './styles.scss';

function RadioButton({label, value, className, theme, checked, disabled, onChange}) {
  const handleClick = (event) => {
    if (!checked && !disabled && onChange) {
      onChange(event);
    }
  }

  return (
    <label className={classnames('radiobutton', className, theme)}>
      <input type="radio" value={value} onClick={handleClick} />
      <span className={classnames('radio', {disabled, checked})} />
      <span className={classnames('text', {disabled})}>{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

RadioButton.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false,
  onChange: () => {}
};

export default RadioButton;