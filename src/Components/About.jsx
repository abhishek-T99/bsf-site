import React from 'react'
import '../Styles/About.css'
import aboutImg from '../Images/about.jpg'

function About() {
    //up to top button
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top")
        upToTop.classList.toggle("active", window.scrollY > 0)
    })

    return (
        <div className='about component__space' id='About'>
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
            {/* up to top button */}
            <div className="up__to__top__btn">
                <a href='/#' className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill white" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About
