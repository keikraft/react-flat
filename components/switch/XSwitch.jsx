import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const XSwitch = (props) => {
  const { label, className, theme, checked, disabled } = props;
  const showLabel = label ? <span className={classnames('text', { disabled: disabled })}>{label}</span> : null;

  const handleToggle = (event) => {
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  return (
    <label className={classnames('switch', className, theme)}>
      <input type="checkbox" onClick={handleToggle} defaultChecked={checked} disabled={disabled}/>
      <span className="track">
        <span role="thumb" className="thumb"/>
      </span>
      {showLabel}
    </label>
  );
};

XSwitch.propTypes = {
  label: React.PropTypes.string,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

XSwitch.defaultProps = {
  className: '',
  theme: 'default',
  checked: false,
  disabled: false
};

export default XSwitch;