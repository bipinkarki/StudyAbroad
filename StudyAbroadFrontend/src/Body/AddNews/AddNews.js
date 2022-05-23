import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AddNews extends Component{
    state={
        Newsimage:'',
        NewsTitle:'',
        NewsDetails:'',
        config:{
            'authorization' : `Bearer${localStorage.getItem('token')}`
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e)=>{
        this.setState({
            Newsimage : e.target.files[0]
        })
    }

    submitData=(e) =>{
        e.preventDefault();
        const data = new FormData()//new line

        data.append('Newsimage', this.state.Newsimage)
        data.append('NewsTitle', this.state.NewsTitle)
        data.append('NewsDetails', this.state.NewsDetails)

        console.log(data)

        axios.post('http://localhost:90/news/insert', data)
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
            <div className='news-section'>
               <h1>Add News</h1>
               <form>
                   <div className='newstext-box'>
                       <label for= 'Newsimage'><b>News Image</b></label>
                       <input type = 'file' name='countryImage' onChange={this.fileHandler}/>
                   </div>
                   <div className='newstext-box'>
                       <label for= 'NewsTitle'><b>News Title</b></label>
                       <input type = 'text' name='NewsTitle' onChange={this.changeHandler}/>
                   </div>
                   <div className='newstext-box'>
                       <label for= 'NewsDetails'><b>News Details</b></label>
                       <input type = 'text' name='NewsDetails' onChange={this.changeHandler}/>
                   </div>

                   <button onClick={this.submitData} className='news-button'>
                       <Link to={'/news'} className='news-link'>Add News</Link>
                   </button>
               </form>
            </div>
        )
    }
}

export default AddNews