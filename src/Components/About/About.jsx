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
                <p> <span>Hi, I'm Abilasha </span>— a passionate Python developer focused on building scalable and efficient web applications. I specialize in FastAPI, PostgreSQL, React.js, and TypeScript, with experience in developing RESTful APIs and creating responsive, user-friendly interfaces.</p>
                <p>I enjoy working on real-time projects and am committed to delivering high-quality solutions while continuously enhancing my technical skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"75%"}}/></div>       
<div className="about-skill"><p>FastAPI</p><hr style={{width:"70%"}}/></div>
<div className="about-skill"><p>PostgreSQL</p><hr style={{width:"68%"}}/></div>
<div className="about-skill"><p>React JS</p><hr style={{width:"72%"}}/></div>
<div className="about-skill"><p>TypeScript</p><hr style={{width:"65%"}}/></div>
<div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
<div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"66%"}}/></div>
<div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}}/></div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
