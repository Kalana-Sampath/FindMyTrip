import React, { useState } from 'react'
import './navbar.css'

// import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import logo from './../../Assets/logo(1).png';


const Navbar = () => {

  const [active, setActive] = useState('navBar')
  // Function to toggle the navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // Function to remove the navbar
  const removceNavbar = () => {
    setActive('navBar')
  }

  return (
    <section className='navbarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href='#' className="logo flex">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" className='smallLogo' />
              <h1 style={{ marginLeft: '10px' }}>FindMyTrip.</h1>
            </div>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className='navLink'>Home</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>About</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>News</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removceNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>

      </header>
    </section>
  )
}

export default Navbar 