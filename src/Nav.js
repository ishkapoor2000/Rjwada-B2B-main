import React from 'react'
import "./App.css"
import logo from "./assets/logo.png"

const Nav = () => {
  return (
    <>
        <nav>
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          {/* <div className="search">
            <input type="text" placeholder='Search Rjwada' />
          </div> */}
          <button className='no-border'>About Us</button>
          <button className='border'>Get Quote</button>
        </div>
      </nav>
    </>
  )
}

export default Nav