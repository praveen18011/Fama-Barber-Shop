import React from 'react'
import '../Scss/About.scss'
import aboutImage from '../Images/About photo.jpg'
import { SlMustache } from "react-icons/sl";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
      <div id='about' className='about'> 
        <h1>About Us</h1>
        <div className="divider"></div>
        <label>Fama Barber Shop & Beauty Salon is a premier grooming</label>
        <div className='about-container'>
            <div className='about-left'>
              <p>Welcome to Fama Barber Shop & Beauty Salon, where your look is our passion! We are dedicated to providing top-notch grooming and beauty services that leave you feeling confident and refreshed.</p>
              <p>Our team of skilled professionals is committed to delivering exceptional results, whether you're looking for a classic haircut, a trendy style, or a relaxing spa treatment. We use only the highest quality products and techniques to ensure your satisfaction.</p>
              <p>At Fama Barber Shop & Beauty Salon, we believe that self-care is essential. That's why we strive to create a welcoming and comfortable environment for all our clients. Come visit us and experience the difference!</p>
            </div>

            <div className='about-right'>
                <img src={aboutImage} alt="About Photo" />
            </div>
        </div>
        <a href='#home'><FaArrowUpLong /></a>
      </div>
  )
}

export default About