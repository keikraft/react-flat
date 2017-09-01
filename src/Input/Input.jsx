import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

function Input({type, name, placeholder, floating, hint, disabled, className, theme, icon, iconFont, error, value, onChange}) {
  const valueEntered = value !== null && value !== undefined && value !== '';
  const hasIcon = !!icon;
  const hasPlaceholder = !!placeholder;
  const hasError = !!error;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (onChange) {
      onChange(inputValue, event);
    }
  };

  return (
    <div className={classnames('input', className, theme, {floating, disabled})}>
      <input type={type} name={name} className={classnames({'with-icon': hasIcon}, {active: valueEntered})} value={value} disabled={disabled} onChange={handleChange} />
      {hasIcon ? <Icon iconFont={iconFont} value={icon} /> : null}
      {hasPlaceholder ? <label className={classnames({'with-icon': hasIcon, withHint: !hasIcon && hint})}>{placeholder}</label> : null}
      <div className="bar"><hr /><hr /></div>
      {hasError ? <span className="error">{error}</span> : null}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  floating: PropTypes.bool,
  hint: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconFont: PropTypes.string,
  value: React.PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  className: '',
  theme: 'grey',
  icon: '',
  iconFont: '',
  hint: false,
  floating: false,
  disabled: false,
  value: '',
  error: '',
  onChange: () => {}
};

export default Input;