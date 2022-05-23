import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './addCountries.css'

class AddCountries extends Component{
        state={
            countryImage :'',
            countryName : '',
            whyStudy :'',
            programs :'',
            subjects : '',
            cost : '',
            qualifications: '',
            languageTest : '',
            studentVisa :'',
            howStudy  :'',
            config :{
                headers:{
                    'authorization' : `Bearer${localStorage.getItem('token')}`
                }
            }
        }
    
        changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        fileHandler = (e)=>{
            this.setState({
                countryImage : e.target.files[0]
            })
        }

        submitData = (e) =>{
            e.preventDefault();
            const data = new FormData() //new line
        
            data.append('countryImage', this.state.countryImage)
            data.append('countryName' , this.state.countryName)
            data.append('whyStudy' , this.state.whyStudy)
            data.append('programs' , this.state.programs)
            data.append('subjects' , this.state.subjects)
            data.append('cost' , this.state.cost)
            data.append('qualifications' , this.state.qualifications)
            data.append('languageTest' , this.state.languageTest)
            data.append('studentVisa' , this.state.studentVisa)
            data.append('howStudy' , this.state.howStudy)

            console.log(data)

            axios.post ('http://localhost:90/countries/insert', data)
            .then((response) =>{
                console.log(response)
            })
            .catch((err) =>{
                console.log(err.response)
            })
            window.location.reload()
        }


    render(){
        return(
            <div className='add-section'>
                <h1>Add Countries</h1>
                <form>
                    <div className='addText-box'>
                        <label for ='countryImage'><b>Country Image</b></label>
                        <input type ='file' name='countryImage' onChange={this.fileHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='countryName'><b>Country Name</b></label>
                        <span></span>
                        <input type ='text' name='countryName' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='whyStudy'><b>Why Study</b></label>
                        <span></span>
                        <input type ='text' name='whyStudy' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='programs'><b>Programs</b></label>
                        <span></span>
                        <input type ='text' name='programs' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='subjects'><b>Subject</b></label>
                        <span></span>
                        <input type ='text' name='subjects' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='cost'><b>Cost</b></label>
                        <span></span>
                        <input type ='text' name='cost' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='qualifications'><b>Qualifications</b></label>
                        <span></span>
                        <input type ='text' name='qualifications' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='languageTest'><b>Language Test</b></label>
                        <span></span>
                        <input type ='text' name='languageTest' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='studentVisa'><b>Student Visa</b></label>
                        <span></span>
                        <input type ='text' name='studentVisa' onChange={this.changeHandler}/>
                    </div>
                    <div className='addText-box'>
                        <label for ='howStudy'><b>How Study</b></label>
                        <span></span>
                        <input type ='text' name='howStudy' onChange={this.changeHandler}/>
                    </div>

                    <button onClick={this.submitData} className='add-button'>
                        <Link to={'/countries'} className='addCountries-link'>Add Country</Link>
                    </button>


                </form>
            </div>

        )


    }
}

export default AddCountries