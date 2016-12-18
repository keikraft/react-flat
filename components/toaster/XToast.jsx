import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XIcon from '../icon/XIcon';

import './styles.scss';

class XToast extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    theme: PropTypes.string,
    icon: PropTypes.string,
    iconClassName: PropTypes.string,
    message: PropTypes.string,
    msec: PropTypes.number,
    children: PropTypes.node,
    onDismiss: PropTypes.func
  };

  static defaultProps = {
    type: 'info',
    className: '',
    theme: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      closing: false
    };
    this.timebar = '';
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  componentDidMount() {
    this.setState({active: true});

    if (this.props.msec) {
      const self = this;

      this.timebar.addEventListener('animationend', function onAnimationEnd() {
        self.timebar.removeEventListener('animationend', onAnimationEnd);
        self.setState({active: false, closing: true});
        setTimeout(self.props.onDismiss, 400);
      });
    }
  }

  getIconFromToastType(toastType) {
    switch (toastType) {
        case 'info':
        case 'warning':
        case 'error':
            return toastType;
        case 'success':
            return 'check';
        default:
            return 'code';
    }
  }

  handleDismiss() {
    if (this.props.onDismiss) {
      this.setState({active: false, closing: true});
      setTimeout(this.props.onDismiss, 400);
    }
  }

  render() {
    const { type, className, theme, icon, iconClassName, message, msec, children } = this.props;

    return (
      <div className={classnames('toast', {active: this.state.active, closing: this.state.closing}, type, className, theme)}>
          <div className="dismiss" onClick={this.handleDismiss}><span></span><span></span></div>
          <XIcon className={iconClassName ? classnames(iconClassName) : 'material-icons md-light md-36'} value={icon ? icon : this.getIconFromToastType(type)}/>
          <div className="body">
            <span className="text">{message}</span>
            {children}
          </div>
          {msec ? <div ref={timebar => { this.timebar = timebar; }} className="timebar" style={{animationDuration: `${msec/1000}s`}}></div> : null}
      </div>
    );
  }
}

export default XToast;