// import { CHANGE_LIST } from "./constants";

// const changeList = list => ({
//   type: CHANGE_LIST,
//   list
// });

// export const getHomeList = (server) => {
//   return (dispatch, getState, axiosInstance) => {
//     return axiosInstance.get('/api/news.json')
//       .then((res) => {
//         const list = res.data.data
//         dispatch(changeList(list))
//       });
//   };
// };
import { CHANGE_LIST } from "./constants";
import axios from 'axios';
//普通的action
export const changeList = list => ({
  type:CHANGE_LIST,
  list
}) 

//异步action采用thunk中间件
export const getHomeList = (server) => {
  const list = [1,2,3,4]
  return (dispatch) => {
    // return axios.get('/api/news.json').then(res=>{
    return Promise.resolve().then(res=>{
      dispatch(changeList(list))
    })
  }
}
//中间件就是处理中间过程的一个插件