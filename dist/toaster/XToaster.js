'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _XToast = require('./XToast');

var _XToast2 = _interopRequireDefault(_XToast);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XToaster = function (_React$Component) {
  _inherits(XToaster, _React$Component);

  function XToaster(props) {
    _classCallCheck(this, XToaster);

    return _possibleConstructorReturn(this, (XToaster.__proto__ || Object.getPrototypeOf(XToaster)).call(this, props));
  }

  _createClass(XToaster, [{
    key: 'handleRemoveToast',
    value: function handleRemoveToast(toastKey) {
      if (this.props.onRemoveToast) {
        this.props.onRemoveToast(toastKey);
      }
    }
  }, {
    key: 'renderToast',
    value: function renderToast(toastKey, toastProps) {
      return _react2.default.createElement(_XToast2.default, _extends({ key: toastKey }, toastProps, { onDismiss: this.handleRemoveToast.bind(this, toastKey) }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          top = _props.top,
          bottom = _props.bottom,
          left = _props.left,
          center = _props.center,
          right = _props.right,
          className = _props.className,
          onRemoveToast = _props.onRemoveToast,
          toasts = _props.toasts;

      var toasterPosition = top ? 'top' : bottom ? 'bottom' : 'top';
      var toasterSide = left ? 'left' : center ? 'center' : right ? 'right' : 'right';

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('toaster', toasterPosition, toasterSide, className) },
        Object.keys(toasts).map(function (toastKey) {
          return _this2.renderToast(toastKey, toasts[toastKey]);
        })
      );
    }
  }]);

  return XToaster;
}(_react2.default.Component);

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