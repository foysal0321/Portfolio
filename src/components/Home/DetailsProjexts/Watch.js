import React, { useEffect } from 'react';
import './Details.css'
import img1 from  '../../../img/Watch-world1.png'
import img2 from  '../../../img/Watch-world2.png'
import img3 from  '../../../img/watch3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Watch = () => {
      useEffect(()=>{
        Aos.init({duration: 900})
    },[])  

    return (
        <div>         
        <div className="hero  bg-base-200" data-aos="fade-zoom-in">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16ce2426214989.5635327aa9987.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className='lg:-mt-52 mx-10'>
            <h1 className="text-2xl font-bold py-4">Watch world</h1>

            <p className="mt-10 py-1">. The website made for products to sell and buy, Seller can add a new product, Admin control.</p>
            <p className='py-1'>. Authentication system used on firebase and Payment gateway</p>
            <p className='py-1'>. Used Technology : React, Tailwind, Firebase Auth, Jwt, Stripe, Node, Express, MongoDB</p>
            <div className="codebtn flex py-6 flex-wrap -ml-3">
               <a href="https://watch-world-f53ee.web.app/" target='_blank'>
                <button className='btn btn-xs m-3'>Live Project</button>
                </a> 
               <a href="https://github.com/foysal0321/Watch-world" target='_blank'>
                <button className='btn btn-xs mx-3 m-3'>Client side code</button>
                </a> 
               <a href="https://github.com/foysal0321/watch-world-server" target='_blank'>
                <button className='btn btn-xs m-3 lg:mx-3 md:mx-3 mx-2  '>Server side code</button>
                </a> 
            </div>
            </div>
        </div>
        </div>

          <div className="project-img">
          <h3 className='text-2xl py-3 text-center font-semibold'>Dashboard lyout</h3>
            <img src={img3} alt="" data-aos="fade-zoom-in"/>
            <h3 className='text-2xl py-3 text-center font-semibold'>Product details</h3>
            <img src={img2} alt="" data-aos="fade-zoom-in"/>
        </div>
        </div>
    );
};

export default Watch;