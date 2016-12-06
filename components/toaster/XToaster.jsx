import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XToast from './XToast';

import './styles.scss';

const XToaster = (props) => {
  const { top, bottom, left, center, right, className, onRemoveToast, toasts } = props;
  const toasterPosition = top ? 'top' : bottom ? 'bottom' : 'top';
  const toasterSide = left ? 'left' : center ? 'center' : right ? 'right' : 'right';

  const handleRemoveToast = (toastKey) => {
    if (props.onRemoveToast) {
      props.onRemoveToast(toastKey);
    }
  }

  const renderToast = (toastKey, toastValues) => {
    const toastProps = {toastKey, ...toastValues};
    return (
      <XToast key={toastKey} {...toastProps} onDismiss={handleRemoveToast}/>
    );
  }

  return (
    <div className={classnames('toaster', toasterPosition, toasterSide, className)}>
      {Object.keys(toasts).map(toastKey => { return renderToast(toastKey, toasts[toastKey]) })}
    </div>
  );
}

XToaster.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
  toasts: PropTypes.object,
  onRemoveToast: PropTypes.func
};

XToaster.defaultProps = {
  className: '',
  toasts: {}
};

export default XToaster;