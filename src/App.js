import React, { useState, useEffect, useRef } from 'react';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/ContactForm';
import AboutContent from './components/AboutContent/AboutContent';
import ResumeContent from './components/ResumeContent/ResumeContent';
import DemosContent from './components/DemosContent/DemosContent';
import HobbiesContent from './components/HobbiesContent/HobbiesContent';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const bannerBar = useRef()
  const [route, setRoute] = useState('about')
  const [isContactVisible, setIsContactVisible] = useState(false)

  const timeout = (ms) => new Promise( res=> setTimeout(res, ms))

  // checks if bannerBar is within viewport
  const useOnScreen = (bannerBar) => {
    const [isIntersecting, setIntersecting] = useState(true) 
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    useEffect(() => {
      observer.observe(bannerBar.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
    return !isIntersecting
  }
  const isNavVisible = useOnScreen(bannerBar)

  // scrolls to bannerBar and changes content via route
  const bannerBarScroll = async (elmt) => {
    if(elmt.target.title){
      bannerBar.current.scrollIntoView({behavior: 'smooth'});
      await timeout(100);
      setRoute(elmt.target.title);
    }
  }

  // changes content to resume tab and scrolls to whichever resume section has been clicked from about page
  const resumeScroll = async (id) => {
    setRoute('resume');
    await timeout(100);
    const yOffset = -80; // navbar dot size
    const elmtToScrollTo = document.getElementById(id);
    const y = elmtToScrollTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  // loads content for current route state
  const routeSwitch = () => {
    switch(route) {
      case 'about':
        return <AboutContent resumeScroll={resumeScroll} />;
      case 'resume':
        return <ResumeContent />;
      case 'demos':
        return <DemosContent />;
      case 'hobbies':
        return <HobbiesContent />;
    }
  }
  
  // controls visibility state for ContactForm modal
  const showContact = () => {   
    setIsContactVisible(true);
  }
  const hideContact = () => {
    setIsContactVisible(false);
  }

  return (
    <div className="App">
      {isNavVisible && <NavBar bannerBarScroll={bannerBarScroll} showContact={showContact} route={route} />}
      <Banner bannerBar={bannerBar} bannerBarScroll={bannerBarScroll} showContact={showContact} route={route} />
      {isContactVisible && <ContactForm hideContact={hideContact} />}
      {routeSwitch()}   
      <Footer />
    </div>
  );
}

export default App;
