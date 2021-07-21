import React, { Fragment } from 'react';
import resumePdf from '../../img/khulveyResume2021.pdf';
import briefcase from '../../img/briefcase.png';
import gradcap from '../../img/graduationcap.png';
import coding from '../../img/coding.png';
import { resume } from '../ResumeContent/ResumeInfo'
import './ResumeContent.css'


const ResumeContent = () => {
    
    const resumeCards = () =>
        resume.map((section, i) => {
            const skillsSection = section?.title === 'Related Skills' ? "flex" : "";
            return ( 
                <article id={section.id} class="pa2 flex flex-column bg-white br4 mv3 mh2 ba bw1 b--black shadow-5 items-center tl">
                    <div className="">
                        <div class="flex justify-center">
                            <img src={cardImg(i)} class="bh3 w3 h3 dib self-center" alt=""/>
                            <h1 class="f2 rcTitle self-center">{section.title}</h1>
                        </div>
                        <hr class="mw4 cusBar bb bw1 b--black-10"/>
                        <ul className={`${skillsSection} list pl3 resumeList`}>
                            {resumePositions(section)}
                        </ul>
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

    const resumePositions = (section) =>
        section.data?.map((data, a) => { 
            const notSkillsSection = section?.title === 'Related Skills' ? "" : "resumeListItem";
            const skillsSection = section?.title === 'Related Skills' ? "mb3 ml3 f3" : "f4";
            return (
                <li className={`pr4 ${notSkillsSection}`}>
                    <p class={`black-70 ma0 b ${skillsSection}`}>{data?.position}</p>
                    <p class="f4 black-70 ma0">{data?.place}</p>
                    <p class="f5 black-70 ma0">{data?.date}</p>
                    <p class="f5 black-60 ma0 i">{data?.overview}</p>
                    <ul className="rcList">
                        { // returns each description property from data's descs array
                            data.descs.map((desc, b) => { return (
                                <li className="tl"><p className="ma0 f5 black-60">{desc.desc}</p></li>
                        )})}
                    </ul>
                </li>
    )})

    return(
        <div className="flex flex-column items-center fadeInContent">
            <a href={resumePdf} target="_blank" title="Contact Me" class="f3 no-underline grow hover-bg-silver dib v-mid bg-blue black ph4 pv3 mb3 mt4 ml2 mr2 br-pill white pointer" >View & download my latest resume</a>
            {resumeCards()}
        </div>
    );
}

export default ResumeContent;