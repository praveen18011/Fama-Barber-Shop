import React from 'react'
import '../Scss/Services.scss'
import servicesImage from '../Images/Service photo.jpg'
import haircutImage from '../Images/Haircut photo.png'
import shavingImage from '../Images/Shaving photo.png'
import facialImage from '../Images/Facial photo.png'
import clippercutImage from '../Images/Clippercut photo.png'
import beardImage from '../Images/Beard photo.png'
import moustacheImage from '../Images/Moustache photo.png'

function Services() {
  return (
    <div className='services' id='services'>
        <h1>Our Services</h1>
       <div className="divider"></div>
        <lable>"Costly compared to other barbershops with better haircuts."</lable>
        <div className='services-container'>
          <img className='service-photo' src={servicesImage} alt="Services Image" /> 
            <div className='services-list'>

                <div className='service-item1'>
                  <div>
                    <h2>Haircut</h2>
                    <p>Our skilled barbers provide precision haircuts tailored to your style.</p>
                  </div>
                    <div className='haircut-image'>
                        <img src={haircutImage}/>
                    </div>
                </div>

                <div className='service-item2'>
                    <div className='common'>
                      <h2>Shave</h2>
                      <p>Experience a classic shave with our expert barbers for a smooth finish.</p>
                    </div>
                    <div className='shave-image'>
                        <img src={shavingImage}/>
                    </div>
                </div>

                <div className='service-item3'>
                    <div className='common'>
                      <h2>Facial</h2>
                      <p>Relax and rejuvenate with our soothing facial treatments.</p>
                    </div>
                    <div className='facial-image'>
                        <img src={facialImage}/>
                    </div>
                </div>

                <div className='service-item4'>
                    <div className='common'>
                      <h2>Clipper Cut</h2>
                      <p>Get a clean and stylish look with our clipper cut services.</p>
                    </div>
                    <div className='clippercut-image'>
                        <img src={clippercutImage}/>
                    </div>
                </div>

                <div className='service-item5'>
                    <div>
                       <h2>Beard Trim</h2>
                       <p>Keep your beard looking sharp with our expert trimming services.</p>
                    </div>
                    <div>
                        <img src={beardImage} alt=''/>
                    </div>
                </div>

                <div className='service-item6'>
                    <div>
                       <h2>Moustauche</h2>
                       <p>Enhance your style with our moustache grooming services.</p>
                    </div>
                    <div>
                        <img src={moustacheImage}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services