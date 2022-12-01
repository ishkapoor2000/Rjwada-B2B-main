import React from 'react'
import main from "./assets/main.png"
import section1 from "./assets/section1_small.png"
import footer1 from "./assets/footer1.png"
import "./App.css"
import {Footer} from "./Footer"
import {useNavigate} from "react-router-dom"

function App() {

  const navigate = useNavigate();
  const shopifyDemoStoreLink = 'http://shop.rjwada.com';
  const threedviewdemo = 'http://shop.rjwada.com';
  const viewardemo = 'http://shop.rjwada.com';
  const quoteFromLink = 'http://shop.rjwada.com';
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>


      <main>
        <div className="main-wrapper">
          <div className="main-img">
            <img src={main} alt="" />
          </div>
          <div className="main-text">
            <h1>STEP INTO EXCITING NEW FUTURE</h1>
            <h4>A free vitual trial room. Something never seen before. Try your favourite cloth with just one click.</h4>
            <button onClick={() => openInNewTab(shopifyDemoStoreLink)}>STEP-IN</button>
          </div>
        </div>
      </main>

      <section className='sec-1'>
        <div className="sec-1-img">
          <img src={section1} alt="" />
        </div>
        <div className="sec-1-text">
          <h2>TRY OUT ALL THE FUTURISTIC FEATURES</h2>
          <h4>A complete new feature for the new you. Be a model of your own. Try as many clothes as you want.</h4>
          <h3>NO TIME CONSTRAINTS!</h3>
          <div className="buttons">
            <button className='try-on' onClick={() => openInNewTab(threedviewdemo)}>3D VIEW</button>
            <button className='ar' onClick={() => openInNewTab(viewardemo)}>VIEW AR</button>
          </div>
        </div>
      </section>

      <section className='sec-2'>
        <h2>Let enter the future from here</h2>
        <h3>Made for future. Made for you. Celebrate the uniqueness with us. Join us to feel it.</h3>
        <form action="">
          {/* <input type="text" name="" id="" placeholder='Enter your Email Address' /> */}
          <button onClick={() => openInNewTab(quoteFromLink)}>Get a Quote</button>
        </form>
        <div className="fun">
          <span className='fun-lg'>Fun Fact</span>
          <h2>40% Increase</h2>
          <p>In conversion rate, when you use AR technology</p>
        </div>
      </section>
      <div className="footer">
        <aside>
          <div className='footer-text'>
            <p><span className="large">Enhancing</span>the overall online shopping experience for customers with out inbuilt technology.</p>
            <p>Lets take a closer look</p>
          </div>
        </aside>
        <h3>AR Technology</h3>
        <div className="imgs">
          <img src={footer1} alt="" />
          {/* <img src={footer2} alt="" /> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App