import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

import './styles.scss';

class Toast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      closing: false
    };

    this.timebar = '';
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  componentDidMount() {
    if (this.props.seconds && this.props.seconds !== 0) {
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
    const {type, className, theme, icon, iconClassName, message, seconds, children} = this.props;

    return (
      <div className={classnames('toast', {active: this.state.active, closing: this.state.closing}, type, className, theme)}>
        <div className="dismiss" onClick={this.handleDismiss}><span /><span /></div>
        <Icon className={iconClassName ? classnames(iconClassName) : 'material-icons md-light md-36'} value={icon || this.getIconFromToastType(type)} />
        <div className="body">
          <span className="text">{message}</span>
          {children}
        </div>
        {seconds && seconds !== 0 ? <div ref={(timebarElem) => (this.timebar = timebarElem)} className="timebar" style={{animationDuration: `${seconds}s`}} /> : null}
      </div>
    );
  }
}

Toast.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  message: PropTypes.string,
  seconds: PropTypes.number,
  children: PropTypes.node,
  onDismiss: PropTypes.func
};
Toast.defaultProps = {
  type: 'info',
  className: '',
  theme: '',
  icon: '',
  iconClassName: '',
  message: '',
  seconds: 0,
  children: null,
  onDismiss: () => {}
};

export default Toast;