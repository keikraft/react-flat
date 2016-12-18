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
      name = props.name,
      placeholder = props.placeholder,
      floating = props.floating,
      hint = props.hint,
      disabled = props.disabled,
      className = props.className,
      theme = props.theme,
      icon = props.icon,
      iconClassName = props.iconClassName,
      error = props.error,
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
    { className: (0, _classnames2.default)('input', className, theme, { floating: floating, disabled: disabled }) },
    _react2.default.createElement('input', { type: type, name: name, className: (0, _classnames2.default)({ withIcon: hasIcon }, { active: valueEntered }), value: value, onChange: handleChange, disabled: disabled }),
    icon ? _react2.default.createElement(_XIcon2.default, { className: iconClassName ? (0, _classnames2.default)(iconClassName) : 'material-icons', value: icon }) : null,
    placeholder ? _react2.default.createElement(
      'label',
      { className: (0, _classnames2.default)({ withIcon: hasIcon, withHint: !hasIcon && hint }) },
      placeholder
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'bar' },
      _react2.default.createElement('hr', null),
      _react2.default.createElement('hr', null)
    ),
    error ? _react2.default.createElement(
      'span',
      { className: 'error' },
      error
    ) : null
  );
};

XInput.propTypes = {
  type: _react.PropTypes.string,
  name: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  floating: _react.PropTypes.bool,
  hint: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  value: _react2.default.PropTypes.any,
  onChange: _react.PropTypes.func.isRequired
};

XInput.defaultProps = {
  type: 'text',
  className: '',
  theme: 'grey',
  hint: false,
  floating: false,
  disabled: false
};

exports.default = XInput;