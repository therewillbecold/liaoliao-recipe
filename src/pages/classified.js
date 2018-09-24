import React, { Component } from 'react'
import Search from '../components/search'
import ButtonBar from '../components/buttonBar'
import ListBar from '../components/listBar'
import { getRecipesByCategoryId, searchItems, getCategories } from '../common/api'

class Classified extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInp: '',
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
      this.setState({
        categories: res.data.data,
        currentCategory: res.data.data[0]
      }, this.fetchRecipes)
    })
  }

  fetchRecipes = () => {
    // 用ajax获取数据
    getRecipesByCategoryId({ id: this.state.currentCategory.id }).then(res => {
      // 把数据渲染到页面
      this.setState({
        recipeList: res.data.data
      })
    })
  }

  changeTab = (item) => {
    return () => {
      this.setState({
        currentCategory: item
      }, this.fetchRecipes)
    }
  }


  render() {

    return (
      <div className="Classified">

        <Search
          onChange={val => this.setState({ searchInp: val })}
          onSearch={this.search}
          placeholder="搜索食谱"
        />
        <div className="buttonBars"
          style={{
            marginTop: '0.6rem'
          }}
        >
          {this.state.categories.map(item => {
            return <div className='buttonBar' key={item.id} onClick={this.changeTab(item)}>
              <ButtonBar text={item.name} current={this.state.currentCategory.id === item.id}></ButtonBar>
            </div>
          })}
        </div>

        {this.state.recipeList.map(item => {
          // console.log('item: ', item);
          return <div className='listBar' key={item.id} onClick={this.changeTab(item)}>
            <a href={`#/recipe/${item.id}`}>
            <ListBar recipe={item} current={this.state.currentCategory.id === item.id} ></ListBar>
            </a>
          </div>
        })}

        <div>
        </div>

      </div>
    )
  }
}

export default Classified