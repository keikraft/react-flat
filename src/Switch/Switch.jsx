import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Switch = ({label, className, theme, checked, disabled, onChange}) => {
  const switchLabel = label ? <span className={classnames('text', {disabled})}>{label}</span> : null;

  const handleToggle = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={classnames('switch', className, theme)}>
      <input type="checkbox" defaultChecked={checked} disabled={disabled} onClick={handleToggle} />
      <span className="track">
        <span role="thumb" className="thumb" />
      </span>
      {switchLabel}
    </label>
  );
};

Switch.propTypes = {
  label: React.PropTypes.string,
  className: React.PropTypes.string,
  theme: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

Switch.defaultProps = {
  label: '',
  className: '',
  theme: 'default',
  checked: false,
  disabled: false,
  onChange: () => {}
};

export default Switch;