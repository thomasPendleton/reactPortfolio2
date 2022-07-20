import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import {MdDoubleArrow} from 'react-icons/md'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Thomas Pendleton</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#about" className="scroll_down">
          Scroll Down 
          <MdDoubleArrow className='double_arrow_icon'/>
        </a>
      </div>
    </header>
  )
}

export default Header
