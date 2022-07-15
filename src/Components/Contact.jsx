import React from 'react'
import '../Styles/Contact.css'
import contactImg from '../Images/about-9.jpg'

function Contact() {
  return (
    <div className='contact component__space'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact__box'>
                    <div className='contact__meta'>
                        <h1 className='contact__text'>Hire Me.</h1>
                        <p className='contact__text white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi!</p>
                        <p className='contact__text white'><strong>+977 9840196929</strong> or email <strong>timilsina.abhishek55@gmail.com</strong></p>
                    </div>
                    <div className='input__box'>
                        <input type='text' className='contact name' placeholder='Your name *' />
                        <input type='text' className='contact email' placeholder='Your Email *' />
                        <input type='text' className='contact subject' placeholder='Write a subject *' />
                        <textarea name='message' id='message' placeholder='Write your message' />
                        <button className='btn contact pointer' type='submit'>Submit</button>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img className='contact__img' src={contactImg} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Contact