import React, { useEffect, useRef } from "react"
import "./About.css"
import ME from "../../assets/20210617_105607.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { BiCabinet } from "react-icons/bi"

const About = ({ handleIntersections }) => {
  const aboutRef = useRef(null)
 
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: 0.3,
    })
    observer.observe(aboutRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years Working and Learning</small>
            </article>
            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>50+ worldwide</small>
            </article> */}
            <article className="about_card">
              <BiCabinet className="about_icon" />
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
          </div>
          {/* <p>
            Seeking to become your next Web developer. As an Automotive Master
            Technician, with over 15 years experience, I plan to leverage my communication,
            determination, and problem solving skills to build your next project.
            
          </p> */}

          <p>
            Seeking a position as Software Engineer in a professional setting
            that will enable me to learn new skills and have the ability to
            utilize the ones I have acquired through my education and work
            experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
