import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XIcon from '../icon/XIcon';

import './styles.scss';

const XInput = (props) => {
  const { type, placeholder, pattern, maxlength, required, className, theme, icon, iconClassName, value, onChange } = props;
  const valueEntered = value !== null && value !== undefined && value != '';
  const hasIcon = icon ? true: false;

  const handleChange = (event) => {
    const value = event.target.value;

    if (onChange) {
      onChange(value, event);
    }
  }

  return (
    <div className={classnames('input', className, theme)}>
      <input type={type} className={classnames({withIcon: hasIcon, active: valueEntered})} pattern={pattern} maxLength={maxlength} required={required} value={value} onChange={handleChange}/>
      {icon ? <XIcon className={iconClassName ? classnames(iconClassName) : 'material-icons'} value={icon}/> : null}
      {placeholder ? <label className={classnames({withIcon: hasIcon})}>{placeholder}</label> : null }
      <div className="bar"><hr/><hr/></div>
    </div>
  );
};

XInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  maxlength: PropTypes.number,
  required: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  value: React.PropTypes.any,
  onChange: PropTypes.func.isRequired
};

XInput.defaultProps = {
  type: 'text',
  required: false,
  className: '',
  theme: 'grey',
  floating: true,
  disabled: false
};

export default XInput;