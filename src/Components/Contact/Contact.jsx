import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg";



const Contact = () => {

 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e614a46b-d2c0-4794-a8f5-bd887b34a6ce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
               <img src={theme_pattern} alt="" width={170} />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>abilasha.techie@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91 6382430045</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Pudukkottai, Tamil Nadu, India.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right" >
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor="email"  >Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>
                <label htmlFor="message">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' id="" required></textarea>
                <button type='submit' className="contact-submit" >Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact