import React from 'react'
import '../Styles/Staffs.css'
import StaffBox from './StaffBox'

function Staffs() {
  return (
    <div className='staffs component__space' id="Staffs">
        <div className="heading">
            <h1 className='heading'>
                Our Staffs
            </h1>
            
            <p className="heading p__color">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
            
            <p className='heading p__color'>
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col__3'>
                    <StaffBox />
                </div>
                <div className='col__3'>
                    <StaffBox />
                </div>
                <div className='col__3'>
                    <StaffBox />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Staffs