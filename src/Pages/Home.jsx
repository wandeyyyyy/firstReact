import React from 'react';
import './style.css';
import {heroImg} from '../assets' 

const Home = () => {
  return (
   <React.Fragment>
    <section className='first-section'>
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div className="row align">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 hero-section">
        <div className='virt'>
<h2 className='herovirtual'>Virtual healthcare 
for you</h2>
<h6 className='heroPara mt-4'>Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone</h6>
<button className='consult mt-4'>Consult today</button>
</div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
 
      <img src={heroImg} alt="" className='heroImg'/>
      </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div>
</section> 
   </React.Fragment>
  )
}

export default Home