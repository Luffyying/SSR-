import React from 'react';
import {render} from './utils';
import Routes from '../Routes'
import store from '../store'
import { matchRoutes} from 'react-router-config';
let express = require("express");
let ReactDOMServer = require('react-dom/server');

// let variable = ReactDOMServer.renderToString(<App />)
//此处非常重要，将虚拟Dom->html字符串
//直接将渲染结果以html结构的形式返回给客户端
//也就是将virtual dom 转换成字符串的形式返回给客户端,但是没有处理事件
let app = express();
app.use(express.static('public'));
//添加路由后注意使用*来匹配
app.get("*", (req, res) => {
  //调用matchRoutes用来匹配当前路由（支持多级路由）
  const matchedRoutes = matchRoutes(Routes,req.path)
  console.log(matchedRoutes);
  // promise对象数组
  const promises = [];
  matchedRoutes.forEach(item=>{
    if(item.route.loadData){
      //如果当前组件需要挂载全局变量
      const promise = new Promise((resolve,reject)=>{
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })
  
  Promise.all(promises).then(()=>{
    res.send(render(req));
  })
  // res.send(render(req));
});
app.listen(3001,()=>{
  console.log('listen:3001');
})
