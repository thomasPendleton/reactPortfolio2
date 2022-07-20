import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/proj1.png'
// import IMG2 from '../../assets/proj2.png'
// import IMG3 from '../../assets/proj3.png'
// import IMG4 from '../../assets/'

import { data } from '../../data'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map((item) => {
          const { id, image, title, github, demo } = item
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
