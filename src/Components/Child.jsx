import React from 'react'
import '../Styles/Child.css'
import StaffBox from './StaffBox'
import childImg from '../Images/portfolio-1.jpg'

function Child() {
  return (
    <div className='child component__space' id='Child'> 
        <div className="heading">
            <h1 className='heading'>
                Our Children
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
                        name='Children 1'
                        image={childImg}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
                <div className='col__3'>
                    <StaffBox 
                        name='Children 2'
                        image={childImg}
                        testimonial='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                        dolorem voluptas quasi est adipisci ut eveniet.'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Child