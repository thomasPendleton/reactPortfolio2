import React from 'react'
import './services.css'
import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
          </ul>{' '}
        </article>
        {/* End of UX/UI */}

        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
          </ul>
        </article>
        {/* End of  */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem adipisicing elit. Odit aperiam mollitia.</p>
            </li>
           
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  )
}

export default Services
