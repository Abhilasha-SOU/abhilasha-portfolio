import React from 'react'
import './Footer.css'
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2>Abhi</h2>
                <p>Aspiring Full Stack Developer with a strong interest in building websites and applications. Looking for opportunities to grow and improve my skills.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' name='email' />
                </div>
                <div className="footer-button">Subscribe</div>
            </div>
        </div>
        <hr  />
        <div className="footer-bottom">
               <div className="footer-bottom-left">
                 <p>&copy; 2025 Abilasha Soundar. All rights reserved.</p>
               </div>
               <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
               </div>
        </div>

    </div>
  )
}

export default Footer