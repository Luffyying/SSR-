import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { Helmet } from 'react-helmet';

class Home extends Component {
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
  getHomeList() {
    dispatch(getHomeList())
  }
});
const exportHome = connect(mapStateToProps, mapDispatchToProps)(Home);

// exportHome.loadData = (store) => {
//   return store.dispatch(getHomeList())
// };
export default exportHome;