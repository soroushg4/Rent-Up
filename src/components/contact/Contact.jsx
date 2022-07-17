import React from 'react'
import { Back } from '../Back'
import img from '../images/pricing.jpg'
import './contact.css'

const Contact = () => {
  return (
    <>
        <section className='contect'>
            <Back name='Contact Us' title='Get Helps & Friendly Support'  cover={img}/>

            <div className="container">
                <form action="" className='shadow-form'>
                    <h4>Fill up The Form</h4>
                    <div className='inp-contact'>
                        <input type="text" placeholder='Name...' />
                        <input type="text" placeholder='Email...' />

                    </div>

                    <input type="text" placeholder='Subject'/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className='btn3 '>Submit Request</button>
                </form>
                
                
            </div> 
        </section>
    </>
  )
}

export default Contact