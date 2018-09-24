import React, { Component } from 'react';
import './recipe.scss'
import Tag from '../components/tag';
import Ingredient from '../components/ingredient';
import Step from '../components/step';
import { getRecipeDetail } from '../common/api'
import { connect } from "react-redux";
import {toggleFavor} from '../store/actions'

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
        getRecipeDetail({
            ids: encodeURIComponent(JSON.stringify([this.props.match.params.recipeId]))
        })
            .then(res => {
                this.setState({ detail: res.data.data[0] })
            })
    }
    switchFavor = () => {
        this.props.toggleFavor(this.recipeId, !this.props.allFavors[this.recipeId])
    }
    render() {
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
                    <div className={`btn ${this.props.allFavors[this.recipeId] && 'favor'}`} onClick={this.switchFavor}>
                        收藏
                    </div>
                </div>

                <div className="tags" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.detail && this.state.detail.tags && this.state.detail.tags.split(';').map((item, index) => {
                        return <Tag key={index} text={item}></Tag>
                    })}
                </div>
                <div className="description">
                    {this.state.detail.imtro}
                </div>
                <div className='ingredient'>用料</div>
                <div className="ingredientName">
                    {
                        this.state.detail && this.state.detail &&
                        this.state.detail.ingredients &&
                        this.state.detail.ingredients.split(';').map((item, index) => {
                            if (item) {
                                let idx = item.indexOf(',')
                                const name = item.substr(0, idx)
                                const amount = item.substr(idx + 1, item.length)
                                return <Ingredient name={name} amount={amount} key={index}></Ingredient>
                            }
                        })
                    }
                   
                </div>
                <div className="cook">
                    做法
                </div>
                <div className="steps">
                    {this.state.detail && this.state.detail.steps && this.state.detail.steps.map((item,index) => {
                        return <Step step={item} key={index}></Step>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps:', state)
    return state.favors
}
export default connect(
    mapStateToProps,
    {toggleFavor}
)(Recipe);