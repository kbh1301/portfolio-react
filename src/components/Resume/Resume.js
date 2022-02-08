import { Fragment } from 'react';
import { resume } from '../ResumeInfo';
import './Resume.css'
import PrinterIcon from './printer_icon.svg';

const content = (id) => {
    return(
        <Fragment>
            <span className="r-sec-title">{resume[id].title}</span>
            <ul className="r-sec-list">
                {resume[id].data?.map((data) => {
                    return(
                        <li className="r-subsection">
                            <span className="r-sec-position">{data?.position}</span>
                            <br/>
                            <div className="r-sec-placedate">
                                <span className="r-sec-place">{data?.place}</span>
                                <span className="r-sec-date">{data?.date}</span>
                            </div>
                            <div className="r-sec-overview">{data?.overview}</div>
                            <ul className="r-sec-desc-list">
                                {data?.descs.map((desc) => { return(
                                    <li className="r-sec-desc-list-item">{desc.desc}</li>
                                )})}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
}

const Resume = () => {
    return(
        <div>
            <div className="r-page">
                <div id="r-header">
                    <div id="r-contact">
                        <span id="r-name">Kyle Hulvey</span>
                        <span id="r-title">Software Developer</span>
                    </div>
                    <ul id="r-contact-info">
                        <li>kbh1301.github.io</li>
                        <li>kyle.hulvey@gmail.com</li>
                        <li>(615) 796-0056</li>
                    </ul>
                </div>
                <div id="r-summary">
                    Software developer with proven skills in attention to detail, efficiency, and a high aptitude for learning.
                    Seeking a software development position by leveraging years of dedicated teamwork, fresh experience in the field, and
                    ongoing education in information technology.
                </div>
                <hr className="r-h-line"/>

                <div className="r-content">
                    <div id="r-education">
                        {content(1)}
                    </div>
                    <div id="r-skills">
                        {content(2)}
                    </div>
                    <div id="r-employment">
                        {content(0)}
                    </div>
                </div>
            </div>
            <img className="r-printer" src={PrinterIcon} onClick={() => window.print()} alt="printer icon" />
        </div>
    );
}

export default Resume;