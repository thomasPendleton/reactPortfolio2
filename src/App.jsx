import React, { useState, useRef, useEffect } from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  const [activeNav, setActiveNav] = useState("#header")

  const handleIntersections = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.target.className)
      if (entry.isIntersecting) {
        setActiveNav(`#${entry.target.className}`)
      }
    })
  }
  // console.log(activeNav);

  return (
    <>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header handleIntersections={handleIntersections} />
      <About handleIntersections={handleIntersections} />
      <Experience handleIntersections={handleIntersections} />
      <Portfolio handleIntersections={handleIntersections} />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact handleIntersections={handleIntersections} />
      <Footer />
    </>
  )
}

export default App
