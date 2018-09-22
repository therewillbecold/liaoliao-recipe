import React, { Component } from 'react'
class ListButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '是的'
    }
  }
  render() {
    return (
      <div className="listButton">
        <div
          style={{
            width: '16%',
            height: '0.4rem',
            backgroundColor: '#f5f5f5',
            color: 'black',
            fontSize: '0.2rem',
            textAlign: 'center',
            lineHeight: '0.4rem',
          }}
        >
          {this.state.text}
        </div>
      </div>
    )
  }
}

export default ListButton
