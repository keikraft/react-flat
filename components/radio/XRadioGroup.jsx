import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const XRadioGroup = (props) => {
  const handleToggle = (e) => {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return (
    <label className={classnames('radiobutton', className, theme)} onClick={handleToggle}>
      {props.children}
    </label>
  );
};

XRadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default XRadioGroup;