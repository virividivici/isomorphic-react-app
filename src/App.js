import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, NavLink } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
           <a href="/" className="brand-logo">Isomorphic Prototype</a>
            <ul id="nav-mobile" className="right">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/todos">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Posts</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      <Switch>
        {renderRoutes(Routes)}
      </Switch>
    </div>
  );
}

export default App;