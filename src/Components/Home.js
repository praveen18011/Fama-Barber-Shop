import React from 'react'
import '../Scss/Home.scss'
import mainImage from '../Images/Home photo.jpg'
import { FaStar } from "react-icons/fa6";
import { MdOutlineDirections } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";


function Home() {
  return (
    <div id='home'>
        <div className='home'>
            <img src={mainImage} alt="Main Image"/>
            <h1>Fama Barber Shop & <br/>Beauty Salon</h1>
            <p>Your look, our passion</p>
            <div className='rating'>
                <FaStar className='star' color='gold' size={20} />
                <FaStar className='star' color='gold' size={20} />
                <FaStar className='star' color='gold' size={20} />
                <FaStar className='star' color='gold' size={20} />
                <FaStar className='star' color='gold' size={20} />
                <span className='home-review'>4.9 (116+ reviews)</span>
            </div>
            <span className='open-closes'>Open <label> ⋅ Closes 7 pm</label></span>
            <a href='#appointment'><button className='book-appointment'>BOOK NOW</button></a>
            <a href='#contact'><button className='contact'>CONTACT</button></a>
            <a href='https://www.google.com/maps/place/500+N+Bell+Ave+%23109,+Denton,+TX+76209,+USA/@33.219094,-97.1296119,17z/data=!3m1!4b1!4m6!3m5!1s0x864dca8e4261aec1:0xb5d271024d7890e2!8m2!3d33.2190895!4d-97.127037!16s%2Fg%2F11n023s3cr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D'><button className='direction'><MdOutlineDirections /></button></a>
            <a href='#about' className='scroll-down'>
                <FaArrowDown className='scroll-arrow'/>
            </a>
        </div>
    </div>
  )
}

export default Home;