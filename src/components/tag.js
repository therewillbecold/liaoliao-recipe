import React, { Component } from 'react';
class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='tag'>
<span className="btn" 
style={{
   height:'0.3rem',
   border:'1px solid #b7b7b7',
   borderRadius:'6px',
   fontSize:'0.14rem',
   textAlign:"center",
   lineHeight:'0.3rem',
   padding:'0.07rem'
}}
>健康</span>
            </div>);
    }
}
 
export default Tag;