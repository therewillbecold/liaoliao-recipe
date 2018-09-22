import React, { Component } from 'react'
import './introduction.scss'

class Introduction extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const recipe = this.props.recipe || {}
    return (
      <div className="introduction">
        <div className="pics">
          <img src={recipe.albums} alt="" />
        </div>
        <div className="infobox">
          <div className="info">
            <span className="title">{recipe.title}</span>
            <p className="description">{recipe.imtro}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
