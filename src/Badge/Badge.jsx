import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

function Badge({text, icon, iconRight, theme, inverse, small}) {
  const badgeColor = `badge-${theme}`;
  const badgeSize = small ? 'badge-small' : '';
  const hasIcon = !!icon;

  const BadgeIcon = hasIcon ? <Icon key="icon" className={classnames('badge-icon', {'material-icons': typeof icon === 'string'})} value={icon} /> : null;
  const Text = text ? <span key="text" className={classnames('badge-text', {hasIcon, right: iconRight})}>{text}</span> : null;

  return (
    <div className={classnames('badge', badgeColor, {inverse}, badgeSize)}>
      {iconRight ? [Text, BadgeIcon] : [BadgeIcon, Text]}
    </div>
  );
}

Badge.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  iconRight: PropTypes.bool,
  theme: PropTypes.string,
  inverse: PropTypes.bool,
  small: PropTypes.bool
};

Badge.defaultProps = {
  text: '',
  icon: '',
  iconRight: false,
  theme: '',
  inverse: false,
  small: false
};

export default Badge;