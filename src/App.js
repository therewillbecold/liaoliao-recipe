import React, { Component } from 'react'
import Router from './router'
import BottomBar from './components/bottomBar'
import './App.scss'
import './static/iconFont/iconfont.css'


class App extends Component {

  render() {
    return (
      <div>
        <Router />
        {/* <BottomBar /> */}
      </div>
    )
  }
}

export default App
