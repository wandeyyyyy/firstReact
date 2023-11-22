import React, { useEffect } from 'react';
import './style.css';
import {heroImg, hero2, arrow, Man, MySvg} from '../assets' 
import Service from '../components/Service';
import Article from '../components/Article';
import Footer from '../components/Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';






const Home = () => {

  const {ref, inView} = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const animation2 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const animation3 = useAnimation();


  useEffect(() => {
        if (inView) {
          animation.start({
            scale: 1,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            },
          });
        } else {
          animation.start({
          scale: 0.8,
          transition:{
            duration:2,
          }
          });
        }
      }, [inView, animation]);
      useEffect(() => {
        if (inView2) {
          animation2.start({
            scale: 1,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            },
          });
        } else {
          animation2.start({
          scale: 0.8,
          transition:{
            duration:2,
          }
          });
        }
      }, [inView2, animation2]);
      useEffect(() => {
        if (inView3) {
          animation3.start({
            scale: 1,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            },
          });
        } else {
          animation3.start({
          scale: 0.8,
          transition:{
            duration: 2,
          }
          });
        }
      }, [inView3, animation3]);
  return (
 
 
   <React.Fragment>
    <section className='section section1'>
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div className="row align">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 hero-section">
        <div className='virt'>
<h2 className='herovirtual'>Virtual healthcare <br />
for you</h2>
<h6 className='heroPara mt-4'>Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone</h6>
<button className='consult mt-4'>Consult today</button>
</div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
 
      <motion.div
     ref={ref}
     animate={animation}
     initial={{ scale: 0.8}} 

><img src={heroImg} alt="" className='heroImg'/>
</motion.div>
      </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div>
</section> 
<section className='section othersection'>
<div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div>
        <h2 className='text-center herovirtual'>Our services</h2>
        <div className="line"></div>
        <h6 className='text-center heroPara mt-4'>
        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment  <br />with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </h6>
        <div className='row service'>
<Service/>
        </div>
        <div className='text-center'>
        <button className='learnBtn'>Learn more</button>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div> 

    
</section>
<section className='section othersection'>
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div className="row align align1">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 hero-section">
      <motion.div
     ref={ref2}
     animate={animation2}
     initial={{ scale:0.7}} 

>
      <img src={hero2} alt="" className='heroImg'/>
      </motion.div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className='virt offset-xl-2'>
<h3 className='herovirtual'>Leading healthcare <br /> providers</h3>
<div className="line liner"></div>
<h6 className='heroPara mt-4'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</h6>
<button className='learnBtn mt-4'>Learn More</button>
</div>
     
      </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div>
</section>
<section className='section othersection'>
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div className="row align">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 hero-section">
        <div className='virt'>
<h2 className='herovirtual'>Download our <br />
mobile apps</h2>
<div className="line liner"></div>
<h6 className='heroPara mt-4'>Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely</h6>
<button className='learnBtn mt-4'>Download <img src={arrow} alt="" className='ml-2 mb-1'/></button>
</div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <motion.div
     ref={ref3}
     animate={animation3}
     initial={{ scale:0.7}} 

>
      <img src={heroImg} alt="" className='heroImg'/>
      </motion.div>
      </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div>
</section> 

  <Carousel className='slideee' showThumbs={false} autoPlay infiniteLoop interval={5000} showArrows={false} showStatus={false}>
 
<div className='slides'>
  <div className='say'>
  <h2 className='text-center'>What our customers are saying</h2>
 <div className="line bg-white"></div>
 </div>
<div className="row mt-3">
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='d-flex align-items-center justify-content-center d-d'>
    <img src={Man} alt="" className='man-man'/>
    <div className='founder'>
      <h5 className='edward'>Edward Newgate</h5>
      <h6 className='circle'>Founder Circle</h6>
    </div>
  </div>
</div>
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='slidePara'>
    <p>“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</p>
  </div>
</div>
</div>
</div>
<div className='slides'>
  <div className='say'>
  <h2 className='text-center'>What our customers are saying</h2>
 <div className="line bg-white"></div>
 </div>
<div className="row mt-3">
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='d-flex align-items-center justify-content-center d-d'>
    <img src={Man} alt="" className='man-man'/>
    <div className='founder'>
      <h5 className='edward'>Edward Newgate</h5>
      <h6 className='circle'>Founder Circle</h6>
    </div>
  </div>
</div>
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='slidePara'>
    <p>“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</p>
  </div>
</div>
</div>
</div>
<div className='slides'>
  <div className='say'>
  <h2 className='text-center'>What our customers are saying</h2>
 <div className="line bg-white"></div>
 </div>
<div className="row mt-3">
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='d-flex align-items-center justify-content-center d-d'>
    <img src={Man} alt="" className='man-man'/>
    <div className='founder'>
      <h5 className='edward'>Edward Newgate</h5>
      <h6 className='circle'>Founder Circle</h6>
    </div>
  </div>
</div>
<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div className='slidePara'>
    <p>“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</p>
  </div>
</div>
</div>
</div>


  
   
  </Carousel>
  {/* <img src={MySvg} alt="" /> */}
<section className='section othersection'>
<div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
      <div>
        <h2 className='text-center herovirtual'>Check out our latest article</h2>
        <div className="line"></div>
        <div className='row service'>
<Article/>
        </div>
        <div className='text-center'>
        <button className='learnBtn'>Learn more</button>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
    </div> 

    
</section>
<Footer/>
   </React.Fragment>
  )
}

export default Home