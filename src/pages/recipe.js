import React, { Component } from 'react';
import './recipe.scss'
import Tag from '../components/tag';
import Ingredient from '../components/ingredient';
import Step from '../components/step';
import { getRecipeDetail } from '../common/api'
import { connect } from "react-redux";
import { toggleFavor } from '../store/actions'

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
        console.log(this.state);
        const detail = this.state.detail || {}
        return (
            <div className="recipe">
                <div className="pic"
                    style={{
                        backgroundImage: `url(${detail.albums})`,
                        color: 'red',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
                <div className="titleBar">
                    <div className="title">
                        {detail.title}
                    </div>
                    <div className={`btn ${this.props.allFavors && this.props.allFavors[this.recipeId] && 'favor'}`} onClick={this.switchFavor}>
                        收藏
                    </div>
                </div>

                <div className="tags" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {detail.tags && detail.tags.split(';').map((item, index) => {
                        return <Tag key={index} text={item}></Tag>
                    })}
                </div>
                <div className="description">
                    {detail.imtro}
                </div>
                <div className='ingredient'>用料</div>
                <div className="ingredientName">
                    {
                        detail && detail &&
                        detail.ingredients &&
                        detail.ingredients.split(';').map((item, index) => {
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
                    {detail && detail.steps && detail.steps.map((item, index) => {
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
    { toggleFavor }
)(Recipe);