import React from 'react'
import Heading from '../../common/header/Heading'
import './featured.css'
import { FeaturedCard } from './FeaturedCard'
export const Featured = () => {
  return (
    <>
        <section className='featured background'>
            <div className="conatiner">
                <Heading title='Featured property types'subtitle='find All Type of Property. ' />
                <FeaturedCard />
            </div>
        </section>
    </>
  )
}
