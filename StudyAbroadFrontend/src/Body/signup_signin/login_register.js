import { Component } from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import images from '../../images/img.png'

class LoginRegister extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    };


    //register
    submitUser = (e) => {
        e.preventDefault();
        const userdata = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:90/register", userdata)
            .then((response) => {
                console.log(response)
                this.props.history.push('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    //login

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/login', this.state)
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    //eventlisterner


render() {
    if (localStorage.getItem('token')) {
        return <Redirect to="/home" />
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <div class="signin-signup">
                    {/* for login */}
                    <form className='sign-in-form'>
                        <h2 className='title'>Sign In</h2>
                        <div className='input-field'>
                            <i class="fas fa-user"></i>
                            <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.inputHandler} />
                        </div>

                        <div className='input-field'>
                            <i class="fas fa-lock"></i>
                            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.inputHandler} />
                        </div>

                        <button onClick={this.submitLogin} className='btn solid'>Sign In</button>

                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>

                    {/* for register */}

                    <form className='sign-up-form'>
                        <h2 className='title'>Sign Up</h2>
                        <div className='input-field'>
                            <i class="fas fa-user"></i>
                            <input type="text" value={this.state.firstname} onChange={(event => { this.setState({ firstname: event.target.value }) })} placeholder='Firstname' />
                        </div>
                        <div className='input-field'>
                            <i class="fas fa-user"></i>
                            <input type="text" value={this.state.lastname} onChange={(event => { this.setState({ lastname: event.target.value }) })} placeholder='Lastname' />
                        </div>
                        <div className='input-field'>
                            <i class="fas fa-envelope"></i>
                            <input type="text" value={this.state.email} onChange={(event => { this.setState({ email: event.target.value }) })} placeholder='Email' />
                        </div>
                        <div className='input-field'>
                            <i class="fas fa-phone-square-alt"></i>
                            <input type="text" value={this.state.phone} onChange={(event => { this.setState({ phone: event.target.value }) })} placeholder='Phone' />
                        </div>

                        <div className='input-field'>
                            <i class="fas fa-user"></i>
                            <input type="text" value={this.state.username} onChange={(event => { this.setState({ username: event.target.value }) })} placeholder='Username' />
                        </div>
                        <div className='input-field'>
                            <i class="fas fa-lock"></i>
                            <input type="password" value={this.state.password} onChange={(event => { this.setState({ password: event.target.value }) })} placeholder='Password' />
                        </div>

                        <button onClick={this.submitUser} className='btn'>Submit</button>

                        <p class="social-text">Or Sign up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>


            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button class="btn transparent" className="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src={images} classname="login-image" alt="" />
                </div>

                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" className="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" class="image" alt="" />
                </div>
            </div>
        </div>
    )
}
}

export default LoginRegister