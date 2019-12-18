import Routes from './routes'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'
import store from './store'

export const render = (req) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} >
          {Routes}
        </StaticRouter>
      </Provider>
    );
    return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/chunk.js"></script>
      </body>
    </html>
    `
}