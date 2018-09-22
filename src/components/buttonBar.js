import React, { Component } from 'react'
class ButtonBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            width: '1rem',
            fontSize: ' 0.2rem',
            textAlign: "center",
            lineHeight: '0.4rem',
            backgroundColor: '#f5f5f5',
            border: '1px solid white',
            backgroundColor: this.props.current ? 'rgb(203, 185, 159)':'#f5f5f5'
        }
        return (
            <div className='buttonBar'
                style={{
                    width: '1rem',
                    // height:'0.4rem',
                    padding: '0.1rem',
                    float: "left"
                }}
            >
                <div className='button'
                    style={style}
                >
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default ButtonBar;