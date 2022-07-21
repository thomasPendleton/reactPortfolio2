import React from 'react'
import './testimonials.css'

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { data } from '../../testimonial_data'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        cssMode={true}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={true}
      >
        {data.map((person, idx) => {
          const { avatar, name, review } = person
          return (
            <SwiperSlide className="testimonial" key={idx}>
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
