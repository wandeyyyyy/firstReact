import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/NavBar';
import Footer from './Footer/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';


const Display = () => {
  return (
    <div>
  <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
     </Routes>
     <Footer />
 </BrowserRouter>

    </div>

  )
}

export default Display