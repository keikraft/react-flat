import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Checkbox({label, className, theme, checked, disabled, onChange}) {
  const checkboxLabel = label ? <span className={classnames('text', {disabled})}>{label}</span> : null;

  const handleToggle = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={classnames('checkbox', className, theme)}>
      <input type="checkbox" defaultChecked={checked} disabled={disabled} onClick={handleToggle} />
      <span className="check" />
      {checkboxLabel}
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  label: '',
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false,
  onChange: () => { return null; }
};

export default Checkbox;