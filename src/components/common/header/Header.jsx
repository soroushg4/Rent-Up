import React from 'react'
import './header.css'
import { nav } from '../../data/Data'
import logo from '../../images/logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { useState } from 'react'


export default function Header() {

    const [navList , setNavList] = useState(false)

  return (

    
    <>
    {/* <Router> */}
    
    <header className='Header'>
        <div className="container flex">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav">
                <ul className={navList ? 'small' : 'flex'}>
                    {nav.map((list, index) => (
                            <div key={index}>
                                <li >
                                    <Link className='li-list'  to={list.path}>{list.text}</Link>
                                    
                                </li> 
                            </div>
                         ))} 
                </ul>
            </div>
            <div className="button flex">
                <h4>
                    <span>2</span> My list
                </h4>
                <button className='btn1'>
                    <i className="ri-logout-circle-line"></i> Sign in
                </button>
            </div>
            <div className="toggle">
                <button onClick={() => setNavList(!navList)}>
                    {navList ? <i className="ri-close-line"></i> :
                    <i className="ri-menu-3-line"></i>}
                </button>
            </div>
        </div>
    </header>
    {/* </Router> */}
    </>
  )
}
