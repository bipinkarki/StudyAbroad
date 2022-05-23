import { Component } from "react";
import { Link } from 'react-router-dom';
import './mocktest.css'



class MockTest extends Component {
    render() {
        return (
            <div id='mocktest'>
                <h1>MockTest</h1>
                <div className='mocktest-container'>
                    {/* <div className='mocktest-section'>
                        <p className='types'><Link to={"/reading/test"} className='types-link'>Reading</Link></p>
                        <p className='types'><Link to={"/listening/test"} className='types-link'>Listening</Link></p>
                    </div>
                    <div className='mocktest-section'>
                        <p className='types'><Link to={"/writing/test"} className='types-link'>Writing</Link></p>
                        <p className='types'><Link to={"/speaking/test"} className='types-link'>Speaking</Link></p>
                    </div> */}

                    <div className='mocktest-section'>
                        <p ><Link to={"/reading/test"} className='types-link'>Reading</Link></p>
                        <p><Link to={"/listening/test"} className='types-link'>Listening</Link></p>
                    {/* <div className='mocktest-section'> */}
                        <p><Link to={"/writing/test"} className='types-link'>Writing</Link></p>
                        <p><Link to={"/speaking/test"} className='types-link'>Speaking</Link></p>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default MockTest