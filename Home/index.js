import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../src/containers/Home/store/actions';
import { changeList } from '../src/containers/Home/store/actions';
const mapStateToProps = state => ({
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => {
  return {
    getList(){
      // dispatch(getHomeList())
      dispatch(changeList([1,2,3,4]))
    }
  }
}
class Home extends Component{
  componentDidMount(){
    this.props.getList()
  }
  render(){
    const {list} = this.props;
    return (
      <div>{JSON.stringify(list)}</div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);