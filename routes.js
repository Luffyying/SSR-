// Routes.js
import React from 'react';
import {Route} from 'react-router-dom'
// import Home from './src/containers/Home';
import Home from './Home';
import Login from './src/containers/Login'

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)
