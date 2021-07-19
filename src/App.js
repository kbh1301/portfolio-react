import React, { useState, useEffect, useRef } from 'react';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import ContactForm from './components/ContactForm/ContactForm';
import HomeContent from './components/HomeContent/HomeContent';
import ResumeContent from './components/ResumeContent/ResumeContent';
import DemosContent from './components/DemosContent/DemosContent';
import HobbiesContent from './components/HobbiesContent/HobbiesContent';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const bannerBar = useRef()
  const [route, setRoute] = useState('home')
  const [isContactVisible, setIsContactVisible] = useState(false) 

  const timeout = (ms) => new Promise( res=> setTimeout(res, ms))

  const useOnScreen = (bannerBar) => {
    const [isIntersecting, setIntersecting] = useState(false) 
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    useEffect(() => {
      observer.observe(bannerBar.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
    return isIntersecting
  }
  const isNavVisible = useOnScreen(bannerBar)

  const bannerBarScroll = async (route) => {
    bannerBar.current.scrollIntoView({behavior: 'smooth'});
    await timeout(100);
    setRoute(route);
  }

  const resumeScroll = async (id) => {
    setRoute('resume');
    await timeout(100);
    const yOffset = -80; // navbar dot size
    const elmtToScrollTo = document.getElementById(id);
    const y = elmtToScrollTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  const routeSwitch = () => {
    switch(route) {
      case 'home':
        return <HomeContent resumeScroll={resumeScroll} />;
      case 'resume':
        return <ResumeContent />;
      case 'demos':
        return <DemosContent />;
      case 'hobbies':
        return <HobbiesContent />;
    }
  }
  
  const showContact = () => {   
    setIsContactVisible(true);
  }
  const hideContact = () => {
    setIsContactVisible(false)
  }

  return (
    <div className="App">
      {!isNavVisible && <Navigation bannerBarScroll={bannerBarScroll} showContact={showContact} />}
      <Banner bannerBar={bannerBar} bannerBarScroll={bannerBarScroll} showContact={showContact} />
      {isContactVisible && <ContactForm hideContact={hideContact} />}
      {routeSwitch()}   
      <Footer />
    </div>
  );
}

export default App;
