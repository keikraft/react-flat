'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XInput = function XInput(props) {
  var type = props.type,
      placeholder = props.placeholder,
      pattern = props.pattern,
      required = props.required,
      className = props.className,
      theme = props.theme,
      onChange = props.onChange;


  return _react2.default.createElement(
    'div',
    { className: 'input' },
    _react2.default.createElement(
      'label',
      { className: 'input-label' },
      placeholder
    ),
    _react2.default.createElement('input', { type: type, className: (0, _classnames2.default)(className, theme), pattern: pattern, required: required, onChange: onChange })
  );
};

XInput.propTypes = {
  type: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  pattern: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  onChange: _react.PropTypes.func.isRequired
};

XInput.defaultProps = {
  type: 'text',
  className: '',
  theme: 'grey'
};

exports.default = XInput;