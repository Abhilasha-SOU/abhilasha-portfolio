import React from 'react'
import './Hero.css'

import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='mptydiv'></div>
        
        <h1><span>I'm Abilasha Soundar,</span></h1>
        <p>Dedicated MERN Stack Developer proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB, with strong expertise in responsive design using Tailwind CSS and modern front-end technologies.</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"> <a href=" " download="Abilasha_cv.pdf" target='blank'>My Resume</a>  </div>
        </div>
             
    </div>
  )
}

export default Hero
