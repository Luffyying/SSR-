import Routes from './routes'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter,Route } from 'react-router-dom'; 
import { Provider } from 'react-redux'
import store from './store'
import { renderRoutes } from 'react-router-config';

export const render = (req) => {
    const content = renderToString(
      <Provider store={store}>
        <div>
          <StaticRouter location={req.path} >
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
          </div>
      </Provider>
    );
    return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/chunk.js"></script>
        <script>
         console.log('--服务端的注水')
         window.context ={
           state:${JSON.stringify(store)}
         }
        </script>
      </body>
    </html>
    `
}