import React from 'react'
import '../Styles/ProjectBox.css'

function ProjectBox({ image, heading, description }) {
  return (
    <div className='project__box pointer relative'>
        <div className="project__box__img pointer relative ">
            <div className="project__img__box">
                <img className='project__img' src={image} alt='' /> 
            </div>
            <div className="mask__effect"></div>
        </div>
        <div className="project__meta absolute">
            <h5 className='project__text'>{heading}</h5>
            <h4 className='project__text'>{description}</h4>
            <a href='/#' className='project__btn'>View Details</a>
        </div>
    </div>
  )
}

export default ProjectBox