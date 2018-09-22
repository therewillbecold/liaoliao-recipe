import React, { Component } from 'react'
import './recommended.scss'
import Search from '../components/search'
import Button from '../components/button1'
import Carrousel from '../components/carrousel'
import Introduction from '../components/introduction '
import { getCategories } from '../common/api'
import { getRecipesByCategoryId } from '../common/api'

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { name: 'a', id: 1 },
        { name: 'b', id: 2 },
        { name: 'c', id: 3 },
        { name: 'd', id: 4 },
        { name: 'e', id: 5 }
      ],
      empty: {}
    }
  }



  changeTab = (item) => {
    return () => {
      this.setState(
        { empty: item }
      )
    }
  }

  render() {
    return (<div className="Recommended">
      {this.state.arr.map(item => {
        return (
          <div key={item.id} onClick={this.changeTab(item)}>
            <Button current={this.state.empty.id === item.id} text={item.id}></Button>
          </div>
        )
      })}

    </div>);
  }
}


export default Recommended;
