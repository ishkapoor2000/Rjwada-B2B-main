import './About.css';
import banner from "./assets/cropbanner.png"
import banner_tab from "./assets/banner_tab.png"
import banner_mob from "./assets/banner_mob.png"
import {Card} from "./Card"
import {Footer} from "./Footer"

function About() {
  return (
   <>
 <div class="container">
  <div class="hero_image">
    <picture>
  <source className="banner_image" srcset={banner_mob} type="image/avif" media="(max-width: 660px)" />
  <source className="banner_image" srcset={banner_tab} type="image/webp" media="(max-width: 960px)"/>
  <img className="banner_image" src={banner} alt="photo" />
</picture>
  </div>
  <div class="hero_text"> 
    <h2>About us</h2>
    <p>Rjwada is an augmented reality-based,fashion-tech startup at IIT Delhi.At Rjwada, we are reinventing the e-commerce customer experience by providing AR try-ons.</p>
  </div>
</div>
      
      
      <div className='team_container'>
        <h1 className='title'>meet our team</h1>
        {/* <div className='para'>
        <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante?</p>
        </div> */}
        <div className='cards'>
        <Card/>
        </div>
      </div>
      <Footer/>
     
     

</>
  );
}

export default About;