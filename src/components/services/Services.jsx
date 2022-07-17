import React from 'react'
import { Back } from '../Back'
import { Featured } from '../home/featured/Featured'
import '../home/featured/featured.css'
import img from '../images/services.jpg'
const Services = () => {
  return (
    <>
        <section className='services mb'>
            <Back name='Services' title='Services -All Services' cover={img}/>

            <div className="featured container">
                <Featured />
            </div>
        </section>
    </>
  )
}

export default Services