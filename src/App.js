import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import LeftPic from './left.png';

class App extends Component {


  render() {

    return (

      <div className="App">
      <div id="home-jump-to"></div>
          <NavBar />
          <Home />
          <div className='sticky-hi'>
            <small id='small-hi'>Hi!</small>
            <img id="left-img" src={LeftPic} alt="" />
            </div>
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
