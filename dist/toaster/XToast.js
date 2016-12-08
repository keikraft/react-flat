'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _XIcon = require('../icon/XIcon');

var _XIcon2 = _interopRequireDefault(_XIcon);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XToast = function XToast(props) {
  var toastKey = props.toastKey,
      type = props.type,
      className = props.className,
      theme = props.theme,
      icon = props.icon,
      iconClassName = props.iconClassName,
      message = props.message,
      msec = props.msec,
      delayActive = props.delayActive,
      children = props.children;


  var getIconFromToastType = function getIconFromToastType(toastType) {
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
  };

  var handleDismiss = function handleDismiss(key) {
    if (props.onDismiss) {
      props.onDismiss(key);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('toast', type, className, theme) },
    _react2.default.createElement(
      'div',
      { className: 'dismiss', onClick: handleDismiss.bind(undefined, toastKey) },
      _react2.default.createElement('span', null),
      _react2.default.createElement('span', null)
    ),
    _react2.default.createElement(_XIcon2.default, { className: iconClassName ? (0, _classnames2.default)(iconClassName) : 'material-icons md-light md-36', value: icon ? icon : getIconFromToastType(type) }),
    _react2.default.createElement(
      'div',
      { className: 'body' },
      _react2.default.createElement(
        'span',
        { className: 'text' },
        message
      ),
      children
    ),
    _react2.default.createElement('div', { className: 'delaybar', style: msec ? { transition: 'width ' + msec / 1000 + 's linear', width: delayActive ? '0' : '100%' } : null })
  );
};

XToast.propTypes = {
  toastKey: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  message: _react.PropTypes.string,
  msec: _react.PropTypes.number,
  delayActive: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onDismiss: _react.PropTypes.func
};

XToast.defaultProps = {
  type: 'info',
  className: '',
  theme: '',
  delayActive: false
};

exports.default = XToast;