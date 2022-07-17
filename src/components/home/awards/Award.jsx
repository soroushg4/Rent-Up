import React from 'react'
import Heading from '../../common/header/Heading'
import { awards } from '../../data/Data'
import './award.css'
const Award = () => {
  return (
    <>
        <section className='award padding'>
            <div className="container">
                <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services'
                subtitle='Our Award' />

                <div className="content grid4">
                    {awards.map((val,index)=>{
                        return (
                        <div className="box" key={index}>
                            <div className="icon">
                                <span>{val.icon}</span>
                            </div>
                            <h1>{val.num}</h1>
                            <p>{val.name}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Award