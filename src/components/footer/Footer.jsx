
import './footer.css'
import {Logo} from '../../assets'
import React from 'react'

const Footer = () => {
  return (
    <>
        
        <footer className="text-lg-start">
   <div className="container p-4">

    <div className="row">
    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className=" mb-4">
          <img src={Logo} alt="" />
        </h5>

        <h5 className='value'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone</h5>
       
      </div>
    

    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="footHead">Company</h5>

        <ul className="list-unstyled">
          
          <li>
            <a href="#!">About us</a>
          </li>
          <li>
            <a href="#!">Testimonials</a>
          </li>
          <li>
            <a href="#!">Find a doctor</a>
          </li>
          <li>
            <a href="#!">Apps</a>
          </li>
        </ul>
      </div>
    

    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="footHead">Region</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" >Indonesia</a>
          </li>
          <li>
            <a href="#!" >Singapore</a>
          </li>
          <li>
            <a href="#!" >HongKong</a>
          </li>
          <li>
            <a href="#!" >Canada</a>
          </li>
        </ul>
      </div>
   
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="footHead">Help</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" >Help Center</a>
          </li>
          <li>
            <a href="#!" >Contact support</a>
          </li>
          <li>
            <a href="#!" >Instructions</a>
          </li>
          <li>
            <a href="#!" >How it Works</a>
          </li>
        </ul>
      </div>
     
    </div>

  </div>
 

  
  <div className="text-center p-3">
  ©Trafalgar PTY LTD 2020. All rights reserved
  </div>
  
</footer>
    </>
  )
}

export default Footer