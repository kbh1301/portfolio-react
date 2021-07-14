import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import HomeContent from './components/HomeContent/HomeContent';
import ResumeContent from './components/ResumeContent/ResumeContent';
import DemosContent from './components/DemosContent/DemosContent';
import HobbiesContent from './components/HobbiesContent/HobbiesContent';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.bannerBar = React.createRef();
    this.state = {
      navVisible: false,
      route: 'home'
    }
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
  // handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   const viewportHeight = document.documentElement.clientHeight;
  //   const navVisible = currentScrollPos > viewportHeight;

  //   this.setState({
  //     navVisible
  //   });
  // }

  timeout = (ms) => new Promise( res=> setTimeout(res, ms))

  bannerBarScroll = async (route) => {
    this.bannerBar.current.scrollIntoView({behavior: 'smooth'});
    await this.timeout(100);
    this.setState({route : route});
    
    
  }

  routeSwitch = () => {
    switch(this.state.route) {
      case 'home':
        return <HomeContent bannerBarScroll={this.bannerBarScroll} />;
      case 'resume':
        return <ResumeContent />;
      case 'demos':
        return <DemosContent />;
      case 'hobbies':
        return <HobbiesContent />;
    }
  }

  render() {
    const { navVisible } = this.state;
    return (
      <div className="App">
        <Navigation bannerBarScroll={this.bannerBarScroll} navVisible={navVisible} />
        <Banner bannerBar={this.bannerBar} bannerBarScroll={this.bannerBarScroll} />
        {this.routeSwitch()}
        <Footer />
      </div>
    );
  }
}

export default App;
