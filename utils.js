import Routes from './routes'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; 

export const render = (req) => {
    const content = renderToString(
      <StaticRouter location={req.path} >
        {Routes}
      </StaticRouter>
    );
    return `
    <html>
      <body>
        <div id="root">服务端的代码</div>
        <script src="/chunk.js"></script>
      </body>
    </html>
    `
}