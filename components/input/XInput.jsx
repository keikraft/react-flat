import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import XIcon from '../icon/XIcon';

const XInput = ({type, name, placeholder, floating, hint, disabled, className, theme, icon, iconClassName, error, value, onChange}) => {
  const valueEntered = value !== null && value !== undefined && value != '';
  const hasIcon = icon ? true : false;

  const handleChange = (event) => {
    const value = event.target.value;

    if (onChange) {
      onChange(value, event);
    }
  }

  return (
    <div className={classnames('input', className, theme, {floating: floating, disabled: disabled})}>
      <input type={type} name={name} className={classnames({withIcon: hasIcon}, {active: valueEntered})} value={value} onChange={handleChange} disabled={disabled}/>
      {icon ? <XIcon className={iconClassName ? classnames(iconClassName) : 'material-icons'} value={icon}/> : null}
      {placeholder ? <label className={classnames({withIcon: hasIcon, withHint: !hasIcon && hint})}>{placeholder}</label> : null}
      <div className="bar"><hr/><hr/></div>
      {error ? <span className="error">{error}</span> : null}
    </div>
  );
};

XInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  floating: PropTypes.bool,
  hint: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  value: React.PropTypes.any,
  onChange: PropTypes.func.isRequired
};

XInput.defaultProps = {
  type: 'text',
  className: '',
  theme: 'grey',
  hint: false,
  floating: false,
  disabled: false
};

export default XInput;