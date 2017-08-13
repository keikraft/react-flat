import React, {Children} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const RadioGroup = ({name, value, className, children, onChange}) => {
  const handleChange = (val) => {
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className={classnames('radiogroup', className)} name={name} value={value}>
      {Children.map(children, child => (
        React.cloneElement(child, {
          checked: child.props.value === value,
          onChange: handleChange.bind(this, child.props.value)
        })
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};
RadioGroup.defaultProps = {
  className: '',
  children: null
};

export default RadioGroup;