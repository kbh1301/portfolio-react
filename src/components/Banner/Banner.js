import React from 'react';
import avi from '../../img/KBH_avi.jpg';
import banner from '../../img/banner.jpg';
import './Banner.css'

const Banner = ({ bannerBar, bannerBarScroll, showContact }) => {

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
                <div id="bannerBar" ref={bannerBar} className="bg-light-blue bb bt b--white cusMar">
                    <p class="f4 no-underline grow shadow-hover dib v-mid bg-light-blue black ph4 pv2 mb3 mt3 ml2 mr2 br-pill" onClick={() => bannerBarScroll('home')}>Home</p>
                    <p class="f4 no-underline grow shadow-hover dib v-mid bg-light-blue white ph4 pv2 mb3 mt3 ml2 mr2 br-pill" onClick={() => bannerBarScroll('resume')}>Resume</p>
                    <p class="f4 no-underline grow shadow-hover dib v-mid bg-light-blue white ph4 pv2 mb3 mt3 ml2 mr2 br-pill" onClick={() => bannerBarScroll('demos')}>Demos</p>
                    <p class="f4 no-underline grow shadow-hover dib v-mid bg-light-blue white ph4 pv2 mb3 mt3 ml2 mr2 br-pill" onClick={() => bannerBarScroll('hobbies')}>Hobbies</p>
                    <p class="f4 no-underline grow shadow-hover dib v-mid bg-blue white ph4 pv2 mb3 mt3 ml2 mr2 br-pill i" onClick={() => showContact()}>Contact Me</p>
                </div>
            </div>
        </header>        
    );
}

export default Banner;