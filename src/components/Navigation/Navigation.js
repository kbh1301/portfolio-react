import React from 'react';
import avi from '../../img/KBH_avi.jpg';
import './Navigation.css'

const Navigation = ({ navVisible, bannerBarScroll, onRouteChange }) => {
    const isVisible = navVisible ? '' : 'cus-bar--hidden';

    return(
        <nav class={`flex bb b--black bg-light-blue cus-bar fixed w-100 z-9999 ${isVisible}`}>
            <div class="pointer link white-70 no-underline flex items-center pa2 absolute" onClick={() => bannerBarScroll('home')}>
            <div className='cusWrapper dib w3 h3 br-100 ba bw1 b--black grow'>
                <img src={avi} className="cusWrapperImg block" alt="Avatar"/>
            </div>
            <span className="dot absolute bg-light-blue"/>
            </div>
            <div class="flex-grow pa3 flex items-center ml-auto">
                <p class="bg-light-blue pa2 link grow shadow-hover black f6 f5-l br-pill dib mr3 mr4-l" onClick={() => bannerBarScroll('home')} title="Resume">Home</p>
                <p class="bg-light-blue pa2 link grow shadow-hover br-pill white f6 f5-l dib mr3 mr4-l" onClick={() => bannerBarScroll('resume')} title="Resume">Resume</p>
                <p class="bg-light-blue pa2 link grow shadow-hover br-pill white f6 f5-l dib mr3 mr4-l" onClick={() => bannerBarScroll('demos')} title="Demos">Demos</p>
                <p class="bg-light-blue pa2 link grow shadow-hover br-pill white f6 f5-l dib mr3 mr4-l" onClick={() => bannerBarScroll('hobbies')} title="Hobbies">Hobbies</p>
                <p class="bg-blue link grow shadow-hover white f6 f5-l dib pa2 i b--black br-pill" href="" title="Contact Me">Contact Me</p>
            </div>
        </nav>
    );
}

export default Navigation;