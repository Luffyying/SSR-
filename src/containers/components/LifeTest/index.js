import React,{Component} from 'react';

class LifeTest extends Component{
  constructor(props){
    console.log('constructor');
    super(props)
    this.state = {
      name:2,
      age:9
    }
    this.listRef = React.createRef()
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    //在最近一次渲染输出之前调用,返回值作为componentDidUpdate的第三个参数
    console.log('getSnapshotBeforeUpdate-----');
    console.log(prevProps)
    console.log(this.props)
    return 89
  }
  // componentWillReceiveProps(nextProps){
  //   console.log('componentWillReceiveProps');
  //   // console.log('next');
  //   // console.log(nextProps);
  //   // console.log('prev');
  //   // console.log(this.props);

  // }
  // componentWillMount(){
  //   console.log('componentWillMount');
  // }
  componentDidMount(){
    console.log('componentDidMount');
    const that = this;
    setTimeout(()=>{
      that.setState({
        age:80
      })
    },1500)
  }
  shouldComponentUpdate(newProps,newState){
    // 新的prop,state
    console.log('shouldComponentUpdate');
    console.log(newProps);
    console.log(newState);
    return true;
  }
  // componentWillUpdate(nextProps,nextState){
  //   console.log('componentWillUpdate');
  // }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps')
    console.log(props)
    console.log(state)
    //此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props!!!!!!,但是也单独返回其中的一个state
    return {
      name:props.source,
    }
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnMount(){
    console.log('componentWillUnMount')
  }
  componentDidCatch(){
    console.log('catch error');
    //当渲染过程，生命周期，或子组件的构造函数中抛出错误时
  }
  render(){
    console.log('子组件的rendering');
    const {source} = this.props;
    const {age} = this.state;
    return (
      <div>
        <h3>{JSON.stringify(this.state)}</h3>
        <div>{age}</div>
        {/* <h3>{JSON.stringify(this.state)}</h3>
        <div>{source}</div> */}
      </div>
    )
  }
}

export default LifeTest
//为什么要修改更新生命周期？
//变更的生命周期 提出一种可被打断的生命周期,而可以被打断的阶段正是实际挂载dom之前的虚拟dom的构建阶段，也就是要被去掉的三个生命周期