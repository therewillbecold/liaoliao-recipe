import React, { Component } from 'react'
import ListBar from '../components/listBar'
import './favorites.scss'
class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='favorites'>
      <div className="title">
      <h1>我喜欢的...</h1>
      </div>
      {/* <ListBar></ListBar> */}
      </div>
    )
  }
}

export default Favorites

