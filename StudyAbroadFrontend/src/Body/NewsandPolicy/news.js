import axios from 'axios';
import React, { Component } from 'react'
import { Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './news.css'


class News extends Component{
    state = {
        News : [],
        config : {
            headers: { authorization : `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:90/news/showall")
        .then((response) => {
            console.log(response)
            this.setState({
                News: response.data.data
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    render(){
        // const type = localStorage.getItem('type')
        return(
            // <Container>
                <Row>
                    <div className="news-section">
                    <h1 classname="title">NEWS AND POLICIES</h1>
                        <div id="news">{this.state.News.map((news) =>{
                            return(
                                <div className = "news-container" key={news._id}>
                                    {/* <Link  to={'/newsdetails/' + news._id}> */}
                                        <img src={`http://localhost:90/${news.Newsimage}`}  className='news-image'/>
                                    {/* </Link> */}
                                    <div className ='content'>
                                        <h3>
                                            <Link  to={`/news/showall/${news._id}`}>
                                                <h1 className='newss'>{news.NewsTitle}</h1>
                                            </Link>
                                        </h3>
                                        {/* <p>{news.NewsDetails}</p> */}
                                    </div>
                                </div>
                            )
                        })}</div>
                    </div>
                </Row>
            // </Container>
        )
    }
}


export default News