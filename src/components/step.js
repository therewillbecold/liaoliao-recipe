import React, { Component } from 'react';
class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="step"
            style={{
                width: '100%',
                height: '0.8rem',
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
                4.冬瓜略微出一点点水后，放虾米翻炒均匀，加，盐，味精，糖，几滴美及酱油，几滴鱼露可以提鲜，改小火，加盖子慢慢焖熟冬瓜。
        </div>
        </div>);
    }
}

export default Step;