'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var xwaveFactory = function xwaveFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options = _extends({}, options),
      props = _objectWithoutProperties(_options, []);

  return function (Component) {
    var XWaveComponent = function (_React$Component) {
      _inherits(XWaveComponent, _React$Component);

      function XWaveComponent(props) {
        _classCallCheck(this, XWaveComponent);

        var _this = _possibleConstructorReturn(this, (XWaveComponent.__proto__ || Object.getPrototypeOf(XWaveComponent)).call(this, props));

        _this.state = { waves: {} };
        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
        return _this;
      }

      _createClass(XWaveComponent, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          var _this2 = this;

          if (Object.keys(prevState.waves).length < Object.keys(this.state.waves).length) {
            (function () {
              var self = _this2;
              var waveKey = _this2.getCurrentWaveKey();

              _this2.addEventListenerOnAnimationEnd(_this2.refs[waveKey], function onAnimationEnd(event) {
                self.removeEventListenerOnAnimationEnd(self.refs[waveKey], onAnimationEnd);
                self.setState({ waves: self.removeWave(waveKey, self.state.wave) });
              });
            })();
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          Object.keys(this.state.waves).forEach(function (key) {
            _this3.state.waves[key].stopWave();
          });
        }
      }, {
        key: 'addEventListenerOnAnimationEnd',
        value: function addEventListenerOnAnimationEnd(element, cb) {
          element.addEventListener('animationend webkitAnimationEnd oanimationend MSAnimationEnd', cb);
          return true;
        }
      }, {
        key: 'removeEventListenerOnAnimationEnd',
        value: function removeEventListenerOnAnimationEnd(element, cb) {
          element.removeEventListener('animationend webkitAnimationEnd oanimationend MSAnimationEnd', cb);
          return true;
        }
      }, {
        key: 'getNewWaveKey',
        value: function getNewWaveKey() {
          this.waveCount = this.waveCount ? this.waveCount + 1 : 1;
          return 'wave' + this.waveCount;
        }
      }, {
        key: 'getCurrentWaveKey',
        value: function getCurrentWaveKey() {
          return 'wave' + this.waveCount;
        }
      }, {
        key: 'removeWave',
        value: function removeWave(key, waves) {
          var newObject = {};
          Object.keys(waves).filter(function (k) {
            return k !== key;
          }).forEach(function (k) {
            newObject[k] = waves[k];
          });
          return newObject;
        }
      }, {
        key: 'getOffset',
        value: function getOffset(x, y) {
          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          return {
            top: y - top - height / 2,
            left: x - left - width / 2,
            width: width * this.props.length
          };
        }
      }, {
        key: 'createWave',
        value: function createWave(x, y) {
          var _getOffset = this.getOffset(x, y),
              top = _getOffset.top,
              left = _getOffset.left,
              width = _getOffset.width;

          var noActiveWaves = Object.keys(this.state.waves).length === 0;
          var key = this.props.multiple || noActiveWaves ? this.getNewWaveKey() : this.getCurrentWaveKey();

          // const stopWave = this.createStopWaveEventListener(key);
          var waveState = { top: top, left: left, width: width }; //, stopWave };
          this.setState((0, _immutabilityHelper2.default)(this.state, {
            waves: _defineProperty({}, key, { $set: waveState })
          }));
        }

        // createStopWaveEventListener(waveKey) {
        //   const stopWave = () => {
        //     document.removeEventListener('mouseup', stopWave);
        //     this.setState({ waves: update(this.state.waves, {
        //       [waveKey]: { $merge: { active: false } }
        //     })});
        //   };

        //   document.addEventListener('mouseup', stopWave);
        //   return stopWave;
        // }

      }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
          if (!this.props.disabled) {
            var x = event.pageX - (window.scrollX || window.pageXOffset);
            var y = event.pageY - (window.scrollY || window.pageYOffset);
            this.createWave(x, y);
          }
        }
      }, {
        key: 'renderWave',
        value: function renderWave(key, className, theme, disabled, _ref) {
          var top = _ref.top,
              left = _ref.left,
              width = _ref.width;

          return _react2.default.createElement(
            'span',
            { key: key, className: (0, _classnames2.default)('wave-wrapper', className, theme), disabled: disabled },
            _react2.default.createElement('span', { ref: key, role: 'wave', className: 'wave', style: { top: top, left: left, width: width, height: width } })
          );
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          var waves = this.state.waves;

          var _props = this.props,
              waveClassName = _props.waveClassName,
              waveTheme = _props.waveTheme,
              waveDisabled = _props.waveDisabled,
              children = _props.children,
              componentProps = _objectWithoutProperties(_props, ['waveClassName', 'waveTheme', 'waveDisabled', 'children']);

          return _react2.default.createElement(
            Component,
            _extends({}, componentProps, { onMouseDown: this.handleMouseDown }),
            children,
            Object.keys(waves).map(function (key) {
              return _this4.renderWave(key, waveClassName, waveTheme, waveDisabled, waves[key]);
            })
          );
        }
      }]);

      return XWaveComponent;
    }(_react2.default.Component);

    XWaveComponent.propTypes = {
      theme: _react.PropTypes.string,
      className: _react.PropTypes.string,
      length: _react.PropTypes.number,
      centered: _react.PropTypes.bool,
      multiple: _react.PropTypes.bool,
      disabled: _react.PropTypes.bool
    };
    XWaveComponent.defaultProps = {
      theme: '',
      className: '',
      length: 3,
      centered: false,
      multiple: true,
      disabled: false
    };
    ;

    return XWaveComponent;
  };
};

exports.default = xwaveFactory;