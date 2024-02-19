import React, { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {
  
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rsqyrwc', 'template_1440bth', form.current, 'JO4av2e3x49hiE0_a')
          .then((result) => {
              console.log(result.text);
              alert("Email Sent Succesfully. We will contact you very soon , Thanks")
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>



            <div className="right-j"></div>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type='email' name='user_email' placeholder='Enter Your Email Address' />
             <button type='submit' className='btn btn-j' style={{cursor:'pointer'}}>Join Now</button>
            </form>

        </div>
    )
}

export default Join
