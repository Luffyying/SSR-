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
const changeList = list => ({
  type:CHANGE_LIST,
  list
}) 
//异步action采用thunk中间件
export const getHomeList = () => {
  return () => {
    return axios.get('/api/news.json').then(res=>{
      dispatch(changeList(list))
    })
  }
}
//中间件就是处理中间过程的一个插件