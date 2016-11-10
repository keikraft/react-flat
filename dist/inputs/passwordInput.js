'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./inputs.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordInput = function PasswordInput(props) {
	var styles = props.styles,
	    placeholder = props.placeholder,
	    required = props.required,
	    onChange = props.onChange;


	return _react2.default.createElement('input', {
		type: 'password',
		className: styles,
		placeholder: placeholder,
		required: required,
		onChange: onChange
	});
};

PasswordInput.propTypes = {
	styles: _react2.default.PropTypes.string,
	placeholder: _react2.default.PropTypes.string,
	required: _react2.default.PropTypes.bool,
	onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = PasswordInput;