import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, NavLink } from 'react-router-dom';
import Routes from './routes';
import Home from './components/Home';
import Posts from './components/Posts';
import Todos from './components/Todos';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ul>
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
      <Switch>
        {renderRoutes(Routes)}
      </Switch>
    </div>
  );
}

export default App;
