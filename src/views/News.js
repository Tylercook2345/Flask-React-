import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    render() {
        return (
            <div>News</div>
        )
    }

    componentDidMount = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=28c2dcac17684beebea95d1ac61531e5`);
        const data = await res.json();
        console.log(data)
        const myArticles = data.articles
        this.setState({
            articles: myArticles
        })
    }

    render() {
        console.log(this.state.articles)
        return (
            <div className='row justify-content-around'>
                {this.state.articles.map((a, i)=><Article key={i} article={a}/>)}
            </div>
        )
    }
}