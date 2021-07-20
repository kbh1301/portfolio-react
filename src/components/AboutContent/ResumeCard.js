import React, { Fragment } from 'react';
import briefcase from '../../img/briefcase.png';
import gradcap from '../../img/graduationcap.png';
import coding from '../../img/coding.png';
import './ResumeCard.css'

// render single resume card for about tab
const ResumeCard = ({ id, title, data, resumeScroll }) => {
    
    // returns card's image based on data.id property
    const cardImg = () => {
        switch(id) {
            case 0:
                return briefcase;
            case 1:
                return gradcap;
            case 2:
                return coding;
            default:
                return null;
          }
    }

    // returns each data array's properties
    const resumePositions = () =>
        data.map((position, a) => { return (
            <Fragment>
                <p class="f4 black-70 ma0 b">{data[a]?.position}</p>
                <p class="f4 black-70 ma0">{data[a]?.place}</p>
                <p class="f6 black-70 ma0">{data[a]?.date}</p>
                <p class="f6 black-70 ma0 i">{data[a]?.overview}</p>

                <ul className="rcList">
                    { // returns each description property from data's descs array
                        data[a].descs.map((desc, b) => { return (
                            <li className="tl"><p className="ma0">{data[a]?.descs[b]?.desc}</p></li>
                    )})}
                </ul>
            </Fragment>
    )})

    return(
        <Fragment>
        <article class="resumeCard flex flex-column mw5 bg-white br4 mv3 mh2 ba bw1 b--black shadow-5 items-center" style={{maxWidth: '22rem'}}>
            <div className="relative overflow-hidden">
                <div class="tc">
                    <img src={cardImg()} class="bh3 w4 dib" alt=""/>
                    <h1 class="f4">{title}</h1>
                    <hr class="mw3 bb bw1 b--black-10"/>
                </div>
                {resumePositions()}
                <fade/>
            </div>
            <p class="f4 no-underline grow shadow-hover dib v-mid bg-gray white ph3 pv2 br-pill" onClick={() => resumeScroll(id)}>See More</p>
        </article>
        </Fragment>
    );
}

export default ResumeCard;