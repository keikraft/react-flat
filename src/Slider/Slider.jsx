import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      dragging: false,
      value: 0
    };

    this.trackElem = null;
    this.thumbElem = null;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentWillMount() {
    if (this.props.value) {
      const {min, max, value} = this.props;

      const newValue = value > max ? max : value < min ? min : value;
      this.setState({value: newValue});
    }
  }

  onDragStart(event) {
    this.setState({
      dragging: true,
      active: true,
    });

    if (this.props.onDragStart) {
      this.props.onDragStart(event);
    }
  }

  onDragUpdate(event) {
    if (this.dragRunning) {
      return;
    }
    this.dragRunning = true;

    requestAnimationFrame(() => {
      this.dragRunning = false;
      const position = this.getTrackOffset();

      if (!this.props.disabled) {
        this.setValueFromPosition(event, position);
      }
    });
  }

  onDragStop(event) {
    this.setState({
      dragging: false,
      active: false,
    });

    if (this.props.onDragStop) {
      this.props.onDragStop(event);
    }
  }

  getTrackOffset() {
    return this.trackElem.getBoundingClientRect().left;
  }

  getPercent(min, max, value) {
    const percent = (value - min) / (max - min);
    return isNaN(percent) ? 0 : percent;
  }

  setValueFromPosition(event, position) {
    const positionMax = this.trackElem.clientWidth;
    const positionCalc = position < 0 ? 0 : position > positionMax ? positionMax : position;

    const {min, max, step} = this.props;
    let value = (positionCalc / positionMax) * (max - min);
    value = Math.round(value / step) * (step + min);
    value = parseFloat(value.toFixed(5));

    value = value < min ? min : value > max ? max : value;
    if (this.state.value !== value) {
      this.setState({value});

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }

  handleMouseDown(event) {
    if (this.props.disabled) {
      return;
    }

    const position = event.clientX - this.getTrackOffset();
    this.setValueFromPosition(event, position);

    document.addEventListener('mousemove', this.handleDragMouseMove);
    document.addEventListener('mouseup', this.handleMouseEnd);

    // Cancel text selection
    event.preventDefault();
    this.thumbElem.focus();

    this.onDragStart(event);
  }

  handleMouseUp() {
    if (!this.props.disabled) {
      this.setState({
        active: false,
      });
    }
  }

  render() {
    const {min, max, step, className, theme, disabled} = this.props;
    const percent = this.getPercent(min, max, this.state.value);

    return (
      <div className={classnames('slider', className, theme, {disabled})} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <div ref={(trackElem) => (this.trackElem = trackElem)} className="track-container">
          <div className="track-fill" style={{width: `calc(${((percent) * 100)}%)`}} />
          <div className="track-post" style={{width: `calc(${((1 - percent) * 100)}%)`}} />
          <div ref={(thumbElem) => (this.thumbElem = thumbElem)} className="thumb" style={{left: percent === 0 ? '0%' : `${(percent * 100)}%`}} />
        </div>
        <input type="hidden" min={min} max={max} step={step} value={this.state.value} />
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  onDragStop: PropTypes.func,
  onDragStart: PropTypes.func,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  min: 0,
  max: 1,
  step: 0.01,
  value: 0,
  className: '',
  theme: 'grey',
  disabled: false,
  onDragStop: () => {},
  onDragStart: () => {},
  onChange: () => {}
};

export default Slider;