import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XToast from './XToast';

import './styles.scss';

class XToaster extends React.Component {
  static propTypes = {
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    center: PropTypes.bool,
    right: PropTypes.bool,
    className: PropTypes.string,
    toasts: PropTypes.object,
    onRemoveToast: PropTypes.func
  };

  static defaultProps = {
    className: '',
    toasts: {}
  };

  constructor(props) {
    super(props);
  }

  handleRemoveToast(toastKey) {
    if (this.props.onRemoveToast) {
      this.props.onRemoveToast(toastKey);
    }
  }

  renderToast(toastKey, toastProps) {
    return (
      <XToast key={toastKey} {...toastProps} onDismiss={this.handleRemoveToast.bind(this, toastKey)}/>
    );
  }

  render() {
    const { top, bottom, left, center, right, className, onRemoveToast, toasts } = this.props;
    const toasterPosition = top ? 'top' : bottom ? 'bottom' : 'top';
    const toasterSide = left ? 'left' : center ? 'center' : right ? 'right' : 'right';

    return (
      <div className={classnames('toaster', toasterPosition, toasterSide, className)}>
        {Object.keys(toasts).map(toastKey => { return this.renderToast(toastKey, toasts[toastKey]) })}
      </div>
    );
  }
}

export default XToaster;