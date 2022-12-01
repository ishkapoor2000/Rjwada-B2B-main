import React from 'react'
import "./Footer.css"
import logo from "./assets/logo.png"

export const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    
    <footer class="footer-sec">
    
    
    <div class="main">
     <div class="logo row">
     <div class="footer-header">
     <img src={logo} class="manik" alt=""/>
     </div>
     <div class="logo-des">
     <p>Rjwada is an augmented reality-based fashion-tech startup at IIT Delhi. At Rjwada, we are reinventing the e-commerce customer experience by providing AR try-ons
         </p>
      <a href="#" class="btn-know" onClick={() => openInNewTab("https://www.linkedin.com/in/rjwada/")}>Know More</a>
      </div>
    </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          <p onClick={() => openInNewTab("https://www.google.co.in/maps/place/Research+and+Innovation+Park+IIT+DELHI+(+RNI+)/@28.5429542,77.1875624,195m/data=!3m1!1e3!4m5!3m4!1s0x0:0x48afdc51e54c8134!8m2!3d28.5433266!4d77.1874941?shorturl=1")}>Research Park<br/> Research and Innovation Park,<br/>IIT Delhi, New Delhi<br/>Delhi - 110016</p>
          
         <a href="#">contact@rjwada.com</a>
          
          <p class = "num">+91-</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links" onClick={() => openInNewTab("https://www.rjwada.com")}>Home</a>
          <a href="#" class="footer-links" onClick={() => openInNewTab("https://www.rjwada.com/about")}>About</a>
        </div>
        
      </div>
      
      
      
      
      <div class="newsletter row">
        <div class="footer-header">
          <h3>Socials</h3>
        </div>
        <div class="newsletter-des">
          {/* <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required/>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div> */}
          <div class="icons">
            <a href="https://www.linkedin.com/in/rjwada/">LinkedIn<i class="social-icon ri-facebook-fill"></i></a>
            <a href="https://www.instagram.com/rjwadalife">Instagram<i class="social-icon ri-instagram-line"></i></a>
            <a href="https://twitter.com/rjwadalife">Twitter<i class="social-icon ri-linkedin-fill"></i></a>
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="copyright">
    <hr/>
    
    <p>© Copyright 2022 Rjwada Pvt. Ltd.</p>
    </div>
  </footer>
  )
}
