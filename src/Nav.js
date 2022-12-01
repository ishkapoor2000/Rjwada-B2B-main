import React from 'react'
import "./App.css"
import logo from "./assets/logo.png"
import {useNavigate} from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate();
  const quoteFromLink = 'http://shop.rjwada.com';
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
          <button className='no-border' onClick={()=>navigate("/about")}>About Us</button>
          <button className='border' onClick={() => openInNewTab(quoteFromLink)}>Get Quote</button>
        </div>
      </nav>
    </>
  )
}

export default Nav