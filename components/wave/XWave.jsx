import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { OrderedMap } from 'immutable';
import classnames from 'classnames';

import './styles.scss';

const xwaveFactory = (options = {}) => {
  const {
    waveWidth = 15
  } = {...options};

  return (Component) => {
    class XWaveComponent extends React.Component {
      static propTypes = {
        theme: PropTypes.string,
        className: PropTypes.string,
        length: PropTypes.number,
        centered: PropTypes.bool,
        multiple: PropTypes.bool,
        disabled: PropTypes.bool
      };

      static defaultProps = {
        theme: '',
        className: '',
        length: 2,
        centered: false,
        multiple: true,
        disabled: false
      };

      constructor(props) {
        super(props);

        this.state = { waves: OrderedMap() };
        this.waves = OrderedMap();
        this.handleMouseDown = this.handleMouseDown.bind(this);
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.waves.size < this.state.waves.size) {
          const self = this;
          const waveKey = this.getCurrentWaveKey();

          this.addEventListenerOnAnimationEnd(this.waves.get(waveKey), function onAnimationEnd() {
            self.removeEventListenerOnAnimationEnd(self.waves.get(waveKey), onAnimationEnd);
            self.removeWave(waveKey);
          });
        }
      }

      addEventListenerOnAnimationEnd(element, cb) {
        element.addEventListener('animationend', cb);
        return true;
      }

      removeEventListenerOnAnimationEnd (element, cb) {
        element.removeEventListener('animationend', cb);
        return true;
      }

      removeWave(waveKey) {
        this.waves = this.waves.delete(waveKey);
        this.setState(({waves}) => ({
          waves: waves.delete(waveKey)
        }));
      }

      getNewWaveKey() {
        this.waveCount = this.waveCount ? this.waveCount + 1 : 1;
        return `wave${this.waveCount}`;
      }

      getCurrentWaveKey() {
        return `wave${this.waveCount}`;
      }

      getOffset(x, y) {
        const { left, top, width } = ReactDOM.findDOMNode(this).getBoundingClientRect();
        const spread = width * this.props.length;

        return {
          top: y - top - waveWidth - spread / 2,
          left: x - left - waveWidth - spread / 2,
          width: spread
        };
      }

      createWave(x, y) {
        const { top, left, width } = this.getOffset(x, y);

        const noActiveWaves = this.state.waves.size === 0;
        const key = this.props.multiple || noActiveWaves ? this.getNewWaveKey() : this.getCurrentWaveKey();

        const waveState = { top, left, width };
        this.setState(({waves}) => ({
          waves: waves.set(key, waveState)
        }));
      }

      handleMouseDown(event) {
        if (!this.props.disabled) {
          const x = event.pageX - (window.scrollX || window.pageXOffset);
          const y = event.pageY - (window.scrollY || window.pageYOffset);
          this.createWave(x, y);
        }
      }

      renderWave(key, className, theme, disabled, { top, left, width }) {
        const border = `${waveWidth}px solid currentColor`;
        const waveRef = (wave) => {
          if (wave !== null) {
            this.waves = this.waves.set(key, wave);
          }
        };

        return (
          <span key={key} ref={waveRef} className={classnames('wave', className, theme)} style={{top, left, width, height: width, border}} disabled={disabled}/>
        );
      }

      render() {
        const waves = this.state.waves.toJS();
        const { waveClassName, waveTheme, waveDisabled, children, ...componentProps } = this.props;

        return (
          <Component {...componentProps} onMouseDown={this.handleMouseDown}>
            {children}
            {Object.keys(waves).map(waveKey => { return this.renderWave(waveKey, waveClassName, waveTheme, waveDisabled, waves[waveKey]); })}
          </Component>
        );
      }
    }

    return XWaveComponent;
  };
};

export default xwaveFactory;