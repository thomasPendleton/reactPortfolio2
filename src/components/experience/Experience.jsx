import React, { useRef, useEffect } from "react"
import "./experience.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Experience = ({ handleIntersections }) => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersections, {
      threshold: .3,
    })
    observer.observe(experienceRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={experienceRef} className="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>
                  Styled <br /> Components
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <IoMdCheckmarkCircleOutline className="experience_details-icon" />
              <div>
                <h4>Postgres</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
