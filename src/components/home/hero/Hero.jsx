import React from 'react'
import Heading from '../../common/header/Heading'
import './hero.css'

export default function Hero() {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city'/>
                <form action="" className="flex">
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder='Location' />
                    </div>
                    <div className="box">
                        <span>Proterty Type</span>
                        <input type="text" placeholder='Proterty Type' />
                    </div>
                    <div className="box">
                        <span>Price Range</span>
                        <input type="text" placeholder='Price Range' />
                    </div>
                    <div className="box">
                        <h4>Advance Filter</h4>
                    </div>
                    <button className='btn'>
                        <i class="ri-search-line"></i>
                    </button>
                </form>
            </div>
        </section>
    </>
  )
}
