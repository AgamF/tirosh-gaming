import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Merch from './components/Merch';
import Teams from './components/Teams';
import HeroSection from './components/HeroSection';
import wallpaper from './images/wallpaper.jpg';
import wallpaper2 from './images/wallpaper2.jpg';
import wallpaper3 from './images/wallpaper3.jpg';
import wallpaper4 from './images/wallpaper4.jpg';
import 'animate.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  getAbout = () => {
    this.setState({route: 'about'});
  }

  getMerch = () => {
    this.setState({route: 'merch'});
  }

  getTeams = () => {
    this.setState({route: 'teams'});
  }

  getWallpapers = () => {
    this.setState({route: 'wallpapers'});
  }

  render() {
    const { route } = this.state;
    if (route === 'home') {
      return (
        <div>
          <Navbar 
          getAbout={this.getAbout}
          getMerch={this.getMerch}
          getTeams={this.getTeams}
          getWallpapers={this.getWallpapers}/>
          <HeroSection />
        </div>
      );
    } else if (route === 'about') {
      return (
        <div>
          <Navbar 
            getAbout={this.getAbout}
            getMerch={this.getMerch}
            getTeams={this.getTeams}
            getWallpapers={this.getWallpapers}
          />
          <About />
        </div>
      );
    } else if (route === 'merch') {
      return (
        <div>
          <Navbar 
          getAbout={this.getAbout}
          getMerch={this.getMerch}
          getTeams={this.getTeams}
          getWallpapers={this.getWallpapers}/>
          <Merch />
        </div>
      );
    } else if (route === 'teams') {
      return (
        <div>
          <Navbar 
          getAbout={this.getAbout}
          getMerch={this.getMerch}
          getTeams={this.getTeams}
          getWallpapers={this.getWallpapers}/>
          <Teams />
        </div>
      );
    } else if (route === 'wallpapers') {
      return (
        <div>
          <Navbar 
          getAbout={this.getAbout}
          getMerch={this.getMerch}
          getTeams={this.getTeams}
          getWallpapers={this.getWallpapers}/>
          <div className='wp-container animate__animated animate__backInUp'>
            <img style={{width: '500px', height: '300px'}} alt='' src={wallpaper}/>
            <img style={{width: '500px', height: '300px'}} alt='' src={wallpaper3}/>
            <img style={{width: '500px', height: '300px'}} alt='' src={wallpaper2}/>
            <img style={{width: '500px', height: '300px'}} alt='' src={wallpaper4}/>
          </div>
        </div>
      );
    }
  }
}

export default App;