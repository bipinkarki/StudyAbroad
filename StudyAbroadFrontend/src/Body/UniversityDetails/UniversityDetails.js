import axios from 'axios';
import React, { Component } from 'react';
import './UniversityDetails.css'
import images from  './uniimg.jpg'
import image1 from './universitydetail.png'
import image2 from './whystudy.png'
import image3 from './fund.png'


class UniversityDetails extends Component {

    state = {
        UniversityInfo: [],
        config: {
            headers: { authorization: `Bearer${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id,
        comment: '',
        commentReply: '',
        comments : []
    }

    componentDidMount() {
        axios.get('http://localhost:90/universities/single/' + this.state.id)
            .then(response => {
                console.log(response)
                this.setState({
                    UniversityInfo: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
        
            axios.get("http://localhost:90/comment/showall")
            .then((response)=>{
                console.log(response)
               this.setState({
                   comments : response.data.data
               })
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    PostComment = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/insert/comment', this.state,this.state.config)
            .then((response) => {
                console.log(response)
                // localStorage.setItem('token', response.data.token)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (

            <div className='university-details-section'>
                <div className='universityDetails' key={this.state.UniversityInfo._id}>
                    <div className='university-image'>
                        <img src={`http://localhost:90/${this.state.UniversityInfo.universityImage}`} />
                    </div>
                    <div className='university-names'>
                        <h1>{this.state.UniversityInfo.universityName}</h1>
                        <p>Check whether {this.state.UniversityInfo.universityName} is right for you as an</p>
                        <p>intertnational student.</p>
                        <button className='university-website-btn'>Official university website</button>
                    </div>
                    <div className='university-box'>
                        <div className='universities-named'>
                            <h3>Uni Facts</h3>
                            <span>{this.state.UniversityInfo.universityLocation}</span>
                        </div>
                        <div className='universities-details'>

                            <div className='universities-info'>
                                <span className="universities-text">Type</span>
                                <h3>{this.state.UniversityInfo.universityType}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Rank</span>
                                <h3>{this.state.UniversityInfo.universityRank}</h3>
                            </div>
                            <div className='universities-info'>
                                <p>International Students</p>
                                {/* <span className="universities-text">Students</span> */}
                                <h3>{this.state.UniversityInfo.internationalStudents}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Nationalities</span>
                                <h3>{this.state.UniversityInfo.nationalities}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Total Programs</span>
                                <h3>{this.state.UniversityInfo.totalPrograms}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Acceptance rate</span>
                                <h3>{this.state.UniversityInfo.acceptanceRate}</h3>
                            </div>

                        </div>
                    </div>
                    <div className='studyAbroad'>
                    <img src={images} />
                        <h1>Study abroad at {this.state.UniversityInfo.universityName}</h1>
                        <p>{this.state.UniversityInfo.studyAbroadPara1}</p>
                        <p>{this.state.UniversityInfo.studyAbroadPara2}</p>
                        <p>{this.state.UniversityInfo.studyAbroadPara3}</p>
                    </div>
                    <div className='whyStudy'>
                    <img src={image1} />
                        <h1>Why study as {this.state.UniversityInfo.universityName}?</h1>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle1}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara1}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle2}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara2}</p>
                        </div>
                        <div className='whyStudy-title'>
                        {/* <img src={image2} /> */}
                            <h3>{this.state.UniversityInfo.whyStudyTitle3}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara3}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle4}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara4}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle5}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara5}</p>
                        </div>
                    </div>
                    <div className='internationalStudents'>
                    <img src={image3} />
                        <h1>Life as an international student</h1>
                        <p>{this.state.UniversityInfo.internationalLifePara1}</p>
                        <p>{this.state.UniversityInfo.internationalLifePara2}</p>
                        <p>{this.state.UniversityInfo.internationalLifePara3}</p>
                    </div>
                    <div className='Fees-Funding'>
                        <h1>Fees and Fundings</h1>
                        <p>International student fees are guaranteed in advance for the duration of the study.
                            {this.state.UniversityInfo.universityName} offers financial support for living and travel costs.</p>

                        <div className='fee-Information'>
                            <h2>Fee Information</h2>
                            <ul>
                                <li><p>{this.state.UniversityInfo.feeInformation1}</p></li>
                                <li><p>{this.state.UniversityInfo.feeInformation2}</p></li>
                            </ul>
                        </div>

                        <div className='Funding'>
                            <h2>Funding</h2>
                            <div className='funding-title'>
                                <h3>{this.state.UniversityInfo.undergraduatefunding}</h3>

                                <p>{this.state.UniversityInfo.undergraduatefundingAmount}</p>


                               <p>{this.state.UniversityInfo.undergraduatefunding1}</p>
                                <p>{this.state.UniversityInfo.undergraduatefunding2}</p>
                                <p>{this.state.UniversityInfo.undergraduatefunding3}</p>
                                <p>{this.state.UniversityInfo.undergraduatefunding4}</p>

                            </div>

                            <div className='funding-title'>
                                <h3>{this.state.UniversityInfo.postgraduatefunding}</h3>

                                <p>{this.state.UniversityInfo.postgraduateAmount}</p>


                               <p>{this.state.UniversityInfo.postgraduateFunding1}</p> 
                               <p> {this.state.UniversityInfo.postgraduateFunding2}</p>

                            </div>
                        </div>

                    </div>

                    <div className='location'>
                        <h1>Location</h1>

                        <p>{this.state.UniversityInfo.universityName}</p>

                        <p>{this.state.UniversityInfo.locationStreetName}</p>

                        <p>{this.state.UniversityInfo.locationStreetDetails}</p>
                    </div>

                </div>

                <div className='comment'>
                        <h1>Post a comment</h1>
                        <div className='postt'>

                    <input type='text' name='comment' placeholder='Comment' value={this.state.comment} onChange={this.inputHandler}  className='cmnt'/>
                        <button onClick={this.PostComment} className='btn-post'>Post</button>
                        </div>
                </div>

                {
                    this.state.comments.length > 0 &&
                    (
                        this.state.comments.map((val)=>{
                            return(
                                <>
                                    <p className='user-comment'>{val.comment}  </p>
                                    <div>
                                        <p>{val.commentReply}</p>
                                    </div>
                                </>
                            )
                        })
                    )
                }

            </div>


            // <h1>UniversityDetails</h1>
        )
    }
}


export default UniversityDetails