import React from 'react'
import ServiceBox from './ServiceBox'
import '../Styles/Service.css'


function Service() {
  return (
    <div className='service component__space' id='Services'>
        <div className="heading">
            <h1 className='heading'>
                Our Services
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
                    <ServiceBox />
                </div>
                <div className='col__3'>
                    <ServiceBox />
                </div>
                <div className='col__3'>
                    <ServiceBox />
                </div>
                <div className='col__3'>
                    <ServiceBox />
                </div>
                <div className='col__3'>
                    <ServiceBox />
                </div>
                <div className='col__3'>
                    <ServiceBox />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service