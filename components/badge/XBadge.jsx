import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import XIcon from '../icon/XIcon';

import './styles.scss';

const XBadge = ({text, icon, iconRight, color, inverse, small}) => {
  const badgeColor = `badge-${color}`;
  const badgeSize = small ? 'badge-small' : '';
  const hasIcon = !!icon;

  const Icon = hasIcon ? <XIcon key="icon" className={classnames('badge-icon', {'material-icons': typeof icon === 'string'})} value={icon} /> : null;
  const Text = text ? <span key="text" className={classnames('badge-text', {hasIcon, right: iconRight})}>{text}</span> : null;

  return (
    <div className={classnames('badge', badgeColor, {inverse}, badgeSize)}>
      {iconRight ? [Text, Icon] : [Icon, Text]}
    </div>
  );
};

XBadge.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  small: PropTypes.bool
};

XBadge.defaultProps = {
  text: '',
  icon: '',
  iconRight: false,
  color: '',
  inverse: false,
  small: false
};

export default XBadge;