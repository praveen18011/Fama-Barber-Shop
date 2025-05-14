import React from 'react'
import '../Scss/Appointment.scss'

function Appointment() {
  return (
    <div id='appointment' className='appointment'>
      <div className='appointment-container'>
        <h1>Book an Appointment</h1>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="service">Service:</label>
            <select id="service" name="service" required>
                <option value="haircut">Haircut</option>
                <option value="shave">Shave</option>
                <option value="facial">Facial</option>
                <option value="clippercut">Clipper Cut</option>
                <option value="beard">Beard Trim</option>
                <option value="moustache">Moustache Trim</option>
            </select>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />

            <button type="submit">CONFIRM BOOKING</button>
        </form>
      </div>
    </div>
  )
}

export default Appointment