import React from 'react'
import './Hero.css'

import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='mptydiv'></div>
        
        <h1><span>I'm Abilasha Soundar,</span></h1>
        <p>Python Developer specializing in FastAPI, PostgreSQL, React.js, and TypeScript, focused on building scalable web applications and delivering high-performance, user-friendly solutions.</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"> <a href=" "  target='blank'>My Resume</a>  </div>
        </div>
             
    </div>
  )
}

export default Hero
