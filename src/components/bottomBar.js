import React, { Component } from 'react';
import './bottomBar.scss'
class BottomBar extends Component {
    constructor(props) {
        super(props);

    }
    routes = [
        {
            path: '/',
            text: '推荐'
        },
        {
            path: '/classified',
            text: '分类'
        },
        {
            path: '/favorites',
            text: '收藏'
        }
    ]
    render() {
        const pathname = window.location.pathname
        return (<div className="bottomBar">
            <div className="box">
                {
                    this.routes.map((item, index) => (
                        <div className={`bar box1 ${item.path == pathname ? 'current' : ''}`} key={index}>
                            <a href={item.path}>
                                <div className="icon" className='icon iconfont icon-tuijian'></div>
                                <div className="text">{item.text}</div>
                            </a>

                        </div>
                    ))
                }
            </div>
        </div>);
    }
}

export default BottomBar;