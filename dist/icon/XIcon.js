'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XIcon = function XIcon(props) {
  var value = props.value,
      theme = props.theme,
      className = props.className,
      onClick = props.onClick;


  var handleClick = function handleClick() {
    if (onClick) {
      onClick();
    }
  };

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)('icon', className, theme), onClick: handleClick },
    value
  );
};

XIcon.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  theme: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

XIcon.defaultProps = {
  value: '',
  theme: '',
  className: ''
};

exports.default = XIcon;