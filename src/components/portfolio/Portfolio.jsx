import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">

          </div>
          <h3>Portfolio itme title</h3>
          <a href="https://github.com/thomaspendleton" className="btn">
            Github
          </a>
          <a href="https://github.com/thomaspendleton" className="btn btn-primary">
            Live demo
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
