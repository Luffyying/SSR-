// import React from 'react';
var React = require('react');
import ReactDom from 'react-dom'
import Home from '../containers/Home';
import Login from '../containers/Login'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes'
import {Provider} from 'react-redux';
import store from '../store';
const App = () => {
    return (
        // <Provider>
            <BrowserRouter>
                {renderRoutes(Routes)}
            </BrowserRouter>
        // </Provider>
    )
}
ReactDom.hydrate(<App />,document.getElementById('root'))
//抽离出事件