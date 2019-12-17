import React ,{ PureComponent } from 'react';
import { StaticRouter } from 'react-router-dom'; 
import routes from './routes'
class App extends PureComponent{
  componentDidMount(){
    console.log('--componentdidmount');
  }
  render(){
    return (
      <StaticRouter>
        {routes}        
      </StaticRouter>
    )
  }
}
export default App;
