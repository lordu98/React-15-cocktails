import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <img className='logo'
                         src='https://raw.githubusercontent.com/john-smilga/react-projects/181d6adf89c8c61c72a0b8c5c1a8ad6af15e6d19/15-cocktails/setup/src/logo.svg'
                         alt="cocktail db logo"/>
                </Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar