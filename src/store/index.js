import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home:homeReducer
})
//#endregion
// export const getStore = () => {
//     return createStore(reducer,applyMiddleware())
// }
//创建store,引入中间件thunk进行异步操作的管理
const store = createStore(reducer,applyMiddleware(thunk));
export default store
