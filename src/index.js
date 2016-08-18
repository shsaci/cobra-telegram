import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import About from './components/About'
import Header from './components/Header'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route component={Header}>
        <Route path='/' component={App} />
        <Route path='/about' component={About}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
