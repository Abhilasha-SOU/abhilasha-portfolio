import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";




const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" width={170}/>
      </div>
      <div className="about-section">
       
        <div className="about-right">
            <div className="about-para">
                <p> <span>Hi, I'm Abilasha </span>— a passionate MERN stack developer dedicated to building scalable and efficient web applications. I specialize in MongoDB, Express.js, React, Node.js, JavaScript, HTML, and CSS, with strong skills in UI/UX design, responsive layouts, and performance optimization.</p>
                <p>I am focused on delivering high-quality solutions and contributing to impactful projects, while continuously advancing my expertise.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>       
                <div className="about-skill"><p>Java Script</p><hr style={{width:"53%"}}/></div>
                <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"62%"}}/></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"49%"}}/></div>
                <div className="about-skill"><p>Express JS</p><hr style={{width:"55%"}}/></div>
                 <div className="about-skill"><p>React JS</p><hr style={{width:"64%"}}/></div>
                  <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
