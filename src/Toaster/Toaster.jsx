import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Toast from './Toast';

import './styles.scss';

class Toaster extends React.Component {
  handleRemoveToast(toastKey) {
    if (this.props.onRemoveToast) {
      this.props.onRemoveToast(toastKey);
    }
  }

  renderToast(toastKey, toastProps) {
    return (
      <Toast key={toastKey} {...toastProps} onDismiss={this.handleRemoveToast.bind(this, toastKey)} />
    );
  }

  render() {
    const {top, bottom, left, center, right, className, toasts} = this.props;
    const toasterPosition = top ? 'top' : bottom ? 'bottom' : 'top';
    const toasterSide = left ? 'left' : center ? 'center' : right ? 'right' : 'right';

    return (
      <div className={classnames('toaster', toasterPosition, toasterSide, className)}>
        {Object.keys(toasts).map((toastKey) => this.renderToast(toastKey, toasts[toastKey]))}
      </div>
    );
  }
}

Toaster.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
  toasts: PropTypes.objectOf(PropTypes.object),
  onRemoveToast: PropTypes.func
};
Toaster.defaultProps = {
  top: false,
  bottom: false,
  left: false,
  center: false,
  right: false,
  className: '',
  toasts: {},
  onRemoveToast: () => {}
};

export default Toaster;