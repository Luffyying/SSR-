
import React from 'react';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route} from 'react-router-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import store from '../store'
import { renderRoutes } from 'react-router-config';
//创建react元素有很多种
// var App = React.createClass({
//   propTypes:{},
//   render:()=>{
//     return (<div>hello world</div>)
//   }
// })
class App extends PureComponent{
  componentDidMount(){
    console.log('--client componentdidmount 嗷嗷');
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter> 
      </Provider>
    )
  }
}
ReactDOM.hydrate(<App />,document.getElementById('root'))


