import React, { useState, useRef } from 'react';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import NavLinks from './components/NavBar/NavLinks';
import ContactForm from './components/ContactForm/ContactForm';
import ContentRouter from './components/Content/ContentRouter'
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import { contentRoutesNames } from './components/Content/ContentRouter';
import { useInViewport, useReRender } from './utils/utils';
import './App.css';

const App = () => {
  // returns a route name if one is found in the current url
  const path = contentRoutesNames.find(name => window.location.pathname.includes(name))
  // set currentPath state as url path or default to first element in contentRoutes
  const [currentPath, setCurrentPath] = useState(path || contentRoutesNames[0]);

  useReRender(setCurrentPath);

  // ref used for scrolling
  const contentRef = useRef();

  // ref & state to handle if banner is in viewport
  const bannerRef = useRef();
  const bannerInView = useInViewport(bannerRef);

  // state to manage contact form rendering
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    window.location.pathname.includes("/ResumeFile") ? <div ref={bannerRef}><Resume /></div> :
    <div className="App">
      <div className="header">
        <div ref={bannerRef}> <Banner /> </div>
        <NavBar bannerInView={bannerInView}
          navBtns={<NavLinks contentRef={contentRef} setIsContactVisible={setIsContactVisible} currentPath={currentPath} />}
        />
      </div>

      <div ref={contentRef}> <ContentRouter currentPath={currentPath} /> </div>

      <Footer />

      {isContactVisible && <ContactForm setIsContactVisible={setIsContactVisible} />}
    </div>
  );
}

export default App;
