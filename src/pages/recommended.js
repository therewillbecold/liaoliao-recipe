import React, { Component } from 'react'
import './recommended.scss'
import Search from '../components/search'
import Button from '../components/button'
import Carrousel from '../components/carrousel'
import Introduction from '../components/introduction'
import { getCategories, getRecipesByCategoryId, searchItems } from '../common/api'

class Recommended extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      recipe: {},
      recipeList: [],
      currentCategory: {}
    }
  }
  componentWillMount() {
    this.getCategories()
  }
  search = (text) => {
    searchItems({
      keyword: text
    })
    .then(res => {
      let data = []
      if (res && res.status == 200) {
        data = res.data.data
      }
      this.setState({
        recipeList: data
      })
    })
  }
  getCategories = () => {
    getCategories().then(res => {
      let newArr = [],
        arr = res.data.data
      for (var i = 0; i < 4; i++) {
        let num = parseInt(Math.random() * arr.length)
        newArr.push(arr.splice(num, 1)[0])
      }
      this.setState({
        categories: newArr,
        currentCategory: newArr[0]
      }, this.getRecipesByCategoryId)
    })
  }

  getRecipesByCategoryId = () => {
    // 用ajax获取数据
    getRecipesByCategoryId({ id: this.state.currentCategory.id }).then(res => {
      // 把数据渲染到页面
      this.setState({ recipeList: res.data.data })
    })
  }

  changeTab = (item) => {
    return () => {
      this.setState({
        currentCategory: item
      }, this.getRecipesByCategoryId)
    }
  }

  render() {
    return (
      <div className="recommended">
        <div className="search">
          <Search
            onSearch={this.search}
            placeholder="搜索食谱"
          />
        </div>
        <div className="lunbo" style={{ width: '100%', height: '2.1rem' }}>
          <Carrousel />
        </div>

        <div className="btns">
          {this.state.categories.map(item => {
            return (
              <div className='btn' key={item.id} onClick={this.changeTab(item)}>
                <Button text={item.name} current={this.state.currentCategory.id === item.id}></Button>
              </div>
            )

          })}
        </div>
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

export default Recommended
