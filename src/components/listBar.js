import React, { Component } from 'react'
class ListBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.recipe
    return (
      <div className="listBar"
        style={{
          width: '100%'
        }}
      >
        <div
          className="box"
          style={{
            ...{
              width: '1rem',
              height: '1.3rem',
              paddingBottom: '0.3rem',
              float: 'left'
            }, ...this.props.style
          }}
        >
          <div
            className="pics"
            style={{
              width: '1rem',
              height: '1rem'
            }}
          >
            <img
              src={data.albums && data.albums[0]}
              alt=""
              style={{
                width: '1rem',
                height: '1rem'
              }}
            />
          </div>
          <div
            className="name"
            style={{
              width: '1rem',
              height: '0.3rem',
              fontSize: '0.16rem',
              textAlign: 'center',
              lineHeight: '0.3rem',
              overflow: 'hidden'
            }}
          >
            {data.title}
          </div>
        </div>
      </div>
    )
  }
}

export default ListBar
