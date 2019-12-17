
import React from 'react';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
class App extends PureComponent{
  componentDidMount(){
    console.log('--client componentdidmount');
  }
  render(){
    return (
        <BrowserRouter>
          {routes}
        </BrowserRouter> 
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))


