import React from 'react'
import '../Scss/Contact.scss'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SlMustache } from "react-icons/sl";

function Contact() {
  return (
    <div id='contact' className='contact-details'>
        <h1>Contact Us</h1>
         <div className="divider"></div>
        <h2>Get in Touch</h2>
        <p>If you have any questions or would like to book an appointment, feel free to reach out to us!</p>
        <div className='contact-container'>
          <div className='contact-left'>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.809352963933!2d-97.12961192524014!3d33.21909396126438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e4261aec1%3A0xb5d271024d7890e2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1747148445740!5m2!1sen!2sin"
               width="500"
               height="450"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

           <div className='contact-right'>
               <h2>Contact Information</h2>
                <div className="divider"></div>
              <div className='contact-info-container'>
                 <div className='contact-info'>
                   <span><FaLocationDot /></span>
                   <p>Location <br/><label>500 N Bell Ave #109, Denton, TX 76209, United States</label></p>
                   <a href="https://www.google.com/maps/place/500+N+Bell+Ave+%23109,+Denton,+TX+76209,+USA/@33.219094,-97.1296119,17z/data=!3m1!4b1!4m6!3m5!1s0x864dca8e4261aec1:0xb5d271024d7890e2!8m2!3d33.2190895!4d-97.127037!16s%2Fg%2F11n023s3cr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D">  <button>Open Googel Map</button></a>
                 </div>

                 <div className='contact-info'>
                   <span><IoCall /></span>
                   <p>Phone<br/><label>+1 940-612-9127</label></p>
                   <a href='tel:+1 940-612-9127'> <button>Call us</button></a>
                 </div>
              </div>
           </div>
        </div>

    </div>
  )
}

export default Contact