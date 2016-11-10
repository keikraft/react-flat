'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XSwitch = function XSwitch(props) {
  var label = props.label,
      checked = props.checked,
      disabled = props.disabled;

  var showLabel = label ? _react2.default.createElement(
    'span',
    { className: 'switch-text' },
    label
  ) : null;

  var handleToggle = function handleToggle(e) {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'label',
      { className: 'switch' },
      _react2.default.createElement('input', { type: 'checkbox', onClick: handleToggle, defaultChecked: checked, disabled: disabled }),
      _react2.default.createElement('div', { className: 'slider' })
    ),
    showLabel
  );
};

XSwitch.propTypes = {
  label: _react2.default.PropTypes.string,
  theme: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func.isRequired
};

XSwitch.defaultProps = {
  theme: 'grey',
  checked: false,
  disabled: false
};

exports.default = XSwitch;