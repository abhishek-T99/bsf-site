import React from 'react'
import '../Styles/Footer.css'
import footerImg from '../Images/logo (1).png'

function Footer() {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10'>
        <img src={footerImg} alt="" className="footer__img pointer" />
        <span className="copyright">Designed and Created by <strong>Abhishek Timilsina</strong>.</span>
    </div>
  )
}

export default Footer