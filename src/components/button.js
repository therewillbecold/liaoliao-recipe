import React, { Component } from 'react'
class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {
      width: '100%',
      height: '0.4rem',
      borderRadius: '8px',
      backgroundColor: this.props.current ? '#c74c43' : '#969c6d',
      color: 'white',
      fontSize: '0.2rem',
      textAlign: 'center',
      lineHeight: '0.4rem'
    }

    return (
      <div className="button">
        <div
          style={style}
        >
          {this.props.text}
        </div>

      </div>
    )
  }
}

export default Button
