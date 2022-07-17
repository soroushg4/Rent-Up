import React from 'react'
import Heading from '../../common/header/Heading'
import { location } from '../../data/Data'
import './location.css'
const Location = () => {
  return (
    <>
        <section className="location padding">
            <div className="container">
                <Heading title='Explore By Location' subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 A omnis incidunt enim molestiae at, nihil eos cumque esse, dolorum eaque et? '/>

                 <div className="content grid3 mtop">
                  {
                    location.map((val , index)=>{
                      return(
                        <div className="box" key={index}>
                          <div className="img">
                            <img src={val.cover} alt="" />
                          </div>
                          <div className="overlay">
                            <h5>{val.name}</h5>

                            <p>
                              <label htmlFor="">{val.Offices}</label>
                              <label htmlFor="">{val.Villas}</label>
                              <label htmlFor="">{val.Apartments}</label>

                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                 </div>
            </div>
        </section>
    </>
  )
}

export default Location