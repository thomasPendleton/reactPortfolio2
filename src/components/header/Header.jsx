import React, { useRef, useEffect } from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/profile.png"
import HeaderSocials from "./HeaderSocials"
import { MdDoubleArrow } from "react-icons/md"

const Header = ({ handleIntersections }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: 0.3,
    })
    observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header id="header" ref={headerRef} className="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Thomas Pendleton</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#about" className="scroll_down">
          Scroll Down
          <MdDoubleArrow className="double_arrow_icon" />
        </a>
      </div>
    </header>
  )
}

export default Header
