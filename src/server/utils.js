import { renderToString } from 'react-dom/server';
import {  StaticRouter } from 'react-router-dom'; 
import React from 'react'
import routes from '../Routes'
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import store from '../store';
console.log('----');
export const render = (req) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  // const helmet = Helmet.renderStatic();

  // const cssStr = context.css.length ? context.css.join('\n') : '';

  return  `
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
};