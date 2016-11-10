import React from 'react';
import './styles.scss';

const XSwitch = (props) => {
  const { label, checked, disabled } = props;
  const showLabel = label ? <span className="switch-text">{label}</span> : null;

  const handleToggle = (e) => {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return (
    <span>
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} defaultChecked={checked} disabled={disabled}/>
        <div className="slider"/>
      </label>
      {showLabel}
    </span>
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
  theme: 'grey',
  checked: false,
  disabled: false
};

export default XSwitch;