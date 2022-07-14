import React from 'react'
import '../Styles/Project.css'
import ProjectBox from './ProjectBox'
import image1 from '../Images/portfolio-1.jpg'
import image2 from '../Images/portfolio-2.jpg'
import image3 from '../Images/portfolio-3.jpg'
import image4 from '../Images/portfolio-4.jpg'

function Project() {
  return (
    <div className='project component__space'>
        <div className="heading">
            <h1 className='heading'>
                Our Projects
            </h1>
            
            <p className="heading p__color">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
            
            <p className='heading p__color'>
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
        </div>
        <div className="container">
            <div className='row'>
                <div className='col__3'>
                    <ProjectBox  
                        image={image3}
                        heading='Project One'
                        description='This is a very good project'
                    />
                </div>
                <div className='col__3'>
                    <ProjectBox  
                        image={image4}
                        heading='Project Two'
                        description='This is a very good project'
                    />
                </div>
                <div className='col__3'>
                    <ProjectBox  
                        image={image2}
                        heading='Project One'
                        description='This is a very good project'
                    />
                </div>
                <div className='col__3'>
                    <ProjectBox  
                        image={image1}
                        heading='Project One'
                        description='This is a very good project'
                    />
                </div>
                <div className='col__3'>
                    <ProjectBox  
                        image={image4}
                        heading='Project One'
                        description='This is a very good project'
                    />
                </div>
            </div>
            <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                    <a href='/#'><button className='view__more pointer btn'>View More</button></a>
            </div>
        </div>
    </div>
  )
}

export default Project