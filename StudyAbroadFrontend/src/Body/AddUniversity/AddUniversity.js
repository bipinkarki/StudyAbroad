import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import 'AddUniversity.css'

class AddUniversity extends Component {
    state = {
        universityImage: '',
        universityName: '',
        universityLocation: '',
        universityType: '',
        universityRank: '',
        internationalStudents: '',
        nationalities: '',
        totalPrograms: '',
        acceptanceRate: '',
        countries: '',
        studyAbroadPara1: '',
        studyAbroadPara2: '',
        studyAbroadPara3: '',
        studyAbroadPara4: '',
        whyStudyTitle1: '',
        whyStudyPara1: '',
        whyStudyTitle2: '',
        whyStudyPara2: '',
        whyStudyTitle3: '',
        whyStudyPara3: '',
        whyStudyTitle4: '',
        whyStudyPara4: '',
        whyStudyTitle5: '',
        whyStudyPara5: '',
        internationalLifePara1: '',
        internationalLifePara2: '',
        internationalLifePara3: '',
        internationalLifePara4: '',
        feeInformation1: '',
        feeInformation2: '',
        feeInformation3: '',
        undergraduatefunding: '',
        undergraduatefundingAmount: '',
        undergraduatefunding1: '',
        undergraduatefunding2: '',
        undergraduatefunding3: '',
        undergraduatefunding4: '',
        postgraduatefunding: '',
        postgraduateAmount: '',
        postgraduateFunding1: '',
        postgraduateFunding2: '',
        locationStreetName: '',
        locationStreetDetails: '',
        config: {
            headers: {
                'authorization': `Bearer${localStorage.getItem('token')}`
            }
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            universityImage: e.target.files[0]
        })
    }

    submitData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('universityImage', this.state.universityImage)
        data.append('universityName', this.state.universityName)
        data.append('universityLocation', this.state.universityLocation)
        data.append('universityType', this.state.universityType)
        data.append('universityRank', this.state.universityRank)
        data.append('internationalStudents', this.state.internationalStudents)
        data.append('nationalities', this.state.nationalities)
        data.append('totalPrograms', this.state.totalPrograms)
        data.append('acceptanceRate', this.state.acceptanceRate)
        data.append('countries', this.state.countries)
        data.append('studyAbroadPara1', this.state.studyAbroadPara1)
        data.append('studyAbroadPara2', this.state.studyAbroadPara2)
        data.append('studyAbroadPara3', this.state.studyAbroadPara3)
        data.append('studyAbroadPara4', this.state.studyAbroadPara4)
        data.append('whyStudyTitle1', this.state.whyStudyTitle1)
        data.append('whyStudyPara1', this.state.whyStudyPara1)
        data.append('whyStudyTitle2', this.state.whyStudyTitle2)
        data.append('whyStudyPara2', this.state.whyStudyPara2)
        data.append('whyStudyTitle3', this.state.whyStudyTitle3)
        data.append('whyStudyPara3', this.state.whyStudyPara3)
        data.append('whyStudyTitle4', this.state.whyStudyTitle4)
        data.append('whyStudyPara4', this.state.whyStudyPara4)
        data.append('whyStudyTitle5', this.state.whyStudyTitle5)
        data.append('whyStudyPara5', this.state.whyStudyPara5)
        data.append('internationalLifePara1', this.state.internationalLifePara1)
        data.append('internationalLifePara2', this.state.internationalLifePara2)
        data.append('internationalLifePara3', this.state.internationalLifePara3)
        data.append('internationalLifePara4', this.state.internationalLifePara4)
        data.append('feeInformation1', this.state.feeInformation1)
        data.append('feeInformation2', this.state.feeInformation2)
        data.append('feeInformation3', this.state.feeInformation3)
        data.append('undergraduatefunding', this.state.undergraduatefunding)
        data.append('undergraduatefundingAmount', this.state.undergraduatefundingAmount)
        data.append('undergraduatefunding1', this.state.undergraduatefunding1)
        data.append('undergraduatefunding2', this.state.undergraduatefunding2)
        data.append('undergraduatefunding3', this.state.undergraduatefunding3)
        data.append('undergraduatefunding4', this.state.undergraduatefunding4)
        data.append('postgraduatefunding', this.state.postgraduatefunding)
        data.append('postgraduateAmount', this.state.postgraduateAmount)
        data.append('postgraduateFunding1', this.state.postgraduateFunding1)
        data.append('postgraduateFunding2', this.state.postgraduateFunding2)
        data.append('locationStreetName', this.state.locationStreetName)
        data.append('locationStreetDetails', this.state.locationStreetDetails)

        console.log(data)

        axios.post('http://localhost:90/universities/insert', data)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload()
    }
    render() {
        return (
            <div className='add-university'>
                <h1>Add University</h1>
                <form>
                    <div className='add-text-box'>
                        <label for='universityImage'><b>University Image</b></label>
                        <input type='file' name='universityImage' onChange={this.fileHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='universityName'><b>University Name</b></label>
                        <input type='text' name='universityName' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='universityLocation'><b>University Location</b></label>
                        <input type='text' name='universityLocation' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='universityType'><b>University Type</b></label>
                        <input type='text' name='universityType' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='universityRank'><b>University Rank</b></label>
                        <input type='text' name='universityRank' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='internationalStudents'><b>International Students</b></label>
                        <input type='text' name='internationalStudents' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='nationalities'><b>Nationalities</b></label>
                        <input type='text' name='nationalities' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='totalPrograms'><b>University Total Programs</b></label>
                        <input type='text' name='totalPrograms' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='acceptanceRate'><b>Acceptance Rate</b></label>
                        <input type='text' name='acceptanceRate' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='countries'><b>Countries</b></label>
                        <input type='text' name='countries' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='studyAbroadPara1'><b>StudyAbroadPara1</b></label>
                        <input type='text' name='studyAbroadPara1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='studyAbroadPara2'><b>StudyAbroadPara2</b></label>
                        <input type='text' name='studyAbroadPara2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='studyAbroadPara3'><b>StudyAbroadPara3</b></label>
                        <input type='text' name='studyAbroadPara3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='studyAbroadPara4'><b>StudyAbroadPara4</b></label>
                        <input type='text' name='studyAbroadPara4' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyTitle1'><b>WhyStudyTitle1</b></label>
                        <input type='text' name='whyStudyTitle1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyPara1'><b>WhyStudyPara1</b></label>
                        <input type='text' name='whyStudyPara1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyTitle2'><b>WhyStudyTitle2</b></label>
                        <input type='text' name='whyStudyTitle2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyPara2'><b>WhyStudyPara2</b></label>
                        <input type='text' name='whyStudyPara2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyTitle3'><b>WhyStudyTitle3</b></label>
                        <input type='text' name='whyStudyTitle3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyPara3'><b>WhyStudyPara3</b></label>
                        <input type='text' name='whyStudyPara3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyTitle4'><b>WhyStudyTitle4</b></label>
                        <input type='text' name='whyStudyTitle4' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyPara4'><b>WhyStudyPara4</b></label>
                        <input type='text' name='whyStudyPara4' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyTitle5'><b>WhyStudyTitle5</b></label>
                        <input type='text' name='whyStudyTitle5' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='whyStudyPara5'><b>WhyStudyPara5</b></label>
                        <input type='text' name='whyStudyPara5' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='internationalLifePara1'><b>International Life Para1</b></label>
                        <input type='text' name='internationalLifePara1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='internationalLifePara2'><b>International Life Para2</b></label>
                        <input type='text' name='internationalLifePara2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='internationalLifePara3'><b>International Life Para3</b></label>
                        <input type='text' name='internationalLifePara3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='feeInformation1'><b>Fee Information1</b></label>
                        <input type='text' name='feeInformation1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='feeInformation2'><b>Fee Information2</b></label>
                        <input type='text' name='feeInformation2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='feeInformation3'><b>Fee Information3</b></label>
                        <input type='text' name='feeInformation3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='undergraduatefunding'><b> Under-Graduate Funding </b></label>
                        <input type='text' name='undergraduatefunding' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='undergraduatefundingAmount'><b>Under-Graduate Funding Amount </b></label>
                        <input type='text' name='undergraduatefundingAmount' onChange={this.changeHandler} />
                    </div>
                    
                    <div className='add-text-box'>
                        <label for='undergraduatefunding1'><b>Under-Graduate Funding1</b></label>
                        <input type='text' name='undergraduatefunding1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='undergraduatefunding2'><b>Under-Graduate Funding2</b></label>
                        <input type='text' name='undergraduatefunding2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='undergraduatefunding3'><b>Under-Graduate Funding3</b></label>
                        <input type='text' name='undergraduatefunding3' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='undergraduatefunding4'><b>Under-Graduate Funding4</b></label>
                        <input type='text' name='undergraduatefunding4' onChange={this.changeHandler} />
                    </div>
                   
                    <div className='add-text-box'>
                        <label for='postgraduatefunding'><b>Post-Graduate Funding</b></label>
                        <input type='text' name='postgraduatefunding' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='postgraduateAmount'><b>Post-Graduate Amount</b></label>
                        <input type='text' name='postgraduateAmount' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='postgraduateFunding1'><b>Post-Graduate Funding1</b></label>
                        <input type='text' name='postgraduateFunding1' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='postgraduateFunding2'><b>Post-Graduate Funding2</b></label>
                        <input type='text' name='postgraduateFunding2' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='locationStreetName'><b>Location Street Name2</b></label>
                        <input type='text' name='locationStreetName' onChange={this.changeHandler} />
                    </div>
                    <div className='add-text-box'>
                        <label for='locationStreetDetails'><b>Location Street Details</b></label>
                        <input type='text' name='locationStreetDetails' onChange={this.changeHandler} />
                    </div>

                    <button onClick={this.submitData} className='university-add-btn'>
                        <Link to={'/addUniversity'} className='addUniversity-link'>Add UNiversity</Link>
                    </button>
                </form>

            </div>

        )
    }


}

export default AddUniversity