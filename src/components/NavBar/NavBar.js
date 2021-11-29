import React, { useState } from 'react';
import './NavBar.css'
import MenuIcon from './menu_Icon.svg';
import ContactBar from '../ContactForm/ContactBar';
import { timeout } from '../../utils/utils';

const NavBar = ({ bannerInView, contentRef, setIsContactVisible, contentTab, setContentTab, contentTabs }) => {
   
    // scrolls to content and changes content via route
    const contentScroll = async (elmt) => {
        if(elmt.target.title){
        contentRef.current.scrollIntoView({behavior: 'smooth'});
        await timeout(100);
        setContentTab(elmt.target.title);
        }
    }

    const navBtns = 
        <div style={{width: "100%"}}>
            <span onClick={contentScroll}> {
                // generate p element for every item in contentTabs
                Object.keys(contentTabs).map(tabName => {
                    // set tab button text color based on current tab
                    const activeTab = tabName === contentTab ? "black" : "white";
                    return <p title={tabName} className="nav-btn" style={{color: activeTab}}>{tabName}</p>
                })}
            </span>
            <p title="Contact Me" class="contact-btn" onClick={() => setIsContactVisible(true)}>Contact Me</p>
        </div>;     

    const [ showMenu, setShowMenu ] = useState(false);
    const hamburgerMenu =
        <div onClick={() => setShowMenu(!showMenu)}>
            <img className="menu-icon" src={MenuIcon}  />
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