import './layout/index.scss';
import './layout/fonts/_roboto.scss';
import './layout/icons/_material-icons.scss';

import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from 'components/layout/navbar/Navbar';
import Sidebar from 'components/layout/sidebar/Sidebar';
import Home from 'components/content/home/Home';
import ContentRoutes from 'router/ContentRoutes';
import RoutesEnum from 'router/routes.enum';


class App extends React.Component {
  state = {
    theme: 'red',
    sidebarCollapsed: true
  };
  themeColors = ['red', 'pink', 'purple', 'blue', 'aqua', 'green', 'yellow', 'orange', 'brown', 'grey'];

  handleToggleSidebar = () => {
    const sidebarCollapsed = !this.state.sidebarCollapsed;
    this.setState({sidebarCollapsed});
  };

  handleThemeSelect = (theme) => {
    this.setState({theme});
  };

  handleHomeMount = () => {
    this.setState({sidebarCollapsed: true});
  }

  handleHomeUnmount = () => {
    this.setState({sidebarCollapsed: false});
  }

  renderHome = (props) => {
    return <Home {...props} theme={this.state.theme} onMount={this.handleHomeMount} onUnmount={this.handleHomeUnmount} />;
  };

  render() {
    const {theme, sidebarCollapsed} = this.state;

    return (
      <div className="app-main">
        <Navbar themeColors={this.themeColors} theme={theme} onToggleSidebar={this.handleToggleSidebar} onThemeSelect={this.handleThemeSelect} />
        <div className="app-content-wrapper">
          <Sidebar theme={theme} collapsed={sidebarCollapsed} />
          <div className="app-content">
            <Route key="home" path={RoutesEnum.home} render={this.renderHome} />
            <ContentRoutes theme={theme} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;