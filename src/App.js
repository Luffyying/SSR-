import React from 'react';
import { renderRoutes } from 'react-router-config';

const  App = (props) => {
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  )
};
//renderRoutes的原理很简单：根据url渲染一层路由的组件，此处就是App组件，然后下一层的路由
//通过props传给目前App组件,一次循环即可。
export default App;