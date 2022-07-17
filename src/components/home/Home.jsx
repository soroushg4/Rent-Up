import React from 'react'
import Award from './awards/Award'
import { Featured } from './featured/Featured'
import Hero from './hero/Hero'
import Location from './location/Location'
import Price from './price/Price'
import Recent from './recent/Recent'
import Team from './team/Team'

export default function Home() {
  return (
    <>
    <Hero/>
    <Featured />
    <Recent />
    <Award />
    <Location />
    <Team />
    <Price />
    </>
  )
}
