import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Routes from './routes';
import LocaleButton from './common/components/LocaleButton';

function App() {
  const { messages, locale } = useIntl();

  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
           <a href="/" className="brand-logo"><h4>Isomorphic Prototype</h4></a>
            <ul id="nav-mobile" className="right">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/todos">Todos</NavLink>
              </li>
              <li>
              <LocaleButton locale={locale} />
              </li>
            </ul>
          </div>
        </nav>
        
      <Switch>
        <div className="container">
        <h1>{messages['app.hello_world2']}</h1>
         {renderRoutes(Routes)}
         </div>
      </Switch>
    </div>
  );
}

export default App;