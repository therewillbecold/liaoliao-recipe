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
            marginTop: '0.6rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {this.state.categories.map(item => {
            return <ButtonBar key={item.id} onClick={this.changeTab(item)} style={{
              flex: '1 1 25%',
              width: 'auto'
            }} text={item.name} current={this.state.currentCategory.id === item.id}></ButtonBar>
          })}
        </div>
        <div className="list" style={{
          marginTop: '0rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          flexDirection: 'row'
        }}>
          {this.state.recipeList.map(item => {
            // console.log('item: ', item);
            return <div className='listBar' style={{
              flex: '0 0 33.33%',
              display: 'flex',
              justifyContent: 'center'
            }} key={item.id}>
              <a href={`#/recipe/${item.id}`}>
                <ListBar recipe={item} current={this.state.currentCategory.id === item.id} ></ListBar>
              </a>
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default Classified