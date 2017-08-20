import React from 'react';
import PropTypes from 'prop-types';
import {OrderedMap} from 'immutable';

import './styles.scss';

const waveFactory = (options = {}) => {
  const {
    waveWidth = 15
  } = {...options};

  return (Component) => {
    class Wave extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          waves: OrderedMap()
        };

        this.elemRef = null;
        this.waveRefs = OrderedMap();

        this.handleMouseDown = this.handleMouseDown.bind(this);
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.waves.size < this.state.waves.size) {
          const self = this;
          const waveKey = this.getCurrentWaveKey();

          this.addEventListenerOnAnimationEnd(this.waveRefs.get(waveKey), function onAnimationEnd() {
            self.removeEventListenerOnAnimationEnd(self.waveRefs.get(waveKey), onAnimationEnd);
            self.removeWave(waveKey);
          });
        }
      }

      addEventListenerOnAnimationEnd(element, cb) {
        element.addEventListener('animationend', cb);
        return true;
      }

      removeEventListenerOnAnimationEnd(element, cb) {
        element.removeEventListener('animationend', cb);
        return true;
      }

      removeWave(waveKey) {
        this.waveRefs = this.waveRefs.delete(waveKey);
        this.setState((prevState) => {
          return {waves: prevState.waves.delete(waveKey)};
        });
      }

      getNewWaveKey() {
        this.waveCount = this.waveCount ? this.waveCount + 1 : 1;
        return `wave${this.waveCount}`;
      }

      getCurrentWaveKey() {
        return `wave${this.waveCount}`;
      }

      getOffset(element, {x, y}) {
        const {left, right, top, bottom, width} = element.getBoundingClientRect();
        const spread = width * this.props.length;

        const topOffset = this.props.centered
          ? ((bottom - top) / 2) - waveWidth - (spread / 2)
          : y - top - waveWidth - (spread / 2);

        const leftOffset = this.props.centered
          ? ((right - left) / 2) - waveWidth - (spread / 2)
          : x - left - waveWidth - (spread / 2);

        return {
          top: topOffset,
          left: leftOffset,
          width: spread
        };
      }

      createWave(element, position) {
        const noActiveWaves = this.state.waves.size === 0;
        const key = this.props.multiple || noActiveWaves ? this.getNewWaveKey() : this.getCurrentWaveKey();

        const waveState = this.getOffset(element, position);
        this.setState((prevState) => {
          return {waves: prevState.waves.set(key, waveState)};
        });
      }

      handleMouseDown(event) {
        if (!this.props.disabled) {
          const position = {
            x: event.pageX - (window.scrollX || window.pageXOffset),
            y: event.pageY - (window.scrollY || window.pageYOffset)
          };
          this.createWave(event.currentTarget, position);
        }
      }

      renderWave(key, {top, left, width}) {
        const border = `${waveWidth}px solid currentColor`;
        const waveRef = (wave) => {
          if (wave !== null) {
            this.waveRefs = this.waveRefs.set(key, wave);
          }
        };

        return (
          <span key={key} ref={waveRef} className="wave" style={{top, left, width, height: width, border}} />
        );
      }

      render() {
        const waves = this.state.waves.toJS();
        const {centered, length, children, ...componentProps} = this.props; // eslint-disable-line no-unused-vars

        return (
          <Component {...componentProps} onMouseDown={this.handleMouseDown}>
            {children}
            {Object.keys(waves).map((waveKey) => { return this.renderWave(waveKey, waves[waveKey]); })}
          </Component>
        );
      }
    }

    Wave.propTypes = {
      theme: PropTypes.string,
      className: PropTypes.string,
      length: PropTypes.number,
      centered: PropTypes.bool,
      multiple: PropTypes.bool,
      disabled: PropTypes.bool,
      children: PropTypes.element
    };

    Wave.defaultProps = {
      theme: '',
      className: '',
      length: 2,
      centered: false,
      multiple: true,
      disabled: false,
      children: null
    };

    return Wave;
  };
};

export default waveFactory;