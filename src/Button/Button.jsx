import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import waveFactory from '../Wave';
import Icon from '../Icon';

import './styles.scss';

const buttonFactory = (Wave) => {
  const Button = ({text, theme, className, inverse, icon, flat, raised, circular, mini, href, disabled, children, onMouseUp, ...rest}) => {
    const element = href ? 'a' : 'button';
    const type = flat ? 'flat' : raised ? 'raised' : circular ? 'circular' : 'flat';
    const classes = classnames('button', className, theme, type, {mini, inverse});
    const hasIcon = icon || children;

    const handleMouseUp = () => {
      if (onMouseUp) {
        onMouseUp();
      }
    };

    const props = {
      href,
      disabled,
      className: classes,
      onMouseUp: handleMouseUp,
      ...rest
    };

    return React.createElement(element, props,
      hasIcon ? <Icon value={icon} /> : null,
      text && !circular ? <span className={classnames({'icon-text': hasIcon})}>{text}</span> : null,
      children
    );
  };

  Button.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    inverse: PropTypes.bool,
    flat: PropTypes.bool,
    raised: PropTypes.bool,
    circular: PropTypes.bool,
    mini: PropTypes.bool,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    onMouseUp: PropTypes.func
  };

  Button.defaultProps = {
    text: '',
    theme: '',
    className: '',
    icon: '',
    inverse: false,
    flat: false,
    raised: false,
    circular: false,
    mini: false,
    href: '',
    disabled: false,
    children: null,
    onMouseUp: () => {}
  };

  return Wave ? Wave(Button) : Button;
};

const Button = buttonFactory(waveFactory());
export {buttonFactory};
export default Button;