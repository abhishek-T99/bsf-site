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
                    <a href="#Project">Project</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Staffs">Staffs</a>
                </li>
                <li className="sideNavbar">
                    <a href="#Child">Children</a>
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