import React, { Fragment } from 'react';
import briefcase from '../../img/briefcase.png';
import gradcap from '../../img/graduationcap.png';
import coding from '../../img/coding.png';
import { resume } from '../ResumeContent/ResumeInfo'
import './ResumeContent.css'


const ResumeContent = () => {

    const resumeCards = () =>
        resume.map((section, i) => { return (
            
            <article class="pa2 flex flex-column bg-white br4 mv3 mh2 ba bw1 b--black shadow-5 items-center tl">
                <div className="">
                    <div class="flex justify-center">
                        <img src={cardImg(i)} class="bh3 w3 h3 dib self-center" alt=""/>
                        <h1 class="f2 rcTitle self-center">{resume[i].title}</h1>
                    </div>
                    <hr class="mw4 bb bw1 b--black-10"/>
                    {resumePositions(resume[i].data)}
                    {console.log(resume[i].data)}
                </div>
            </article>
        
        )})

    // returns card's image based on data.id property
    const cardImg = (i) => {
        switch(i) {
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

    const resumePositions = (data) =>
        data?.map((position, a) => { return (
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
        <div className="flex flex-column items-center">
            {resumeCards()}
        </div>
    );
}

export default ResumeContent;