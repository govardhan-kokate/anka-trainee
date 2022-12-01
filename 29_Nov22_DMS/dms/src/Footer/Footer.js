import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer=()=>{
return(
  <div className='footer-container'>
  <section className='footer-subscription'>
   <p className='footer-subscription-heading'>
     Are you looking for Doctor?
     Would you like to explore more hospitals?
   </p>

   <div className='input-areas'>
    <form>
        <input className='footer-input' name="email" type="email" placeholder="Your Email"/>
        <button className='footer-btn'>save</button>
    </form>

   </div>
  </section>

  <div className='footer-link-wrapper'>
  {/* <div class='footer-link-items'>
        <h2>Vidios</h2>
        <Link to="/">Submit Vidio</Link>
        <Link to="/">Ambassadors</Link>
        <Link to="/">Agency</Link>
        <Link to="/">Influencer</Link>
  </div>
  <div class='footer-link-items'>
        <h2>Social Media</h2>
        <Link to="/">Linkedin</Link>
        <Link to="/">Youtube</Link>
        <Link to="/">Twitter</Link>
        <Link to="/">Instagram</Link>
  </div> */}
  </div>
  </div>
)
};

export default Footer;
