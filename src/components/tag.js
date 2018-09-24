import React, { Component } from 'react';
class Tag extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="btn"
        style={{
            flex: '0 0 auto',
            height: '0.3rem',
            border: '1px solid #b7b7b7',
            borderRadius: '6px',
            fontSize: '0.14rem',
            textAlign: "center",
            lineHeight: '0.3rem',
            padding: '0 0.03rem',
            margin: '0.05rem'
        }}
    >{this.props.text}</span>);
    }
}

export default Tag;