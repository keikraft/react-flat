import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XIcon from '../icon/XIcon';

import './styles.scss';

const XButton = (props) => {
  const { name, theme, className, inverse, icon, flat, raised, circular, mini, href, disabled, onClick, children } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  const element = href ? 'a' : 'button';
  const type = flat ? 'flat' : raised ? 'raised' : circular ? 'circular' : 'flat';
  const classes = classnames('button', className, theme, type, {mini: mini, inverse: inverse});
  const hasIcon = icon ? true : false;

  const properties = {
    className: classes,
    href,
    disabled
  };

  return React.createElement(element, properties,
    hasIcon ? <XIcon className={classnames({'material-icons': typeof(icon) === 'string'})} value={icon}/> : null,
    name && !circular ? <span className={classnames({'text': hasIcon})}>{name}</span> : null,
    children
  )
};

XButton.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
  ]),
  flat: PropTypes.bool,
  raised: PropTypes.bool,
  circular: PropTypes.bool,
  mini: PropTypes.bool,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};

XButton.defaultProps = {
  theme: '',
  className: '',
  flat: false,
  raised: false,
  circular: false,
  mini: false,
  disabled: false
}

export default XButton;