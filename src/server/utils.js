import Routes from '../Routes'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter,Route } from 'react-router-dom'; 
import { Provider } from 'react-redux'
import store from '../store'
import { renderRoutes } from 'react-router-config';

export const render = (req) => {
    const content = renderToString(
      <Provider store={store}>
          <StaticRouter location={req.path} >
            {renderRoutes(Routes)}
          </StaticRouter>
      </Provider>
    );
    console.log('直出的结果')//<div><div>[1,2,3,4]</div></div>
    console.log(content);
    //输入：jsx语法 输出：静态html页面
    //babel,jsx->create.createElement({type:'',props:{},children:[]})->html string
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