import React from 'react';
import ReactDom from 'react-dom'
import Home from '../../react'
ReactDom.hydrate(<Home/>,document.getElementById('root'))
//抽离出事件