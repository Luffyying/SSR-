//ssr 服务端渲染 
import express from 'express'
import Home  from './react'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
const variable = ReactDOMServer.renderToString(<Home />)

console.log(variable);
var app = express()
app.get('/',(req,res)=>{
    res.send(
        `<html>
        <body>${variable}hello ssr</body>
        </html>`
    )
})
app.get('/test',(req,res)=>{
    res.send(
        `<html>
        <body>test</body>
        </html>`
    )
})
app.listen(3001,()=>{
    console.log('listen 3001');
})
//此上就是服务端渲染了，就是服务器返回一堆html字符串,浏览器直接显示
// ssr server side render csr client side render 客户端渲染

//ssr 优势：1.浏览器直接下载html文档，减少首屏加载的速度
// 2有利于seo(搜索引擎爬虫只认识html)

/**那如何渲染react组件 */
//思想就是把 react组件当作一个react变量，但是react-dom并不能解析事件，如何解决
