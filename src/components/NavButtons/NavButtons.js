import React, { Fragment } from 'react';

const NavButtons = ({ bannerBarScroll, showContact, route, source }) => {
    
    // set CSS properties based on where this component is being built
    const tabBtnCSS = () =>
        source === 'NavBar' ? "bg-light-blue pa2 link grow shadow-hover f6 f5-l br-pill dib mr3 mr4-l" :
        source === 'Banner' ? "f4 no-underline grow shadow-hover dib v-mid bg-light-blue black ph4 pv2 mb3 mt3 ml2 mr2 br-pill" :
        ""
    const contactBtnCSS = () =>
        source === 'NavBar' ? "bg-blue link grow shadow-hover white f6 f5-l dib pa2 i b--black br-pill" :
        source === 'Banner' ? "f4 no-underline grow shadow-hover dib v-mid bg-blue white ph4 pv2 mb3 mt3 ml2 mr2 br-pill i" :
        ""

    // set tab button text color based on current page route
    const activeTab = (e) => e === route ? "black" : "white";

    return(
        <Fragment>
            <div onClick={bannerBarScroll}>
                <p title="about" className={`${activeTab('about')} ${tabBtnCSS()}`}>About</p>
                <p title="resume" className={`${activeTab('resume')} ${tabBtnCSS()}`}>Resume</p>
                <p title="demos" className={`${activeTab('demos')} ${tabBtnCSS()}`}>Demos</p>
                <p title="hobbies" className={`${activeTab('hobbies')} ${tabBtnCSS()}`}>Hobbies</p>
            </div>
            <p title="Contact Me" class={`${contactBtnCSS()}`} onClick={() => showContact()}>Contact Me</p>
         </Fragment>
    );
}

export default NavButtons;