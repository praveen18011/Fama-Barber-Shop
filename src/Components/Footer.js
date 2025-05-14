import React from 'react'
import '../Scss/Footer.scss'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <footer class="footer">
  <div class="footer-nav">
    <a href="#home">HOME</a>
    <a href="#services">SERVICES</a>
    <a href="#about">ABOUT</a>
    <a href="#styles">STYLES</a>
    <a href="#reviews">REVIEWS</a>
    <a href="#contact">CONTACT</a>
    <a href="#appointment">APPOINTMENT</a>
  </div>

  <div class="footer-social">
    <a className='insta' href={FaSquareInstagram}><FaSquareInstagram /></a>
    <a className='facebook' href={FaFacebook}><FaFacebook /></a>
    <a className='x' href={FaXTwitter}><FaXTwitter /></a>
    <a className='youtube' href={IoLogoYoutube}><IoLogoYoutube /></a>
  </div>

  <div class="footer-rights">
    <p>Fama Barbershop ® is a registered Barbershop Team</p>
    <p>Copyright © 2025 FamaBarbershop.com</p>
  </div>
</footer>

  )
}

export default Footer