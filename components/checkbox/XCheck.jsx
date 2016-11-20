import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './styles.scss';

const XCheck = (props) => {
  const { label, className, theme, checked, disabled } = props;
  const checkboxLabel = label ? <span className={classnames('text', { disabled: disabled })}>{label}</span> : null;

  const handleToggle = (event) => {
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  return (
    <label className={classnames('checkbox', className, theme)}>
      <input type="checkbox" onClick={handleToggle} defaultChecked={checked} disabled={disabled}/>
      <span className="check"/>
      {checkboxLabel}
    </label>
  );
};

XCheck.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

XCheck.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

export default XCheck;