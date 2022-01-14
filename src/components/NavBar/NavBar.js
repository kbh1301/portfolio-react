import React, { useState } from 'react';
import './NavBar.css'
import MenuIcon from './menu_icon.svg';
import ContactBar from '../ContactBar/ContactBar';
import { useMediaQuery } from '../../utils/utils.js';

const NavBar = ({ bannerInView, navBtns }) => {
    const isMobile = useMediaQuery('(max-width: 575.98px)');

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
        <nav className="bar-menu" style={{ height: isMobile && '.5rem'}}>
            <div style={{ display: isMobile && 'none'}}>{navBtns}</div>
            {(!bannerInView || isMobile) && hamburgerMenu}
        </nav>
    );
}

export default NavBar;