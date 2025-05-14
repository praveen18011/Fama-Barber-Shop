import React from 'react'
import Header from '../Components/Header'
import Home from '../Components/Home'
import About from '../Components/About'
import Services from '../Components/Services'
import Appointment from '../Components/Appointment'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import Styles from '../Components/Styles'


function Main() {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Testimonials/>
         <Styles/>
        <Contact/>
        <Appointment/>
        <Footer/>
    </div>
  )
}

export default Main