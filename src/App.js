import React, { useState, useRef } from 'react';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';
import AboutContent from './components/Content/AboutContent/AboutContent';
import ResumeContent from './components/Content/ResumeContent/ResumeContent';
import DemosContent from './components/Content/DemosContent/DemosContent';
import HobbiesContent from './components/Content/HobbiesContent/HobbiesContent';
import Footer from './components/Footer/Footer';
import { useInViewport } from './utils/utils';
import './App.css';

const App = () => {
  const contentRef = useRef();
  const [contentTab, setContentTab] = useState('About');

  // all content components
  const contentTabs = {
    'About': <AboutContent setContentTab={setContentTab} />,
    'Resume': <ResumeContent />,
    'Demos': <DemosContent />,
    'Hobbies': <HobbiesContent />,
  }

  const contentTabProps = {contentTab: contentTab, setContentTab: setContentTab, contentTabs: contentTabs};

  const bannerRef = useRef();
  const bannerInView = useInViewport(bannerRef);

  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <div ref={bannerRef}>
          <Banner />
        </div>
        <NavBar bannerInView={bannerInView} contentRef={contentRef} setIsContactVisible={setIsContactVisible} {...contentTabProps} />
      </div>

      <div ref={contentRef}>{contentTabs[contentTab]}</div>

      <Footer />

      {isContactVisible && <ContactForm setIsContactVisible={setIsContactVisible} />}
    </div>
  );
}

export default App;
