var React = require('react');
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { Helmet } from 'react-helmet';

class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
  render() { 
    const { list } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>分享前端知识</title>
          <meta name="description" content="分享前端知识"/>
        </Helmet>
        <div className="test">
          {JSON.stringify(list)}
        </div>
      </Fragment>
     
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
  getHomeList: ()=> {
    var a = dispatch({type:'CHANGE_LIST'})
    console.log(a);
  }
});
const exportHome = connect(mapStateToProps)(Home);

// exportHome.loadData = (store) => {
//   return store.dispatch(getHomeList())
// };
export default exportHome;
// export default Home;