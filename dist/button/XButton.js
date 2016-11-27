'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xbuttonFactory = undefined;

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

var xbuttonFactory = function xbuttonFactory(xwave) {
  var XButton = function XButton(props) {
    var name = props.name,
        theme = props.theme,
        className = props.className,
        inverse = props.inverse,
        icon = props.icon,
        flat = props.flat,
        raised = props.raised,
        circular = props.circular,
        mini = props.mini,
        href = props.href,
        disabled = props.disabled,
        onClick = props.onClick,
        children = props.children;


    var handleClick = function handleClick() {
      if (onClick) {
        onClick();
      }
    };

    var element = href ? 'a' : 'button';
    var type = flat ? 'flat' : raised ? 'raised' : circular ? 'circular' : 'flat';
    var classes = (0, _classnames2.default)('button', className, theme, type, { mini: mini, inverse: inverse });
    var hasIcon = icon ? true : children ? true : false;

    var properties = {
      className: classes,
      href: href,
      disabled: disabled
    };

    return _react2.default.createElement(element, properties, hasIcon ? _react2.default.createElement(_XIcon2.default, { className: (0, _classnames2.default)({ 'material-icons': typeof icon === 'string' }), value: icon }) : null, name && !circular ? _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)({ 'text': hasIcon }) },
      name
    ) : null, children);
  };

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
    onClick: _react.PropTypes.func,
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