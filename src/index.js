import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import fetch from 'isomorphic-fetch';
import Cookie from 'js-cookie';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const locale = Cookie.get('locale') || 'en';

fetch(`/public/translation/${locale}.json`)
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    return res.json();
  })
  .then((localeData) => {
    ReactDOM.hydrate(
      <BrowserRouter>
        <IntlProvider locale={locale} messages={localeData}>
          <App />
        </IntlProvider> 
      </BrowserRouter>,
      document.getElementById('root')
    );
}).catch((error) => {
  console.error(error);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
