import React from 'react';
import ResumeCard from './ResumeCard';
import { resume } from '../../ResumeInfo'
import { timeout } from '../../../utils/utils';

const AboutContent = ({ setContentTab }) => {

    // changes content to resume tab and scrolls to whichever resume section has been clicked from about page
    const resumeScroll = async (id) => {
        setContentTab('Resume');
        await timeout(100);
        const elmtToScrollTo = document.getElementById(id);
        const y = elmtToScrollTo.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    // creates resume card for each object in ResumeInfo.js
    // passes values to ResumeCard.js
    const resumeCards = () =>
        resume.map((section, i) => { return (
            <ResumeCard
                id={resume[i]?.id}
                title={resume[i]?.title}
                data={resume[i]?.data}
                resumeScroll={resumeScroll}
            />
        )})

    return(
        <div className="flex flex-column items-center fadeInContent">
            <article class="mw8 br3 hidden ba b--black-10 mv4 mh2 shadow-3">
                <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">About Me</h1>
                <div class="pa3 bt b--black-10">
                    <p class="f4 f5-m lh-copy">
                    My name is Kyle Hulvey and I'm a software developer!<br/>
                    After a varied workplace background over several years, I decided to go back to school to learn computer programming.
                    I promptly fell in love with the field and rediscovered a strong drive and passion for learning and creativity.
                    My mission is to make an impact in the world of software development by leveraging years of dedicated teamwork, fresh experience in the field,
                    and ongoing education in information technology.
                    </p>
                </div>
            </article>
            <div className="flex flex-wrap justify-center">
                {resumeCards()}
            </div>
        </div>
    );
}

export default AboutContent;