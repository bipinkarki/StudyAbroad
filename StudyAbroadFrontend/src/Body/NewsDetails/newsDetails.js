import { Component } from "react";
import axios from 'axios'
import './NewsDetails.css'
// import { Row } from "react-bootstrap";

class NewsDetails extends Component {
    state = {
        NewsInfo: [],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get('http://localhost:90/news/single/' + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    NewsInfo: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div className='news-details-section'>
                <div className='news-info' key={this.state.NewsInfo._id}>
                    <img src={`http://localhost:90/${this.state.NewsInfo.Newsimage}`} />
                </div>
                <div className='news-title'>
                    <h1>{this.state.NewsInfo.NewsTitle}</h1>
                </div>
                <div className='news-details'>
                 
                            <p>{this.state.NewsInfo.NewsDetails} </p>
                            <h1>{this.state.NewsInfo.title1}</h1>
                            <p>{this.state.NewsInfo.content1} </p>

                            <h1>{this.state.NewsInfo.title2}</h1>
                            <p>{this.state.NewsInfo.content2} </p>

                            <h1>{this.state.NewsInfo.title3}</h1>
                            <p>{this.state.NewsInfo.content3} </p>

                            <h1>{this.state.NewsInfo.title4}</h1>
                            <p>{this.state.NewsInfo.content4} </p>

                   
                </div>
            </div>
        )
    }
}
export default NewsDetails