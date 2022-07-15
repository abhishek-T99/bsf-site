import React from 'react'
import '../Styles/Header.css'
import logo from '../Images/logo.png'

function Header() {

  //up to top button
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 0)
  })

  //toggle menu

  return (
    <div className='header d__flex align__items__center pxy__30'>
      <div className="logo">
        <img src={logo} alt='logo'></img>
      </div>
      <div className="navigation pxy__30">
        <ul className="navbar d__flex">
          <a href='/#Home'><li className='nav__items mx__15'>Home</li></a>
          <a href='/#About'><li className='nav__items mx__15'>About</li></a>
          <a href='/#Services'><li className='nav__items mx__15'>Services</li></a>
          <a href='/#Project'><li className='nav__items mx__15'>Portfolio</li></a>
          <a href='/#Blog'><li className='nav__items mx__15'>Blog</li></a>
          <a href='/#Contact'><li className='nav__items mx__15'>Contact</li></a>
        </ul>
      </div>
      {/* toggle menu */}
      <div className="toggle__menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-justify white pointer"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Header