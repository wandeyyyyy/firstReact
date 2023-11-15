import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/NavBar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Api from './Api'


const Display = () => {
  return (
    <div>
  <BrowserRouter>
     <Navbar />
     <Api/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
       
     </Routes>
     
    
 </BrowserRouter>

    </div>

  )
}

export default Display