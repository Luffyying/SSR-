
> 此次参与的所有本地测试文件都在根目录下，暂时比较乱，二期后整合

**已解决部分**
1. 一级路由配置

**待解决部分**

- [ ]  加入redux
- [ ]  异步数据的服务端渲染
- [ ]  node作中间层
- [ ]  多级路由渲染
- [ ]  CSS的服务端渲染思路

> 本地测试

1. npm install
2. npm run test 实时打包服务端代码 example1.js
3. npm run client 实时打包客户端代码 client.js
4. nodemon --watch build --exec node public/bundle3.js 开启服务