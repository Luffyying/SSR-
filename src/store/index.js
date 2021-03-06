import { createStore,applyMiddleware,combineReducers } from 'redux'
import chunk from 'redux-thunk';
import {reducer as homeReducer} from '../containers/Home/store'
//合并项目组件中的store的reducer
const reducer = combineReducers({
    home:homeReducer
})
//创建store,并引入中间件thunk进行异步操作的管理
const store = createStore(reducer,applyMiddleware(chunk))
export default createStore(reducer,applyMiddleware(chunk));
//分别创建服务端和客户端的store
//客户端：
// export const getClientStore = ()=>{
//     const defaultStore = window.context ? window.msContentScript.state:{}
//     return createStore(reducer,defaultState,applyMiddleware(chunk))
// }

/**store的常用的方法
 * 1.getState()
 * 2.dispatch(action) action:function add(text)({return {type:'ADD',text}})
 * dispatch(add('have a test')) 返回一个promise？no, Object, the dispatched action
 * 3.subscribe(listener)
 * 
 */
/** redux暴露出的api
 * 1.createStore 创建store
 * 2.applyMiddleware 中间件 自定义扩展redux 常用的：thunk,可以在异步获取数据的时候给dispatch包一层，
 * invert control,dispatch later after fetch the data
 * 3.combineReducers 整合分离的reducer function
 * 4.connect
*/
/**react-redux暴露的api
 * 1. connect connects a react component to a redux store用于连接组件和store
 * 2. Provider makes the redux store 包裹store使用的最大范围--理解为容器
 */