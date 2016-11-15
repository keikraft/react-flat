import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const XCheck = (props) => {
  const { label, className, theme, checked, disabled } = props;
  const showLabel = label ? <span className={classnames('text', { disabled: disabled })}>{label}</span> : null;

  const handleToggle = (e) => {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return (
    <label className={classnames('checkbox', className, theme)}>
      <input type="checkbox" onClick={handleToggle} defaultChecked={checked} disabled={disabled}/>
      <span className="check"/>
      {showLabel}
    </label>
  );
};

XCheck.propTypes = {
  label: React.PropTypes.string,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

XCheck.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

export default XCheck;