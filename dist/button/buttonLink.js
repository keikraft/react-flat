'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLink = function ButtonLink(props) {
  var name = props.name,
      type = props.type,
      url = props.url;


  return _react2.default.createElement(
    _Link2.default,
    { className: 'btn ' + type, to: url },
    name
  );
};

ButtonLink.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired,
  url: _react2.default.PropTypes.string.isRequired
};

exports.default = ButtonLink;