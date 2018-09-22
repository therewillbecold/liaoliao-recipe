import React, { Component } from 'react';
import './carrousel1.scss'
import pic1 from '../static/images/1.jpg'
import pic2 from '../static/images/2.jpeg'
import pic3 from '../static/images/3.jpeg'
import pic4 from '../static/images/4.jpg'
class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            picList : [pic1,pic2,pic3,pic4],
            width:0,
            height:0
        }
    }


    render() { 
        return (
            <div className='carrousel'>
                <div className='container'>
                {this.state.picList.map((item,idx)=>{
                    return (
                    <div className='pic' key={idx}>
                    <img src={item} alt="" />
                </div>
                    )
                })}
                </div>
            </div>
        );
    }
}
 
export default Carrousel;