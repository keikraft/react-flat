'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xbuttonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _XWave = require('../wave/XWave');

var _XWave2 = _interopRequireDefault(_XWave);

var _XIcon = require('../icon/XIcon');

var _XIcon2 = _interopRequireDefault(_XIcon);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xbuttonFactory = function xbuttonFactory(xwave) {
  var XButton = function (_React$Component) {
    _inherits(XButton, _React$Component);

    function XButton(props) {
      _classCallCheck(this, XButton);

      var _this = _possibleConstructorReturn(this, (XButton.__proto__ || Object.getPrototypeOf(XButton)).call(this, props));

      _this.handleMouseUp = _this.handleMouseUp.bind(_this);
      return _this;
    }

    _createClass(XButton, [{
      key: 'handleMouseUp',
      value: function handleMouseUp() {
        if (this.props.onMouseUp) {
          this.props.onMouseUp();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            name = _props.name,
            theme = _props.theme,
            className = _props.className,
            inverse = _props.inverse,
            icon = _props.icon,
            flat = _props.flat,
            raised = _props.raised,
            circular = _props.circular,
            mini = _props.mini,
            href = _props.href,
            disabled = _props.disabled,
            onMouseUp = _props.onMouseUp,
            children = _props.children,
            other = _objectWithoutProperties(_props, ['name', 'theme', 'className', 'inverse', 'icon', 'flat', 'raised', 'circular', 'mini', 'href', 'disabled', 'onMouseUp', 'children']);

        var element = href ? 'a' : 'button';
        var type = flat ? 'flat' : raised ? 'raised' : circular ? 'circular' : 'flat';
        var classes = (0, _classnames2.default)('button', className, theme, type, { mini: mini, inverse: inverse });
        var hasIcon = icon ? true : children ? true : false;

        var properties = _extends({
          className: classes,
          href: href,
          onMouseUp: this.handleMouseUp,
          disabled: disabled
        }, other);

        return _react2.default.createElement(element, properties, hasIcon ? _react2.default.createElement(_XIcon2.default, { className: (0, _classnames2.default)({ 'material-icons': typeof icon === 'string' }), value: icon }) : null, name && !circular ? _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)({ 'text': hasIcon }) },
          name
        ) : null, children);
      }
    }]);

    return XButton;
  }(_react2.default.Component);

  XButton.propTypes = {
    name: _react.PropTypes.string,
    theme: _react.PropTypes.string,
    className: _react.PropTypes.string,
    inverse: _react.PropTypes.bool,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    flat: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    circular: _react.PropTypes.bool,
    mini: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onMouseUp: _react.PropTypes.func,
    children: _react.PropTypes.node
  };
  XButton.defaultProps = {
    theme: '',
    className: '',
    flat: false,
    raised: false,
    circular: false,
    mini: false,
    disabled: false
  };


  return xwave(XButton);
};

var XButton = xbuttonFactory((0, _XWave2.default)());
exports.xbuttonFactory = xbuttonFactory;
exports.default = XButton;