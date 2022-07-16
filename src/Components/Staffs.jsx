import React from 'react'
import '../Styles/Staffs.css'
import StaffBox from './StaffBox'
import staffImg1 from '../Images/profile-1.jpeg'


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
                    <StaffBox 
                        name='Staff 1'
                        image={staffImg1}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
                <div className='col__3'>
                    <StaffBox 
                        name='Staff 2'
                        image={staffImg1}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
                <div className='col__3'>
                    <StaffBox 
                        name='Staff 2'
                        image={staffImg1}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
                <div className='col__3'>
                    <StaffBox 
                        name='Staff 4'
                        image={staffImg1}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
                <div className='col__3'>
                    <StaffBox 
                        name='Staff 5'
                        image={staffImg1}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Staffs