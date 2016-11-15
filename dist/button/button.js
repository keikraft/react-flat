'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var name = props.name,
      type = props.type;


  return _react2.default.createElement(
    'button',
    { className: 'btn ' + type },
    name
  );
};

Button.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired
};

exports.default = Button;