import React from 'react'
import Heading from '../../common/header/Heading';
import { team } from '../../data/Data';
import './team.css'
const Team = () => {
  return (
    <>
        <section className='team background'>
            <div className="conatiner">
                <Heading title='Our Featured Agernts' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas, 
            optio eum commodi quaerat sapiente dolor un'/>
            </div>

            <div className="content mtop grid3">
                {
                    team.map((val , index)=> {
                        return(
                            <div className="box" key={index}>
                                <button className='btn5'>{val.list} Listings</button>
                                <div className="details">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                    <i class="ri-map-pin-2-fill"></i>
                                    <label htmlFor="">{val.address}</label>
                                    <h4>{val.name}</h4>


                                    <ul>
                                        {val.icon.map((icon , index)=>(
                                                
                                                    <li key={index}>{icon}</li>
                                                
                                        ))
                                        }
                                    </ul>

                                    <div className="button flex">
                                        <button>
                                            <i class="ri-mail-fill"></i>
                                            Message
                                        </button>
                                      <button className='btn4'>
                                            <i class="ri-phone-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Team;