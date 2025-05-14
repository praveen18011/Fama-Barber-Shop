import React, { useState } from 'react';
import shoplogo from '../Images/Shop logo.png';
import '../Scss/Header.scss';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header'>
      <img src={shoplogo} alt="Shop Logo" />

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <a href='#home'><li className='nav-item'>Home</li></a>
          <a href='#about'><li className='nav-item'>About</li></a>
          <a href='#services'><li className='nav-item'>Services</li></a>
          <a href='#testimonials'><li className='nav-item'>Testimonials</li></a>
          <a href='#styles'><li className='nav-item'>Styles</li></a>
          <a href='#contact'><li className='nav-item'>Contact</li></a>
        </ul>
      </nav>

      <a href='#appointment'>
        <button className='appointment-btn'>Book an Appointment</button>
      </a>
    </header>
  );
}

export default Header;

