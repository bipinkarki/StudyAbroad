import React, { Component } from 'react';
import './Footer.css';
import { BackTop } from 'antd'
import { Button } from '../Header/Button';
import { Link } from 'react-router-dom';

// class Footer extends Component {
//     render() {
//         return (
//             <div className='footer-container'>
//                 <div class='footer-links'>
//                     <div className='footer-link-wrapper'>
//                         <div class='footer-link-items'>
//                             <h2>About Us</h2>
//                             <Link to='/sign-up'>How it works</Link>
//                             <Link to='/'>Testimonials</Link>
//                             <Link to='/'>Careers</Link>
//                             <Link to='/'>Investors</Link>
//                             <Link to='/'>Terms of Service</Link>
//                         </div>
//                         <div class='footer-link-items'>
//                             <h2>Contact Us</h2>
//                             <Link to='/'>Contact</Link>
//                             <Link to='/'>Support</Link>
//                             <Link to='/'>Destinations</Link>
//                             <Link to='/'>Sponsorships</Link>
//                         </div>
//                     </div>
//                         <div class='footer-link-items'>
//                             <h2>Social Media</h2>
//                             <Link to='/'>Instagram</Link>
//                             <Link to='/'>Facebook</Link>
//                             <Link to='/'>Youtube</Link>
//                             <Link to='/'>Twitter</Link>
//                         </div>
//                     </div>
//                 </div>
//         )
//     }
// }


function Footer() {
    return (
      <div className="container-fluids">
        <div className="footer">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="http://google.com">STUDY ABROAD</a>
          </div>
          <ul className="socials">
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <div className="copyright">Copyright &copy; 2021 StudyAbroad</div>
          <BackTop>
            <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
          </BackTop>
        </div>
      </div>
    );
  }

    export default Footer;