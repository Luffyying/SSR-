import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../src/containers/Home/store/actions';
import { changeList } from '../src/containers/Home/store/actions';
//引入css
import './style.css'
const mapStateToProps = state => ({
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => {
  return {
    getList(){
      // dispatch(getHomeList())
      setTimeout(()=>{
        var a = dispatch(changeList([1,2,3,4]))
        console.log('---dispatch returned data');
        console.log(a);
      },2000)
      // return new Promise((res,req)=>{
      //   res(dispatch(changeList([1,2,3,4])))
      // })

    }
  }
}
class Home extends Component{
  componentDidMount(){
    this.props.getList()
    //此处有一个坑
    //在平常客户端的React开发中，我们一般在组件的componentDidMount生命周期函数进行异步数据的获取。但是，在服务端渲染中却出现了问题。
    //当处于这个生命周期，客户端代码执行，异步获取数据，函数更新页面，但是服务端代码始终不会执行componentdidmount,
    //因此导致服务端的store始终是空的，网页源代码也就没有数据了。（网页源代码来自于服务端返回的）
    //实现方法：通过路由来实现，改造路由
  }
  render(){
    const {list} = this.props;
    return (
      <div>{JSON.stringify(list)}</div>
    )
  }
}
// Home.loadData = (store) => {
//   return store.dispatch(changeList([1,2,3,4]))
// }
const exportHome = connect(mapStateToProps,mapDispatchToProps)(Home);
exportHome.loadData = (store) => {
  return new Promise((res,req)=>{
    res(store.dispatch(getHomeList()))
  })
}
export default exportHome