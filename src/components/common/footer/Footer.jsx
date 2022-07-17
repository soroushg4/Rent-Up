import React from 'react'
import './footer.css'
import logolight from '../../images/logo-light.png'
import { footer } from '../../data/Data'
// import {about} from '../../about/About'
// import { BrowserRouter , Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    {/* <BrowserRouter> */}
        <section className='footerContact'>
            <div className="container">
                <div className="send flex">
                    <div className="text">
                        <h1>Do You Have Question ?</h1>
                        <p>WE'll help you to grow your career and growth.</p>
                    </div>
                    

                   <button const path= '/about' className='btn6' style={{color: '#27ae60' , background : '#fff'}}>Contact Us</button>
                    
                    
                </div>
            </div>
                
        </section>

        <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src={logolight}alt="" />
                            <h2>Do You Need Help With Anythinhg?</h2>
                            <p>Recive updates, hot deals , tutorials, discounts sent straignt
                                in your inbox every month
                            </p>

                            <div className="input flex input-sub">
                                <input type="text" placeholder='Email Address' name="" id="" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {
                        footer.map((val , index)=> {
                            return(
                                <div className="box" key={index}>
                                    <h3>{val.title}</h3>
                                    <ul>
                                        {val.text.map((items , index)=>(
                                            <li key={index}>{items.list}</li>
                                        
                                            ))
                                            
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
        </footer>

        <div className="legal">
            <span>© 2021 RentUP. Designd By GorkCoder.</span>
        </div>
        {/* </BrowserRouter> */}
    </>
  )
}

export default Footer