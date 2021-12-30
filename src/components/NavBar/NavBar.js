import React, { useState } from 'react';
import './NavBar.css'
import MenuIcon from './menu_Icon.svg';
import ContactBar from '../ContactForm/ContactBar';

const NavBar = ({ bannerInView, navBtns }) => {

    // conditionally rendered nav menu (if banner is in viewport)
    const [ showMenu, setShowMenu ] = useState(false);
    const hamburgerMenu =
        <div onClick={() => setShowMenu(!showMenu)}>
            <img className="menu-icon" src={MenuIcon} alt="menu icon" />
            <nav className="hamburger-menu" style={{left: !showMenu && -250}}>
                {navBtns}
                <ContactBar />
            </nav>
            {showMenu && <span className="menu-mask" />}
        </div>

    return(
        <nav className="bar-menu flex justify-center flex-wrap bg-light-blue bb bt b--white cusMar">
            {navBtns}
            {!bannerInView && hamburgerMenu}
        </nav>
    );
}

export default NavBar;