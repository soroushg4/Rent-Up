import React from 'react'
import { Back } from '../Back'
import Recent from '../home/recent/Recent'
import '../home/recent/recent.css'
import img from '../images/about.jpg'
import './blog.css'

const Blog = () => {
  return (
    <>  
        <section className="blog mb">
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={img}/>

            <div className="recent container padding">
                <Recent />
            </div>
        </section>
    </>
  )
}

export default Blog