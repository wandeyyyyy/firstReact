import React, { useState, useEffect } from 'react';
import {Logo} from '../../assets' 
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

    const NavBar = () => {
      const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShow = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(shouldShow);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return(
   <React.Fragment>
   
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <nav className={`navbar navbar-expand-lg ${visible ? 'navbar-show' : 'navbar-hide'}`}>
  <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
  <button class="navbar-toggler navbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faList} size='lg'/>
                </button>



  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Find a doctor</a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#">Apps</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Testimonials</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About us</a>
      </li>
    </ul>
      
  </div>
</nav>
</div>
<div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
</div>

   </React.Fragment>

  )
    }


export default NavBar



