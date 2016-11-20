'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XRadioGroup = function XRadioGroup(props) {
  var name = props.name,
      value = props.value,
      className = props.className,
      onChange = props.onChange;


  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(value);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('radiogroup', className), name: name, value: value },
    _react.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, {
        checked: child.props.value === value,
        onChange: handleChange.bind(undefined, child.props.value)
      });
    })
  );
};

XRadioGroup.propTypes = {
  name: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any.isRequired,
  className: _react.PropTypes.string,
  onChange: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node
};

XRadioGroup.defaultPropTypes = {
  classNames: '',
  disabled: false
};

exports.default = XRadioGroup;