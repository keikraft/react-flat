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

var XInput = function XInput(props) {
  var type = props.type,
      placeholder = props.placeholder,
      pattern = props.pattern,
      maxlength = props.maxlength,
      required = props.required,
      className = props.className,
      theme = props.theme,
      icon = props.icon,
      iconClassName = props.iconClassName,
      value = props.value,
      onChange = props.onChange;

  var valueEntered = value !== null && value !== undefined && value != '';
  var hasIcon = icon ? true : false;

  var handleChange = function handleChange(event) {
    var value = event.target.value;

    if (onChange) {
      onChange(value, event);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('input', className, theme) },
    _react2.default.createElement('input', { type: type, className: (0, _classnames2.default)({ withIcon: hasIcon, active: valueEntered }), pattern: pattern, maxLength: maxlength, required: required, value: value, onChange: handleChange }),
    icon ? _react2.default.createElement(_XIcon2.default, { className: iconClassName ? (0, _classnames2.default)(iconClassName) : 'material-icons', value: icon }) : null,
    placeholder ? _react2.default.createElement(
      'label',
      { className: (0, _classnames2.default)({ withIcon: hasIcon }) },
      placeholder
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'bar' },
      _react2.default.createElement('hr', null),
      _react2.default.createElement('hr', null)
    )
  );
};

XInput.propTypes = {
  type: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  pattern: _react.PropTypes.string,
  maxlength: _react.PropTypes.number,
  required: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  value: _react2.default.PropTypes.any,
  onChange: _react.PropTypes.func.isRequired
};

XInput.defaultProps = {
  type: 'text',
  required: false,
  className: '',
  theme: 'grey',
  floating: true,
  disabled: false
};

exports.default = XInput;