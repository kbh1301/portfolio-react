import React, { Fragment } from 'react';
import briefcase from './../../../img/briefcase.png';
import gradcap from './../../../img/graduationcap.png';
import coding from './../../../img/coding.png';
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
            <Fragment key={a}>
                <p className="f4 black-70 ma0 b">{data[a]?.position}</p>
                <p className="f4 black-70 ma0">{data[a]?.place}</p>
                <p className="f6 black-70 ma0">{data[a]?.date}</p>
                <p className="f6 black-70 ma0 i">{data[a]?.overview}</p>

                <ul className="rcList">
                    { // returns each description property from data's descs array
                        data[a].descs.map((desc, b) => { return (
                            <li key={b} className="tl"><p className="ma0">{data[a]?.descs[b]?.desc}</p></li>
                    )})}
                </ul>
            </Fragment>
    )})

    return(
        <Fragment>
        <article className="resumeCard flex flex-column mw5 bg-white br4 mv3 mh2 ba bw1 b--black shadow-5 items-center" style={{maxWidth: '22rem'}}>
            <div className="relative overflow-hidden">
                <div className="tc">
                    <img src={cardImg()} className="bh3 w4 dib" alt=""/>
                    <h1 className="f4">{title}</h1>
                    <hr className="mw3 bb bw1 b--black-10"/>
                </div>
                {resumePositions()}
                <div className="fade"/>
            </div>
            <p className="f4 no-underline grow shadow-hover dib v-mid bg-gray white ph3 pv2 br-pill" onClick={() => resumeScroll(id)}>See More</p>
        </article>
        </Fragment>
    );
}

export default ResumeCard;