import React, { Component } from 'react';
import './recipe.scss'
import Tag from '../components/tag';
import Ingredient from '../components/ingredient';
import Step from '../components/step';
import pic from '../static/images/strawberry.jpg';
import { getCategories } from '../common/api'
import { getRecipeDetail } from '../common/api'
import axios from 'axios'


class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
        this.recipeId = props.match.params.recipeId
    }

    componentWillMount() {
        this.getRecipeDetail()
    }

    getRecipeDetail = () => {
        // getRecipeDetail({
        //     recipeId: this.props.match.params.recipeId
        // })
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ detail: res.data.data[0] })
        //     })

        axios.get('http://localhost:60000/api/detail', {
            params: {
                recipeId: this.props.match.params.recipeId
            }
        })
            .then(res => {
                this.setState({ detail: res.data.data[0] })
            })
    }

    render() {
        console.log(this.state.detail);
        return (
            <div className="recipe">
                <div className="pic"
                    style={{
                        backgroundImage: `url(${this.state.detail.albums})`,
                        color: 'red',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
                <div className="titleBar">
                    <div className="title">
                        {this.state.detail.title}
                    </div>
                    <div className='btn'>
                        收藏
                    </div>
                </div>

                <div className="tags">
                    {this.state.detail && this.state.detail.tags && this.state.detail.tags.split(';').map((item, index) => {
                        return <Tag key={index} ></Tag>
                    })}
                </div>
                <div className="description">
                    {this.state.detail.imtro}
                </div>
                <div className='ingredient'>用料</div>
                <div className="ingredientName">
                    {/* {this.state.detail && this.state.detail.burden && this.detail.burden.split(';').} */}
                    <Ingredient></Ingredient>
                </div>
                <div className="cook">
                    做法
                </div>
                {/* <div className="steps">
                    {this.state.detail.steps.map((item,index) => {
                        <Step steps ={item[index].step}></Step>
                    })}
                </div> */}
            </div>
        );
    }
}

export default Recipe;