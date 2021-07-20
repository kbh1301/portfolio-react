import React from 'react';
import NavButtons from '../NavButtons/NavButtons';
import avi from '../../img/KBH_avi.jpg';
import './Navigation.css'

const Navigation = ({ bannerBarScroll, showContact, route }) => {

    return(
        <nav class="flex bb b--black bg-light-blue cus-bar fixed w-100 z-9999 slideDown">
            <div class="pointer link white-70 no-underline flex items-center pa2 absolute" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>
            <div className='cusWrapper dib w3 h3 br-100 ba bw1 b--black grow'>
                <img src={avi} className="cusWrapperImg block" alt="Avatar"/>
            </div>
            <span className="dot absolute bg-light-blue"/>
            </div>
            <div class="flex-grow pa3 flex items-center ml-auto">
                <NavButtons bannerBarScroll={bannerBarScroll} showContact={showContact} route={route} source='Navigation' />
            </div>
        </nav>
    );
}

export default Navigation;