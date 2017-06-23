import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

import PagesEnum from '../../../pages.enum';

const SidebarPropTypes = {
  collapsed: PropTypes.bool
};
const SidebarDefaultProps = {
  collapsed: false
};

function Sidebar({collapsed}) {
  const currentPage = window.location.pathname;

  return (
    <nav className={classnames('app-sidebar', {collapsed})}>
      <div className="app-sidebar-content">
        <ul>
          <li><Link to={PagesEnum.badges} className={classnames({active: PagesEnum.badges === currentPage})}>Badges</Link></li>
          <li><Link to={PagesEnum.buttons} className={classnames({active: PagesEnum.buttons === currentPage})}>Buttons</Link></li>
          <li><Link to={PagesEnum.colors} className={classnames({active: PagesEnum.colors === currentPage})}>Colors</Link></li>
          <li><Link to={PagesEnum.inputs} className={classnames({active: PagesEnum.inputs === currentPage})}>Inputs</Link></li>
          <li><Link to={PagesEnum.selectors} className={classnames({active: PagesEnum.selectors === currentPage})}>Selectors</Link></li>
          <li><Link to={PagesEnum.toaster} className={classnames({active: PagesEnum.toaster === currentPage})}>Toaster</Link></li>
        </ul>
      </div>
    </nav>
  );
}

Sidebar.propTypes = SidebarPropTypes;
Sidebar.defaultProps = SidebarDefaultProps;

export default Sidebar;