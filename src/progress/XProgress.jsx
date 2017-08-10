import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProgressPropTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  className: PropTypes.string,
};
const ProgressDefaultProps = {
  max: 100,
  value: 0,
  success: false,
  warning: false,
  danger: false,
  className: '',
};

function Progress({max, value, success, warning, danger, className}) {
  const progressBarColor = success ? 'success-color' : warning ? 'warning-color' : danger ? 'danger-color' : 'primary-color';
  const progressValueColor = value < 7 ? 'grey' : 'white';
  return (
    <div className="progress">
      <progress max={max} value={value} className={classnames('progress-bar', progressBarColor, className)} />
      <span className={classnames('progress-value', progressValueColor)}>{value}</span>
    </div>
  );
}

Progress.propTypes = ProgressPropTypes;
Progress.defaultProps = ProgressDefaultProps;

export default Progress;