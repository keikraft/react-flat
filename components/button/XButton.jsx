import React, { PropTypes } from 'react';
import classnames from 'classnames';
import xwaveFactory from '../wave/XWave';
import XIcon from '../icon/XIcon';

import './styles.scss';

const xbuttonFactory = (xwave) => {
  class XButton extends React.Component {
    static propTypes = {
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
      onMouseUp: PropTypes.func,
      children: PropTypes.node
    };

    static defaultProps = {
      theme: '',
      className: '',
      flat: false,
      raised: false,
      circular: false,
      mini: false,
      disabled: false
    };

    constructor(props) {
      super(props)

      this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseUp() {
      if (this.props.onMouseUp) {
        this.props.onMouseUp();
      }
    }

    render() {
      const { name, theme, className, inverse, icon, flat, raised, circular, mini, href, disabled, onMouseUp, children, ...other } = this.props;

      const element = href ? 'a' : 'button';
      const type = flat ? 'flat' : raised ? 'raised' : circular ? 'circular' : 'flat';
      const classes = classnames('button', className, theme, type, {mini: mini, inverse: inverse});
      const hasIcon = icon ? true : children ? true : false;

      const properties = {
        className: classes,
        href,
        onMouseUp: this.handleMouseUp,
        disabled,
        ...other
      };

      return React.createElement(element, properties,
        hasIcon ? <XIcon className={classnames({'material-icons': typeof(icon) === 'string'})} value={icon}/> : null,
        name && !circular ? <span className={classnames({'text': hasIcon})}>{name}</span> : null,
        children
      )
    }
  }

  return xwave(XButton);
}

const XButton = xbuttonFactory(xwaveFactory());
export { xbuttonFactory };
export default XButton;