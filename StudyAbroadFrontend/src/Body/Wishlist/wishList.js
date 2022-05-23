import { Component } from "react";
import axios from 'axios'
import './wishlist.css'
class WishList extends Component {

    state = {
        MyWishList: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    deleteWishList = (wish_id) => {
        axios.delete('http://localhost:90/wishlist/delete/' + wish_id, this.state.config)
            .then((response) => {
                console.log(response)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    componentDidMount() {
        axios.get("http://localhost:90/wishlist/showall", this.state.config)
            .then((response) => {
                console.log("Response Check")
                console.log(response)
                this.setState({

                    MyWishList: response.data.data

                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        return (
            <>
                <div className='wishlist-section'>
                    <table className='wishlist-table'>
                        <thead>
                            <tr>
                                <th className='uni-image'>University Image</th>
                                <th className='uni-name'>University Name</th>
                                <th className='uni-location'>University Location</th>
                                <th className='uni-rank'>University Rank</th>
                                <th className='uni-remove'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.MyWishList.map((wishlist) => {
                                return (
                                    <>
                                        <tr>
                                            <td className='uni-img'>
                                                <img src={`http://localhost:90/${wishlist.Universities.universityImage}`} />
                                            </td>
                                            <td className='uni-name'>
                                                <h2>{wishlist.Universities.universityName}</h2>
                                            </td>
                                            <td className='uni-name'>
                                                <h2>{wishlist.Universities.universityLocation}</h2>
                                            </td>
                                            <td className='uni-name'>
                                                <h2>{wishlist.Universities.universityRank}</h2>
                                            </td>
                                            <td><button onClick={this.deleteWishList.bind(this, wishlist._id)} className='remove-btn'>
                                                <i class="fas fa-trash"></i>
                                            </button></td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default WishList