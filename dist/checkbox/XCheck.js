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

var XCheck = function XCheck(props) {
  var label = props.label,
      className = props.className,
      theme = props.theme,
      checked = props.checked,
      disabled = props.disabled;

  var showLabel = label ? _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)('text', { disabled: disabled }) },
    label
  ) : null;

  var handleToggle = function handleToggle(event) {
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)('checkbox', className, theme) },
    _react2.default.createElement('input', { type: 'checkbox', onClick: handleToggle, defaultChecked: checked, disabled: disabled }),
    _react2.default.createElement('span', { className: 'check' }),
    showLabel
  );
};

XCheck.propTypes = {
  label: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  theme: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func.isRequired
};

XCheck.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

exports.default = XCheck;