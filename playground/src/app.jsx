import React from 'react';
import './app.scss';

const App = (props) => {
  const PAGES = {
    buttons: '/app/buttons',
    selectors: '/app/selectors',
    colors: '/app/colors'
  };

  const currentPage = props.location.pathname;

  return (
    <div>
      <header>
        <i className="material-icons md-light md-48">all_out</i>
        <span className="title">x-flat</span>
        <nav>
          <ul>
            <li><a className="active" href="">Components</a></li>
            <li><a href="https://github.com/k3ira">Github</a></li>
          </ul>
        </nav>
      </header>
      <aside>
        <nav>
          <ul>
            <li><a className={currentPage === PAGES.buttons ? 'active' : ''} href={PAGES.buttons}>Buttons</a></li>
            <li><a className={currentPage === PAGES.selectors ? 'active' : ''} href={PAGES.selectors}>Selectors</a></li>
            <li><a className={currentPage === PAGES.colors ? 'active' : ''} href={PAGES.colors}>Colors</a></li>
          </ul>
        </nav>
      </aside>
      <article>
        {props.children}
      </article>
    </div>
  );
}

export default App;