import React from 'react'
import '../Styles/About.css'
import aboutImg from '../Images/about.jpg'

function About() {
  return (
    <div className='about component__space'>
        <div className='container'>
            <div className='row'>
                <div className='col__2'>
                    <img className='about__img' src={aboutImg} alt='creator' />
                </div>
                <div className='col__2'>
                    <h1 className='about__heading'>ABOUT ME</h1>
                    <div className='about__meta'>
                        <p className='about__text p__color'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus dignissimos repellendus
                            magni perferendis nesciunt reprehenderit pariatur officiis aut praesentium at eum consequuntur, 
                            necessitatibus facilis eos? Ea aliquid ab quaerat eius ut recusandae at, dolorem explicabo dolore 
                            iusto sunt temporibus excepturi omnis, sapiente magnam praesentium quos. Aspernatur laboriosam
                            perspiciatis enim.
                        </p>
                        <p className='about__text p__color'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus dignissimos repellendus
                            magni perferendis nesciunt reprehenderit pariatur officiis aut praesentium at eum consequuntur, 
                            necessitatibus facilis eos? Ea aliquid ab quaerat eius ut recusandae at, dolorem explicabo dolore 
                            iusto sunt temporibus excepturi omnis, sapiente magnam praesentium quos. Aspernatur laboriosam
                            perspiciatis enim.
                        </p>
                        <p className='about__text p__color'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus dignissimos repellendus
                            magni perferendis nesciunt reprehenderit pariatur officiis aut praesentium at eum consequuntur, 
                            necessitatibus facilis eos? Ea aliquid ab quaerat eius ut recusandae at, dolorem explicabo dolore 
                            iusto sunt temporibus excepturi omnis, sapiente magnam praesentium quos. Aspernatur laboriosam
                            perspiciatis enim.
                        </p>
                        <div className='about__button d__flex align__items__center'>
                            <a href='/#'><button className='about btn pointer'>Download CV</button></a>
                            <a href='/#'><button className='about btn pointer'>Hire Me</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
