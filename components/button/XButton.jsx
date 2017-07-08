import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import xwaveFactory from '../wave/XWave';
import XIcon from '../icon/XIcon';

import './styles.scss';

const xbuttonFactory = (XWave) => {
  const XButton = ({text, theme, className, inverse, icon, flat, raised, circular, mini, href, disabled, children, onMouseUp, ...rest}) => {
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
      hasIcon ? <XIcon value={icon} /> : null,
      text && !circular ? <span className={classnames({'icon-text': hasIcon})}>{text}</span> : null,
      children
    );
  };

  XButton.propTypes = {
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

  XButton.defaultProps = {
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

  return XWave ? XWave(XButton) : XButton;
};

const XButton = xbuttonFactory(xwaveFactory());
export {xbuttonFactory};
export default XButton;