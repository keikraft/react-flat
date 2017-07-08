import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

import RoutesEnum from '../../../router/routes.enum';

const SidebarPropTypes = {
  theme: PropTypes.string,
  collapsed: PropTypes.bool
};
const SidebarDefaultProps = {
  theme: 'red',
  collapsed: false
};

function Sidebar({theme, collapsed}) {
  const currentPage = window.location.hash.replace('#', '');

  return (
    <nav className={classnames('app-sidebar', theme, {collapsed})}>
      <div className="app-sidebar-content">
        <ul>
          <li><Link to={RoutesEnum.badges} className={classnames({active: RoutesEnum.badges === currentPage})}>Badges</Link></li>
          <li><Link to={RoutesEnum.buttons} className={classnames({active: RoutesEnum.buttons === currentPage})}>Buttons</Link></li>
          <li><Link to={RoutesEnum.colors} className={classnames({active: RoutesEnum.colors === currentPage})}>Colors</Link></li>
          <li><Link to={RoutesEnum.inputs} className={classnames({active: RoutesEnum.inputs === currentPage})}>Inputs</Link></li>
          <li><Link to={RoutesEnum.selectors} className={classnames({active: RoutesEnum.selectors === currentPage})}>Selectors</Link></li>
          <li><Link to={RoutesEnum.toaster} className={classnames({active: RoutesEnum.toaster === currentPage})}>Toaster</Link></li>
        </ul>
      </div>
    </nav>
  );
}

Sidebar.propTypes = SidebarPropTypes;
Sidebar.defaultProps = SidebarDefaultProps;

export default Sidebar;