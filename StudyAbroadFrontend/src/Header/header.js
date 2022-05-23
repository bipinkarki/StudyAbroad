import { Component } from "react"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

// class Header extends Component {

//     render() {
//         const logout = () => {
//             localStorage.clear()
//             window.location.href = '/'
//         }
//         const token = localStorage.getItem('token')
//         // const type = localStorage.getItem('type')
//         return (
//             <>
//                 <nav className="navbar">
//                     <div className="navbar-container">
//                         {<Link to='/' className='navbar-logo'>StudyAbroad</Link>}

//                         <ul classname='nav-menu'>
//                             <li className="nav_item">
//                                 <Link to='/' className='nav-links'>
//                                     Home
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/countries' className='nav-links'>
//                                     Countries
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/exams' className='nav-links'>
//                                     Exams
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/Universities' className='nav-links'>
//                                     Universities
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/news' className='nav-links'>
//                                     News&policy
//                                 </Link>
//                             </li>


//                             {token ? <>
//                                 <li className="nav_item">
//                                     <Link to='/' className='nav-links' onClick={logout}>
//                                         Logout
//                                     </Link>
//                                 </li>

//                             </> : <>
//                                 <li className="nav_item">
//                                     <Link to='/register' className='nav-links'>
//                                         SignUp
//                                     </Link>
//                                 </li>

//                                 <li className="nav_item">
//                                     <Link to='/login' className='nav-links'>
//                                         SignIn
//                                     </Link>
//                                 </li>

//                             </>}

//                         </ul>


//                     </div>

//                 </nav>
//             </>
//         )
//     }
// }

// export default Header



function Header(){

   
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
        const logout = () => {
            localStorage.clear()
            window.location.href = '/'
        }

        const showButton = () =>{
            if(window.innerWidth <=960) {
                setButton(false);
            }else{
                setButton(true)
            }
        }

        useEffect(() => {
            showButton()
        }, [])

        window.addEventListener('resize', showButton);
        const token = localStorage.getItem('token')
        const type = localStorage.getItem('type')
        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            StudyAbroad <i className='fab fa-typo3'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className= { click? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links'  onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/countries' className='nav-links' onClick={closeMobileMenu}>
                                    Countries
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/exams' className='nav-links' onClick={closeMobileMenu}>
                                    Exams
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/Universities' className='nav-links'  onClick={closeMobileMenu}>
                                    Universities
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/news' className='nav-links'  onClick={closeMobileMenu}>
                                    News&policy
                                </Link>
                            </li>
                            {
                                token&&
                                (
                                    (type!=="Admin")?
                                    <li className='nav-item'>
                                        <Link to='/wishlist' className= 'nav-links' onClick={closeMobileMenu}>
                                            WishList
                                        </Link>
                                    </li>:<></>
                                )
                            }
                           
                        
                            {token ? <>
                                <li className="nav-item">
                                    <Link to='/' className='nav-links' onClick={logout}>
                                        Logout
                                    </Link>
                                </li>

                            </> : <>
                                <li className="nav-item">
                                    <Link to='/register' className='nav-links'  onClick={closeMobileMenu}>
                                        SignUp
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/login' className='nav-links'  onClick={closeMobileMenu}>
                                        SignIn
                                    </Link>
                                </li>

                            </>}

                        </ul>


                    </div>

                </nav>
            </>
        )
    }


export default Header