import React from 'react'
import Heading from '../../common/header/Heading'
import RecentCard from './RecentCard'
import './recent.css'
const Recent = () => {
  return (
    <>
        <section className='recent padding'>
            <div className="container">
                <Heading title='Recent Property Listed'  subtitle='Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Nam officiis laborum in omnis ut cupiditate! Ut aut'/>
                 <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Recent