import React from 'react';

import './inputs.scss';

let EmailInput = (props) => {
  const { styles, placeholder, required, onChange } = props;

  return (
    <input
      type="email"
      className={styles}
      placeholder={placeholder}
      required={required}
      onChange={onChange}/>
  );
};

EmailInput.propTypes = {
  styles: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

export default EmailInput;