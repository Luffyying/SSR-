//改造之前的路由part4
// import React from 'react';
// import {Route} from 'react-router-dom'
// import Home from './Home';
// import Login from './src/containers/Login'

// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )
//改造之后的路由
import Home from './Home';
import App from './App';
import Login from './src/containers/Login'
export default [{
  component:App,
  routes:
  [{path:'/',
  component:Home,
  exact:true,
  loadData:Home.loadData,//服务端获取异步数据的函数
  key:'home'
},{
  path:'/login',
  component:Login,
  exact:true,
  key:'login'
}]
}]
