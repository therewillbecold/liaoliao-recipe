import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  onChange = event => {
    const text = event.target.value
    this.setState(
      {
        text
      },
      () => {
        this.props.onChange(text)
      }
    )
  }
  onKeyUp = event => {
    console.log('event.keyCode', event.keyCode)
    if (event && event.keyCode === 13) {
      this.props.onSearch(this.state.text)
    }
  }
  render() {
    return (
      <div
      style={{
        width:'100%',
        height:'0.6rem',
        position:"fixed",
        top:"0",
        left:"0",
        zIndex:"1000"
      }}
      >
      <div
        style={{
          width: '100%',
          height: '0.6rem',
          border: '1px solid #eee',
          background: '#cbb99f',
          position: 'relative',
          paddingLeft: '0.4rem',
          paddingRight: '0.1rem'
        }}
        className="search"
      >
        <span
          className="icon iconfont icon-search"
          style={{
            position: 'absolute',
            left: '0.08rem',
            top: '0.15rem',
            fontSize: '0.2rem'
          }}
        />
        <div
          style={{
            height: '0.5rem',
            position: 'relative'
          }}
        >
          <input
            style={{
              border: 'none',
              height: '80%',
              width: '100%',
              position: 'absolute',
              top: '58%',
              left: '50%',
              fontSize: '0.18rem',
              transform: 'translateX(-50%) translateY(-50%)',
              borderRadius: '10px'
            }}
            type="text"
            placeholder={this.props.placeholder}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
      </div>
      </div>
      
    )
  }
}

Search.defaultProps = {
  onSearch() {},
  onChange() {},
  placeholder: '请输入...'
}

export default Search
