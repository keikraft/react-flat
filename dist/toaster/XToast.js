'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _XIcon = require('../icon/XIcon');

var _XIcon2 = _interopRequireDefault(_XIcon);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XToast = function (_React$Component) {
  _inherits(XToast, _React$Component);

  function XToast(props) {
    _classCallCheck(this, XToast);

    var _this = _possibleConstructorReturn(this, (XToast.__proto__ || Object.getPrototypeOf(XToast)).call(this, props));

    _this.state = {
      active: false,
      closing: false
    };
    _this.timebar = '';
    _this.handleDismiss = _this.handleDismiss.bind(_this);
    return _this;
  }

  _createClass(XToast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ active: true });

      if (this.props.seconds && this.props.seconds !== 0) {
        (function () {
          var self = _this2;

          _this2.timebar.addEventListener('animationend', function onAnimationEnd() {
            self.timebar.removeEventListener('animationend', onAnimationEnd);
            self.setState({ active: false, closing: true });
            setTimeout(self.props.onDismiss, 400);
          });
        })();
      }
    }
  }, {
    key: 'getIconFromToastType',
    value: function getIconFromToastType(toastType) {
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
  }, {
    key: 'handleDismiss',
    value: function handleDismiss() {
      if (this.props.onDismiss) {
        this.setState({ active: false, closing: true });
        setTimeout(this.props.onDismiss, 400);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          type = _props.type,
          className = _props.className,
          theme = _props.theme,
          icon = _props.icon,
          iconClassName = _props.iconClassName,
          message = _props.message,
          seconds = _props.seconds,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('toast', { active: this.state.active, closing: this.state.closing }, type, className, theme) },
        _react2.default.createElement(
          'div',
          { className: 'dismiss', onClick: this.handleDismiss },
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null)
        ),
        _react2.default.createElement(_XIcon2.default, { className: iconClassName ? (0, _classnames2.default)(iconClassName) : 'material-icons md-light md-36', value: icon ? icon : this.getIconFromToastType(type) }),
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
        seconds && seconds !== 0 ? _react2.default.createElement('div', { ref: function ref(timebar) {
            _this3.timebar = timebar;
          }, className: 'timebar', style: { animationDuration: seconds + 's' } }) : null
      );
    }
  }]);

  return XToast;
}(_react2.default.Component);

XToast.propTypes = {
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  message: _react.PropTypes.string,
  seconds: _react.PropTypes.number,
  children: _react.PropTypes.node,
  onDismiss: _react.PropTypes.func
};
XToast.defaultProps = {
  type: 'info',
  className: '',
  theme: ''
};
exports.default = XToast;