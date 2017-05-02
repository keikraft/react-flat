'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XSlider = function (_React$Component) {
  _inherits(XSlider, _React$Component);

  function XSlider(props) {
    _classCallCheck(this, XSlider);

    var _this = _possibleConstructorReturn(this, (XSlider.__proto__ || Object.getPrototypeOf(XSlider)).call(this, props));

    _this.state = {
      active: false,
      dragging: false,
      value: 0
    };

    _this.track;
    _this.thumb;

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(XSlider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.value) {
        var _props = this.props,
            min = _props.min,
            max = _props.max,
            value = _props.value;


        value = value > max ? max : value < min ? min : value;
        this.setState({ value: value });
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      if (this.props.disabled) {
        return;
      }

      var position = event['clientX'] - this.getTrackOffset();
      this.setValueFromPosition(event, position);

      document.addEventListener('mousemove', this.handleDragMouseMove);
      document.addEventListener('mouseup', this.handleMouseEnd);

      // Cancel text selection
      event.preventDefault();
      this.thumb.focus();

      this.onDragStart(event);
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.disabled) {
        this.setState({
          active: false
        });
      }
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(event) {
      this.setState({
        dragging: true,
        active: true
      });

      if (this.props.onDragStart) {
        this.props.onDragStart(event);
      }
    }
  }, {
    key: 'onDragUpdate',
    value: function onDragUpdate(event, type) {
      var _this2 = this;

      if (this.dragRunning) {
        return;
      }
      this.dragRunning = true;

      requestAnimationFrame(function () {
        _this2.dragRunning = false;

        var source = type === 'touch' ? event.touches[0] : event;

        var position = void 0;
        if (isMouseControlInverted(_this2.props.axis)) {
          position = _this2.getTrackOffset() - source[mainAxisClientOffsetProperty[_this2.props.axis]];
        } else {
          position = source[mainAxisClientOffsetProperty[_this2.props.axis]] - _this2.getTrackOffset();
        }

        if (!_this2.props.disabled) {
          _this2.setValueFromPosition(event, position);
        }
      });
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(event) {
      this.setState({
        dragging: false,
        active: false
      });

      if (this.props.onDragStop) {
        this.props.onDragStop(event);
      }
    }
  }, {
    key: 'getTrackOffset',
    value: function getTrackOffset() {
      return this.track.getBoundingClientRect()['left'];
    }
  }, {
    key: 'getPercent',
    value: function getPercent(min, max, value) {
      var percent = (value - min) / (max - min);

      return isNaN(percent) ? 0 : percent;
    }
  }, {
    key: 'setValueFromPosition',
    value: function setValueFromPosition(event, position) {
      var positionMax = this.track['clientWidth'];
      position = position < 0 ? 0 : position > positionMax ? positionMax : position;

      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max,
          step = _props2.step;

      var value = position / positionMax * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      value = value < min ? min : value > max ? max : value;
      if (this.state.value !== value) {
        this.setState({ value: value });

        if (this.props.onChange) {
          this.props.onChange(value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          name = _props3.name,
          min = _props3.min,
          max = _props3.max,
          step = _props3.step,
          className = _props3.className,
          theme = _props3.theme,
          disabled = _props3.disabled,
          onChange = _props3.onChange;
      var value = this.state.value;

      var percent = this.getPercent(min, max, value);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('slider', className, theme), onMouseDown: this.handleMouseDown, onMouseUp: this.handleMouseUp },
        _react2.default.createElement(
          'div',
          { ref: function ref(node) {
              _this3.track = node;
            }, className: 'track-container' },
          _react2.default.createElement('div', { className: 'track-fill', style: { width: 'calc(' + percent * 100 + '%)' } }),
          _react2.default.createElement('div', { className: 'track-post', style: { width: 'calc(' + (1 - percent) * 100 + '%)' } }),
          _react2.default.createElement('div', { ref: function ref(node) {
              _this3.thumb = node;
            }, className: 'thumb', style: { left: percent === 0 ? '0%' : percent * 100 + '%' } })
        ),
        _react2.default.createElement('input', { type: 'hidden', name: name, min: min, max: max, step: step, value: value })
      );
    }
  }]);

  return XSlider;
}(_react2.default.Component);

XSlider.propTypes = {
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  step: _react.PropTypes.number,
  value: _react.PropTypes.number,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};
XSlider.defaultProps = {
  min: 0,
  max: 1,
  step: 0.01,
  value: 0,
  className: '',
  theme: 'grey',
  disabled: false
};
exports.default = XSlider;