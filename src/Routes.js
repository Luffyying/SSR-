import Home from './containers/Home';
import Login from './containers/Login';
import App from './App';

export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      // loadData: Home.loadData,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    }
  ]
}];


