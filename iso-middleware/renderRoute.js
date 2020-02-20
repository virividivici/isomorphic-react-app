import React from 'react';
import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { IntlProvider } from 'react-intl';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/routes';

import App from '../src/App';

export default function renderRoute(req, res) {

    /** 
  * const currentRoute =
    Routes.find(route => matchPath(req.url, route)) || {};
  let promise;

  if (currentRoute.loadData) {
    promise = currentRoute.loadData();
  } else {
    promise = Promise.resolve(null);
  } 
  * In cases where multiple routes may be rendered at the same time,
  *  matchPath won’t work because it’ll only match one route.
  *  matchRoutes is an utility that helps match multiple possible routes.
  That means that we can instead fill an array with promises for matching 
  routes and then call Promise.all on all matching routes to resolve the loadData promise of each matching route.
  */
  const matchingRoutes = matchRoutes(Routes, req.url);
  
  const locale = req.cookies.locale;
  const messages = {};
  ['en', 'de'].forEach((locale) => {
    messages[locale] = require(`../public/translation/${locale}.json`);
  });

  let promises = [];

  matchingRoutes.forEach(route => {
    if (route.loadData) {
      promises.push(route.loadData());
    }
  });

  Promise.all(promises).then(data => {
    // Let's add the data to the context
    const context = data.reduce((context, data) => Object.assign(context, data), {});

    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <App />
        </IntlProvider>  
      </StaticRouter>
    );

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      if (context.status === 404) {
        res.status(404);
      }
      if (context.url) {
        return res.redirect(301, context.url);
      }

      return res.send(
        indexData
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
}

