import React from 'react';

import './inputs.scss';

let PasswordInput = (props) => {
  const { styles, placeholder, required, onChange } = props;

  return (
    <input
      type="password"
      className={styles}
      placeholder={placeholder}
      required={required}
      onChange={onChange}/>
  );
};

PasswordInput.propTypes = {
  styles: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

export default PasswordInput;