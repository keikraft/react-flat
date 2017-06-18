import './layout/fonts/_roboto.scss';
import './layout/icons/_material-icons.scss';
import './layout/index.scss';

import React from 'react';
import {Route, Link} from 'react-router-dom';
import classnames from 'classnames';

import Home from './home/Home';
import Badges from './components/badges/Badges';
import Buttons from './components/buttons/Buttons';
import Colors from './components/colors/Colors';
import Inputs from './components/inputs/Inputs';
import Selectors from './components/selectors/Selectors';
import Toaster from './components/toaster/Toaster';

import logoImage from './layout/images/red_logo_48x48.png';

const Pages = {
  home: '/home',
  badges: '/app/badges',
  buttons: '/app/buttons',
  colors: '/app/colors',
  inputs: '/app/inputs',
  selectors: '/app/selectors',
  toaster: '/app/toaster'
};

function App() {
  const currentPage = window.location.pathname;

  return (
    <div>
      <header>
        <Link className="title" to={Pages.home}>
          <img alt="" src={logoImage} />
          <span>React-Flat</span>
        </Link>
        <nav>
          <ul>
            <li><Link to={Pages.home}>Components</Link></li>
            <li><a href="https://github.com/k3ira">Github</a></li>
          </ul>
        </nav>
      </header>
      <aside>
        <nav>
          <ul>
            <li><Link to={Pages.badges} className={classnames({active: Pages.badges === currentPage})}>Badges</Link></li>
            <li><Link to={Pages.buttons} className={classnames({active: Pages.buttons === currentPage})}>Buttons</Link></li>
            <li><Link to={Pages.colors} className={classnames({active: Pages.colors === currentPage})}>Colors</Link></li>
            <li><Link to={Pages.inputs} className={classnames({active: Pages.inputs === currentPage})}>Inputs</Link></li>
            <li><Link to={Pages.selectors} className={classnames({active: Pages.selectors === currentPage})}>Selectors</Link></li>
            <li><Link to={Pages.toaster} className={classnames({active: Pages.toaster === currentPage})}>Toaster</Link></li>
          </ul>
        </nav>
      </aside>
      <article>
        <Route path={Pages.home} component={Home} />
        <Route path={Pages.badges} component={Badges} />
        <Route path={Pages.buttons} component={Buttons} />
        <Route path={Pages.colors} component={Colors} />
        <Route path={Pages.inputs} component={Inputs} />
        <Route path={Pages.selectors} component={Selectors} />
        <Route path={Pages.toaster} component={Toaster} />
      </article>
    </div>
  );
}

export default App;