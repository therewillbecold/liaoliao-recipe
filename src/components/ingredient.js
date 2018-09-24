import React, { Component } from 'react';
class Ingredient extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        name: '',
        amount: ''
    }
    render() {
        return (<div className='ingredients'
            style={{
                width: '100%',
                height: '0.4rem',
                padding: '0 20px 0 20px'
            }}
        >
            <div className="ingredient"
                style={{
                    width: '100%',
                    height: '0.4rem',
                    borderBottom: '1px solid #dedede'
                }}
            >
                <div
                    style={{
                        fontSize: '0.15rem',
                        color: '#585858',
                        float: 'left',
                        paddingTop:'0.16rem'
                    }}
                >{this.props.name}</div>
                <div
                style={{
                    fontSize: '0.15rem',
                    color: '#585858',
                    float: 'right',
                    paddingTop:'0.16rem'
                }}
                >{this.props.amount}</div>
            </div>
        </div>);
    }
}

export default Ingredient;