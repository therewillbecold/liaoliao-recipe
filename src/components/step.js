import React, { Component } from 'react';
class Step extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const step = this.props.step
        return (<div className="step"
            style={{
                width: '100%',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    fontSize: '0.16rem',
                    lineHeight: '0.2rem',
                    color: '#585858'
                }}
            >
                {step && step.step}
            </div>
            <div>
                <img src={step && step.img} alt=""/>
            </div>
        </div>);
    }
}

export default Step;