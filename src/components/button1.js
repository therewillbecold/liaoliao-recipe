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
      color: 'white',
      fontSize: '0.2rem',
      textAlign: 'center',
      lineHeight: '0.4rem',
      background: this.props.current ? 'green' : 'red'
    }
    // console.log(this.props);
    return (
      <div
        style={style}
      >
        {this.props.text}
      </div>
    )
  }
}

export default Button
