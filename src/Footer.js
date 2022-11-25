import React from 'react'
import "./Footer.css"
import logo from "./assets/logo.png"

export const Footer = () => {
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
      <a href="#" class="btn-know">Know More</a>
      </div>
    </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          <p>here are <br/> many variations of passages<br/>of Lorem Ipsum<br/>available</p>
          
         <a href="#">manikmaity.haker2003@gmail.com</a>
          
          <p class = "num">+91-9999999999</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">About</a>
          <a href="#" class="footer-links">Services</a>
          <a href="#" class="footer-links">Galary</a>
          <a href="#" class="footer-links">Contact</a>
        </div>
        
      </div>
      
      
      
      
      <div class="newsletter row">
        <div class="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div class="newsletter-des">
          <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required/>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
          <div class="icons">
            <a href="#"><i class="social-icon ri-facebook-fill"></i></a>
            <a href="#"><i class="social-icon ri-instagram-line"></i></a>
            <a href="#"><i class="social-icon ri-linkedin-fill"></i></a>
            <a href="#"><i class="social-icon ri-github-line"></i></a>
            
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
