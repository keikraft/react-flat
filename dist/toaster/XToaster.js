'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _XToast = require('./XToast');

var _XToast2 = _interopRequireDefault(_XToast);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XToaster = function XToaster(props) {
  var top = props.top,
      bottom = props.bottom,
      left = props.left,
      center = props.center,
      right = props.right,
      className = props.className,
      onRemoveToast = props.onRemoveToast,
      toasts = props.toasts;

  var toasterPosition = top ? 'top' : bottom ? 'bottom' : 'top';
  var toasterSide = left ? 'left' : center ? 'center' : right ? 'right' : 'right';

  var handleRemoveToast = function handleRemoveToast(toastKey) {
    if (props.onRemoveToast) {
      props.onRemoveToast(toastKey);
    }
  };

  var renderToast = function renderToast(toastKey, toastValues) {
    var toastProps = _extends({ toastKey: toastKey }, toastValues);
    return _react2.default.createElement(_XToast2.default, _extends({ key: toastKey }, toastProps, { onDismiss: handleRemoveToast }));
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('toaster', toasterPosition, toasterSide, className) },
    Object.keys(toasts).map(function (toastKey) {
      return renderToast(toastKey, toasts[toastKey]);
    })
  );
};

XToaster.propTypes = {
  top: _react.PropTypes.bool,
  bottom: _react.PropTypes.bool,
  left: _react.PropTypes.bool,
  center: _react.PropTypes.bool,
  right: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  toasts: _react.PropTypes.object,
  onRemoveToast: _react.PropTypes.func
};

XToaster.defaultProps = {
  className: '',
  toasts: {}
};

exports.default = XToaster;