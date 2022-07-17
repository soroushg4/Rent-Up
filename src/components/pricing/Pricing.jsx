import React from 'react'
import { Back } from '../Back'
import Price from '../home/price/Price'
import img from '../images/pricing.jpg'

const Pricing = () => {
  return (
    <>
        <section className='pricing mb'>
            <Back name='30 days money back guarantee' title='NO Extra Fees. Friendly Support'  cover={img}/>

            <div className="price container">
                <Price />
            </div>
        </section>
    </>
  )
}

export default Pricing