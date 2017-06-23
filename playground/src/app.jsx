import './layout/index.scss';
import './layout/fonts/_roboto.scss';
import './layout/icons/_material-icons.scss';

import React from 'react';

import Navbar from './components/layout/navbar/Navbar';
import Sidebar from './components/layout/sidebar/Sidebar';
import ContentRoutes from './ContentRoutes';

class App extends React.Component {
  state = {
    sidebarCollapsed: false
  };

  handleToggleSidebar = () => {
    const sidebarCollapsed = !this.state.sidebarCollapsed;
    this.setState({sidebarCollapsed});
  };

  render() {
    return (
      <div className="app-main">
        <Navbar onToggleSidebar={this.handleToggleSidebar} />
        <div className="app-content-wrapper">
          <Sidebar collapsed={this.state.sidebarCollapsed} />
          <div className="app-content">
            {ContentRoutes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;