import React from 'react';
import {Route, Link} from 'react-router-dom';
import classnames from 'classnames';

import Badges from './components/badges/Badges';
import Buttons from './components/buttons/Buttons';
import Colors from './components/colors/Colors';
import Inputs from './components/inputs/Inputs';
import Selectors from './components/selectors/Selectors';
import Toaster from './components/toaster/Toaster';

import './layout/index.scss';

const Pages = {
  badges: '/app/badges',
  buttons: '/app/buttons',
  colors: '/app/colors',
  inputs: '/app/inputs',
  selectors: '/app/selectors',
  toaster: '/app/toaster'
};

const App = () => {
  const currentPage = window.location.pathname;

  return (
    <div>
      <header>
        <a className="title" href="/">
          <i className="material-icons md-light md-48">all_out</i>
          <span>react-flat</span>
        </a>
        <nav>
          <ul>
            <li><a className="active" href="/">Components</a></li>
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
        <Route path={Pages.badges} component={Badges} />
        <Route path={Pages.buttons} component={Buttons} />
        <Route path={Pages.colors} component={Colors} />
        <Route path={Pages.inputs} component={Inputs} />
        <Route path={Pages.selectors} component={Selectors} />
        <Route path={Pages.toaster} component={Toaster} />
      </article>
    </div>
  );
};

export default App;