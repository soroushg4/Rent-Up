import React from 'react'
import { Back } from '../Back'
import Heading from '../common/header/Heading'
import img from '../images/about.jpg'
import immio from '../images/immio.jpg'
import './about.css'
const About = () => {
  return (
    <>
        <section className='about'>
            <Back name='About Us' title='About Us - Who We Are?' cover={img}/>
            <div className="container flex mtop">
                <div className="left row">
                    <Heading title='Our Agency Story' subtitle='Check out our company Story
                    and work process'/>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda numquam ducimus deleniti hic. Perspiciatis vitae suscipit neque, quo dolores nam illum omnis
                        ! Quisquam eum necessitatibus dolor sed? Totam, optio modi.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda numquam ducimus deleniti hic. Perspiciatis vitae suscipit neque, quo dolores nam illum omnis
                        ! Quisquam eum necessitatibus dolor sed? Totam, optio modi.</p>

                        <button className='btn2'> More About Us</button>
                </div>
                <div className="right now">
                  <img src={immio} alt="" />
                </div>
            </div>
        </section>
    </>

  )
}

export default About