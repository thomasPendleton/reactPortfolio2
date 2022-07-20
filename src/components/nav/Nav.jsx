import React, { useState } from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { FaMailBulk } from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav className="navigation">
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaUserGraduate />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <FaMailBulk />
      </a>
    </nav>
  )
}

export default Nav
