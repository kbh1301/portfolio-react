import React from 'react';
import NavButtons from '../NavButtons/NavButtons';
import avi from '../../img/KBH_avi.jpg';
import banner from '../../img/banner.jpg';
import './Banner.css'

const Banner = ({ bannerBar, bannerBarScroll, showContact, route }) => {

    // dynamically set banner size to fit viewport
    window.requestAnimationFrame(() => {
        const linksBarSize = document.getElementById("bannerBar")?.scrollHeight;
        const bannerMain = document.getElementById("bannerMain");
        const bannerMinor = document.getElementById("bannerMinor");
        const bannerSize = `calc(100vh - ${linksBarSize}px)`;

        bannerMain.style.minHeight = bannerSize;
        bannerMinor.style.minHeight = bannerSize;
    })

    return (
        <header class="">
            <div id="bannerMain" class="cover bg-left bg-center-l" style={{backgroundImage: `url(${banner})`}}>
                <div id="bannerMinor" class="bg-black-70 flex justify-center items-center w-100">
                    <div class="w-100 fadeInContent">
                        <div className='cusWrapper cusCusImg dib mt4 br-100 ba bw2 b--light-blue grow'>
                            <img src={avi} className="cusWrapperImg cusImg block" alt="Avatar"/>
                        </div>
                        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title sans-serif">My name is Kyle Hulvey</h1>
                        <h2 class="fw1 f3 white-80 mt3 mb5 sans-serif">And I'm a Software Developer</h2>
                    </div>
                </div>
                <div id="bannerBar" ref={bannerBar} className="flex justify-center flex-wrap bg-light-blue bb bt b--white cusMar">
                    <NavButtons bannerBarScroll={bannerBarScroll} showContact={showContact} route={route} source='Banner' />
                </div>
            </div>
        </header>        
    );
}

export default Banner;