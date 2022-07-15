import React from 'react'
import '../Styles/SideNavbar.css'

function SideNavbar() {
    return (
        <div className='sidenavbar'>
            <ul className="sidebar d__flex">
                <li className="sideNavbar">
                    <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                    <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Services">Services</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Project">Portfolio</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Blog">Blog</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar