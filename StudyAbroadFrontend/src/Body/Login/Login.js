import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import './login.css'
import { Link } from 'react-router-dom'
import images from '../../images/img.png'
import GoogleLogin from "./googleLogin/googlelogin";

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

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
    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to="/" />
        }
        return (
            // <div className = 'login-box'>
            //     <h1>Login</h1>

            //     <form>
            //         <div className = 'textbox'>
            //             <i class = "fas fa-user"></i>
            //             <input type = 'text' name = 'username' placeholder='Username' value={this.state.username} onChange={this.inputHandler}/>
            //         </div>

            //         <div className = 'textbox'>
            //             <i class = "fas fa-lock"></i>
            //             <input type = 'password' name = 'password' placeholder='Password' value={this.state.password} onChange={this.inputHandler}/>
            //         </div>

            //         <button onClick= {this.submitLogin} className='login-btn'>Sign In</button>
            //     </form>
            // </div>

            <div className='containerr'>
                <div className='form-container'>
                    <div class="signin-signup">
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
                    </div>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                               If your are new here then sign up
                            </p>
                            <button class="btn-transparent" id="sign-up-btn">
                                <Link to= '/register' className='signup-link'>Sign up</Link>
                                
                            </button>
                        </div>
                        <div className='login-img'>
                            <img src={images}/>
                        </div>
                       

                    {/* <div className = 'text-box'>
                        <i class = "fas fa-lock"></i>
                        <input type = 'password' name = 'password' placeholder='Password' value={this.state.password} onChange={this.inputHandler}/>
                    </div> */}
                </div>



            </div>
            <div className='g-signin'>
                <GoogleLogin/>
            </div>
            </div>
            
        )
    }
}


export default Login