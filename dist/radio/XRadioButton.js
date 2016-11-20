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

var XRadioButton = function XRadioButton(props) {
  var label = props.label,
      value = props.value,
      className = props.className,
      theme = props.theme,
      checked = props.checked,
      disabled = props.disabled,
      onChange = props.onChange;


  var handleClick = function handleClick(event) {
    if (!checked && !disabled && onChange) {
      onChange(event);
    }
  };

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)('radiobutton', className, theme) },
    _react2.default.createElement('input', { type: 'radio', value: value, onClick: handleClick }),
    _react2.default.createElement('span', { className: (0, _classnames2.default)('radio', { disabled: disabled, checked: checked }) }),
    _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)('text', { disabled: disabled }) },
      label
    )
  );
};

XRadioButton.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.any.isRequired,
  theme: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func
};

XRadioButton.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

exports.default = XRadioButton;