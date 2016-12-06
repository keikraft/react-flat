import React, { PropTypes } from 'react';
import classnames from 'classnames';
import XIcon from '../icon/XIcon';

import './styles.scss';

const XToast = (props) => {
  const { toastKey, type, className, theme, icon, iconClassName, message, msec, delayActive, children } = props;

  const getIconFromToastType = (toastType) => {
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

  const handleDismiss = (key) => {
    if (props.onDismiss) {
      props.onDismiss(key);
    }
  };

  return (
    <div className={classnames('toast', type, className, theme)}>
        <div className="dismiss" onClick={handleDismiss.bind(this, toastKey)}><span></span><span></span></div>
        <XIcon className={iconClassName ? classnames(iconClassName) : 'material-icons md-light md-36'} value={icon ? icon : getIconFromToastType(type)}/>
        <div className="body">
          <span className="text">{message}</span>
          {children}
        </div>
        <div className="delaybar" style={msec ? {transition: `width ${msec/1000}s linear`, width: delayActive ? '0' : '100%'} : null} ></div>
    </div>
  );
};

XToast.propTypes = {
  toastKey: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  message: PropTypes.string,
  msec: PropTypes.number,
  delayActive: PropTypes.bool,
  children: PropTypes.node,
  onDismiss: PropTypes.func
};

XToast.defaultProps = {
  type: 'info',
  className: '',
  theme: '',
  delayActive: false
};

export default XToast;