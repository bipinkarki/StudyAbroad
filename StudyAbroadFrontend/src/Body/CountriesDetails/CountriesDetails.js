import { Component } from "react";
import axios from 'axios'
import { Row } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './CountriesDetails.css';
import images from  './USA.png'
import image1 from './qua.png'
import image2 from './how.png'
import image3 from './program.png'
import image4 from './globe.png'

class CountriesDetails extends Component{
    
    state= {
        CountriesInfo : [],
        config : {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount(){
        axios.get("http://localhost:90/countries/single/" + this.state.id)
        .then(response =>{
            console.log(response)
            this.setState({
                CountriesInfo : response.data
            })
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    

    render(){
        return(
            // <Container>
                // <Row>
                //     <div className = 'countries-details-section'>
                //                 <div className='Country-info' key = {this.state.CountriesInfo._id}>
                //                     <div className=  'country-image'>
                //                         <img src = {`http://localhost:90/${this.state.CountriesInfo.countryImage}`}/>
                //                     </div>
                //                     <div className='why-study'>
                //                         <h1>Why study in {this.state.CountriesInfo.countryName}?</h1>
                //                         <p>{this.state.CountriesInfo.whyStudy}</p>
                //                     </div>
                //                     <div className='best-programs'>
                //                         <h1>What are the best programs in the {this.state.CountriesInfo.countryName}?</h1>
                //                         <p>{this.state.CountriesInfo.programs}</p>
                //                     </div>
                //                     <div className='subjects'>
                //                         <h1>Popular subjects to study in {this.state.CountriesInfo.countryName}</h1>
                //                         <p>{this.state.CountriesInfo.subjects}</p>
                //                     </div>
                //                     <div className ='cost'>
                //                         <h1>What is the cost of studying in the {this.state.CountriesInfo.countryName}?</h1>
                //                         <p>{this.state.CountriesInfo.cost}</p>
                //                     </div>
                //                     <div className='requirements'>
                //                         <h1>What are the requirements to study in the {this.state.CountriesInfo.countryName}?</h1>
                //                         <div className='qualifications'>
                //                             <h3>Qualifications</h3>
                //                             <p>{this.state.CountriesInfo.qualifications}</p>
                //                         </div>
                //                         <div className='language-test'>
                //                             <h3>English language tests</h3>
                //                             <p>{this.state.CountriesInfo.languageTest}</p>
                //                         </div>
                //                     </div>
                //                     <div className='studentVisa'>
                //                         <h1>{this.state.CountriesInfo.countryName} student visa</h1>
                //                         <p>{this.state.CountriesInfo.studentVisa}</p>
                //                     </div>
                //                     <div className='howStudy'>
                //                         <h1>How to study in {this.state.CountriesInfo.countryName}?</h1>
                //                         <p>{this.state.CountriesInfo.howStudy}</p>
                //                     </div>
                //                 </div>
                      
                //     </div>
                // </Row>


                <Row>
                <div className = 'countries-details-section'>
                    <div className='textCenter'> <h1>Study in the {this.state.CountriesInfo.countryName} </h1>
                                    <p>Everything you need to know about studying in the {this.state.CountriesInfo.countryName}<br></br> as an international student.</p></div>
                   
                              
                    {/* <div className='Countriesdetails'>{this.state.CountriesInfo((countryinfo) =>{
                        return( */}
                            <div className='Country-info' key = {this.state.CountriesInfo._id}>
                                
                                <div className=  'country-image'>
                                    
                                    <img src = {`http://localhost:90/${this.state.CountriesInfo.countryImage}`}/>
                        
                                </div>
                                <div className='contain'>
                                <div className='why-study'>
                                <img src={images} />
                                    <h1 className='countrytext'>Why study in {this.state.CountriesInfo.countryName}?</h1>
                                    <p>{this.state.CountriesInfo.whyStudy}</p>
                                    <Button>View university</Button>
                                </div>
                                <div className='best-programs'>
                                <img src={image1} />
                                    <h1 className='countrytext'>What are the best programs in the {this.state.CountriesInfo.countryName}?</h1>
                                    <p>{this.state.CountriesInfo.programs}</p>
                                </div>
                                <div className='subjects'>
                                    <h1 className='countrytext'>Popular subjects to study in {this.state.CountriesInfo.countryName}</h1>
                                    <p>{this.state.CountriesInfo.subjects}</p>
                                </div>
                                <div className ='cost'>
                                <img src={image2} />
                                    <h1 className='countrytext'>What is the cost of studying in the {this.state.CountriesInfo.countryName}?</h1>
                                    <p>{this.state.CountriesInfo.cost}</p>
                                </div>
                                <div className='requirements'>
                                    <h1 className='countrytext'>What are the requirements to study in the {this.state.CountriesInfo.countryName}?</h1>
                                    <div className='qualifications'>
                                    <img src={image3} />
                                        <h3>Qualifications</h3>
                                        <p>{this.state.CountriesInfo.qualifications}</p>
                                    </div>
                                    <div className='language-test'>
                                        <h3>English language tests</h3>
                                        <p>{this.state.CountriesInfo.languageTest}</p>
                                    </div>
                                </div>
                                <div className='studentVisa'>
                                <img src={image4} />
                                    <h1 className='countrytext'>{this.state.CountriesInfo.countryName} student visa</h1>
                                    <p>{this.state.CountriesInfo.studentVisa}</p>
                                </div>
                                <div className='howStudy'>
                                    <h1 className='countrytext'>How to study in {this.state.CountriesInfo.countryName}?</h1>
                                    <p>{this.state.CountriesInfo.howStudy}</p>
                                </div>
                                </div>
                            </div>
                        {/* )
                    })} */}
                    {/* </div> */}
                </div>
            </Row>
         
        )
    }
}

export default CountriesDetails