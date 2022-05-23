import { Component, Card, CardGroup } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import './countries.css'


class Countries extends Component {

    state = {
        Countries: [],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }



    componentDidMount() {
        axios.get("http://localhost:90/countries/showall")
            .then((response) => {
                console.log(response)
                this.setState({
                    Countries: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            // <Container>
            // <Row>
            <div className='countries-section'>
                <div className='countries'>{this.state.Countries.map((countries) => {
                    return (

                        <div className='cardd-box'>
                            <div className='box'>
                                <div className='imgbox'>
                                    <img src={`http://localhost:90/${countries.countryImage}`} className='countries-img' />
                                </div>
                                <h1>{countries.countryName}</h1>
                                {/* <p>{countries.whyStudy}</p> */}
                                <button className='visit-btn'>
                                    <Link to={"/countriessssss/" + countries._id} className="btnn">
                                        VISIT
                                    </Link>
                                </button>
                            </div>
                        </div>


                    )
                })}</div>
            </div>
            // </Row>
            // </Container>

        )
    }
}


export default Countries