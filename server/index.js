import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/routes';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {

  
  
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
  usage: 

  
  Promise.all(promises).then(dataArr => {
    // render our app, do something with dataArr, send response
  });
  */
  
  const matchingRoutes = matchRoutes(Routes, req.url);

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
        <App />
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
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});