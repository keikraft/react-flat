'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './styles.scss';

var XRadio = function XRadio(props) {
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

  var handleToggle = function handleToggle(e) {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)('radiobutton', className, theme) },
    _react2.default.createElement('input', { type: 'radio', onClick: handleToggle, defaultChecked: checked, disabled: disabled }),
    _react2.default.createElement('span', { className: 'radio' }),
    showLabel
  );
};

XRadio.propTypes = {
  label: _react2.default.PropTypes.string,
  theme: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func.isRequired
};

XRadio.defaultProps = {
  className: '',
  theme: 'grey',
  checked: false,
  disabled: false
};

exports.default = XRadio;