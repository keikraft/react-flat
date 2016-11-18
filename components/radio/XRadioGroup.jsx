import React, { PropTypes, Children } from 'react';
import classnames from 'classnames';

//import './styles.scss';

const XRadioGroup = (props) => {
  const { name, value, className, disabled, onChange } = props;

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={classnames('radiogroup', className)} name={name} value={value}>
      { Children.map(props.children, child => (
          React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: handleChange.bind(this, child.props.value)
          })
        )
      )}
    </div>
  );
};

XRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};


XRadioGroup.defaultPropTypes = {
  classNames: '',
  disabled: false
};

export default XRadioGroup;