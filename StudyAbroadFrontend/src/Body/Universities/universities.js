import axios from 'axios';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './universities.css'

class Universities extends Component {

    state = {
        Universities:[],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        'search':"",
        "sort":"asc"
    }

 

    componentDidMount() {
        axios.get('http://localhost:90/universities/showall')
            .then((response) => {
                console.log(response)
                this.setState({
                    Universities: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    // deleteWishList = (wish_id) => {
    //     axios.delete('http://localhost:90/wishlist/delete/' + wish_id, this.state.config)
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((err) => {
    //         console.log(err.response)
    //     })
    //     window.location.reload()
    // }

    addToFavourite = (University) => {
        axios.post('http://localhost:90/universities/wishlist/', University, this.state.config)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    render() {
        const type = localStorage.getItem('type')
        let filtered = this.state.Universities.filter((val)=>{return val.universityName.toLowerCase().trim().startsWith(this.state.search.toLowerCase().trim())})
        filtered.sort((a,b)=>{return a.universityName.localeCompare(b.universityName)})
     
        if(this.state.sort == "desc")
        {
            filtered.reverse();
        }    
       
        return (
            <>
            <div className='universities-section'>
                 <p className= 'heading-text'>We will help you find your dream university</p>
                 <div className='search-section'>
                 <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                        <Col lg={4}>
                            <div className="Search">
                                <input type="text" placeholder="I am looking for....." onChange={(e) => {
                                    this.setState({"search":e.target.value});
                                }} id="txtSearch" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                 </div>
                        <div class="sortdropdown">
                    <select className="btn btn-secondary" onChange={(e)=>{this.setState({"sort":e.target.value})}}>
                        {/* <option value="#">select</option> */}
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                        
                    </select>
              
                </div>

                <div className='universities'>{filtered.map((universities) => {
                    return (
                        <div className='universities-card'>

                            <div className='universities-box'>
                            
                                <div className='universities-image'> 
                                    <img src={`http://localhost:90/${universities.universityImage}`}  />
                                   
                                </div>
                                <button onClick={this.addToFavourite.bind(this, universities)} className='heart-icon'>
                                        <Link to ='/wishlist' className='wishlst-btn'><i class="fas fa-heart"></i></Link>
                                    </button>
                
                                <div className='universities-name'>
                                        <h3>{universities.universityName}</h3>
                                        <span className='uni-location'>{universities.universityLocation}</span>
                                    </div>
                                <div className='university-details'>

                                    <div className='university-info'>
                                        <span className="university-text">Type</span>
                                        <h3>{universities.universityType}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Rank</span>
                                        <h3>{universities.universityRank}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <p>International</p>
                                        <span className="university-text">Students</span>
                                        <h3>{universities.internationalStudents}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Nationalities</span>
                                        <h3>{universities.nationalities}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Total Programs</span>
                                        <h3>{universities.totalPrograms}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Acceptance rate</span>
                                        <h3>{universities.acceptanceRate}</h3>
                                    </div>

                                </div>
                                <button className='details-button'>
                                        <Link to ={'/universityDetails/' + universities._id} className='university-button'>University Details</Link>
                                    </button>
                                   

                            </div>
                        </div>
                    )
                })}</div>
            </div>

            </>

        )
    }
}

export default Universities
