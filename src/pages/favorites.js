import React, { Component } from 'react'
import Introduction from '../components/introduction.js'
import {connect} from 'react-redux'
import {getRecipeDetail} from '../common/api'
import './favorites.scss'
class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeList: []
    }
  }
  componentWillMount(){
    let allFavors = this.props.allFavors
    let allIds = Object.keys(allFavors).filter(id => allFavors[id])
    
    getRecipeDetail({
      ids:  encodeURIComponent(JSON.stringify(allIds))
    })
    .then(res => {
      console.log(res)
      if (res && res.status == 200) {
        this.setState({
          recipeList: res.data.data
        })
      }
    })
  }
  render() {
    return (
      <div className='favorites'>
        <div className="header">我的收藏</div>
        <ul>
          {this.state.recipeList.map(item => (
            <li className="introduction" key={item.id}>
              <a href={`#/recipe/${item.id}`}>
                <Introduction recipe={item} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => state.favors
)(Favorites)

