import React from 'react'
import '../Styles/StaffBox.css'


function StaffBox({ name, image, testimonial }) {
  return (
    <div className='staffbox pointer'>
      <div className='staff__img__container'>
        <img className='staff__img' src={image} alt="" />
      </div>
      <div className='staff__meta'>
        <h1 className='staff__text'>{name}</h1>
        <p className='p staff__text p__color'>
          {testimonial}
        </p>
      </div>
    </div>
  )
}

export default StaffBox