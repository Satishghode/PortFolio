import React from 'react'
import './testimonial.css'
import AVTR4 from '../../assets/unknown.jpeg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
    avatar:AVTR4,
    name: 'M**** ******',
    review: '--------------------------------.'
  },
  {
    avatar:AVTR4,
    name: 'S**** W********',
    review: '--------------------------------.'
  },
  {
    avatar:AVTR4,
    name: 'A***** T****** ',
    review: '--------------------------------.'
  },
  {
    avatar:AVTR4,
    name: 'A*** R******',
    review: ' ------------------------------.'
  },
  {
    avatar:AVTR4,
    name: 'S**d** R*******',
    review: '----------------------------------'
  },
]



const Testimonial = () => {
  return (
    <section id='testimonials' >
      <h5>Review from Classmate and Friends </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name ,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial' >
                <div className="client__avatar">
                <img src={avatar}  />
                </div>
                  <h5 className='client__name' >{name}</h5>
                  <small className='client__review'>  {review} </small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonial