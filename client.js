
import React from 'react';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './store'
//创建react元素有很多种
// var App = React.createClass({
//   propTypes:{},
//   render:()=>{
//     return (<div>hello world</div>)
//   }
// })
class App extends PureComponent{
  componentDidMount(){
    console.log('--client componentdidmount');
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          {routes}
        </BrowserRouter> 
      </Provider>
    )
  }
}
ReactDOM.hydrate(<App />,document.getElementById('root'))


