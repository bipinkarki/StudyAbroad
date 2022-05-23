import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
// import React, { Component, Button } from 'react'
import News from '../NewsandPolicy/news'
import FAQ from '../FAQ/faq'
import AboutUs from '../AboutUs/AboutUs'
import Feature from '../Feature/feature'
import Works from '../Works/works'
// import { Button,Form,FormControl, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Button } from 'antd';


import './index.css'

class Home extends Component {
    render() {
        return (
            <>
                {/* <div className='home-container'>
                    <h1>Discover. Research. Decide.</h1>
                    <p>We will help you to find, apply & enroll at universities abroad</p>

                    <div className='home-btns'>
                    
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Find your university"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button className='search-btn'>SEARCH</Button>
                        </Form>
                    </div>
                </div> */}

<div className='home-container'>
                    <div className="homediv">
                    <h1>Discover. Research. Decide.</h1>
                    <p>We will help you to find, apply & enroll at universities abroad</p>

                    <div className='home-btns'>
                        {/* <Form className="d-flex">
                            
                            <Button className='search-btn'>SEARCH</Button>
                        </Form> */}
                         <div className="btnHolder">
                  <Button type="primary" size="large"><Link to='/Universities'>Find a University</Link></Button>
                 
                </div>
                </div>
                    </div>

                    
                </div>
                <AboutUs />
                <FAQ />
                <Feature />
                <Works />


                    <div className='mailer-section'>
                        <button><Link to='/book/counseling'>Book Counseling</Link></button>
                    </div>
            </>
        )
    }
}

  

export default Home

