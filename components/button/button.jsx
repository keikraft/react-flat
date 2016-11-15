import React from 'react';
import 'styles.scss';

let Button = (props) => {
  const { name, type } = props;

  return <button className={'btn ' + type}>{name}</button>;
};

Button.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
};

export default Button;