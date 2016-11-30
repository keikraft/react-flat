import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
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

        this.state = { waves: {} };
        this.waves = {};
        this.handleMouseDown = this.handleMouseDown.bind(this);
      }

      componentDidUpdate(prevProps, prevState) {
        if (Object.keys(prevState.waves).length < Object.keys(this.state.waves).length) {
          const self = this;
          const waveKey = this.getCurrentWaveKey();

          this.addEventListenerOnAnimationEnd(this.waves[waveKey], function onAnimationEnd() {
            self.removeEventListenerOnAnimationEnd(self.waves[waveKey], onAnimationEnd);
            self.setState({ waves: self.removeWave(waveKey, self.state.waves) });
          });
        }
      }

      componentWillUnmount() {
        Object.keys(this.state.waves).forEach(key => {
          this.state.waves[key].stopWave();
        });
      }

      addEventListenerOnAnimationEnd(element, cb) {
        element.addEventListener('animationend', cb);
        return true;
      }

      removeEventListenerOnAnimationEnd (element, cb) {
        element.removeEventListener('animationend', cb);
        return true;
      }

      getNewWaveKey() {
        this.waveCount = this.waveCount ? this.waveCount + 1 : 1;
        return `wave${this.waveCount}`;
      }

      getCurrentWaveKey() {
        return `wave${this.waveCount}`;
      }

      removeWave(key, waves) {
        const newObject = {};
        Object.keys(waves).filter(k => k !== key).forEach(k => { newObject[k] = waves[k]; });
        return newObject;
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

        const noActiveWaves = Object.keys(this.state.waves).length === 0;
        const key = this.props.multiple || noActiveWaves ? this.getNewWaveKey() : this.getCurrentWaveKey();

        const waveState = { top, left, width };
        this.setState(update(this.state, {
          waves: { [key]: { $set: waveState } }
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
        return (
          <span key={key} ref={c => { this.waves[key] = c; }} className={classnames('wave', className, theme)} style={{top, left, width, height: width, border}} disabled={disabled}/>
        );
      }

      render() {
        const { waves } = this.state;
        const { waveClassName, waveTheme, waveDisabled, children, ...componentProps } = this.props;

        return (
          <Component {...componentProps} onMouseDown={this.handleMouseDown}>
            {children}
            {Object.keys(waves).map(key => this.renderWave(key, waveClassName, waveTheme, waveDisabled, waves[key]))}
          </Component>
        );
      }
    }

    return XWaveComponent;
  };
};

export default xwaveFactory;