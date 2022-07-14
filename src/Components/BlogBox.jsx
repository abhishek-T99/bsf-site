import React from 'react'
import '../Styles/BlogBox.css'
import blogimg from '../Images/blog-01.jpg'

export default function BlogBox({ image, heading, description }) {
  return (
    <div className='blog__box pointer relative'>
        <div className="blog__box__img pointer relative ">
            <div className="blog__img__box">
                <img className='blog__img' src={image} alt='' /> 
            </div>
            <div className="mask__effect"></div>
        </div>

        <div className="blog__meta absolute">
            <h5 className='blog__text'>{heading}</h5>
            <h4 className='blog__text'>{description}</h4>
            <a href='/#' className='blog blog__btn'>View Details</a>
        </div>
    </div>
  )
}
