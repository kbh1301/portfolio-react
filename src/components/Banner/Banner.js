import React from 'react';
import avi from '../../img/KBH_avi.jpg';
import banner from '../../img/banner.jpg';
import './Banner.css'

const Banner = () => {

    return (
        <header style={{height: '100%'}}>
            <div id="bannerMain" style={{backgroundImage: `url(${banner})`}}>
                <div id="bannerMinor">
                    <div className="fadeInContent" style={{width: "100%"}}>
                        <div className='cusWrapper cusCusImg'>
                            <img src={avi} className="cusWrapperImg cusImg" alt="Avatar"/>
                        </div>
                        <h1 className="bannerTitle">My name is Test</h1>
                        <h2 className="bannerSubTitle">And I'm a Software Developer</h2>
                    </div>
                </div>
            </div>
        </header>        
    );
}

export default Banner;