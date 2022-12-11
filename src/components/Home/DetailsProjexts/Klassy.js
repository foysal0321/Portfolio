import React, { useEffect } from 'react';
import img1 from  '../../../img/Klassy1.png'
import img2 from  '../../../img/Klassy2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

   
const Klassy = () => {

    useEffect(()=>{
        Aos.init({duration: 900})
    },[]);
    
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://149842030.v2.pressablecdn.com/wp-content/uploads/2020/11/klassy-cafe-restaurant-website-html-template.jpg" className="max-w-sm rounded-lg shadow-2xl" data-aos="fade-zoom-in"/>
            <div className='lg:-mt-52 mx-10'>
            <h1 className="text-2xl font-bold py-4">Klassy</h1>
 
            <p className="mt-10 py-1">. Klassy Cafe is one of the best restaurant templates. Landing Page Website Templates</p>
            <p className='py-1'>. Used Technology : HTML, Css, Bootstrap, Javascript.</p>           
            <div className="codebtn flex py-6">
               <a href="https://foysal0321.github.io/klassy/" target='_blank'>
                <button className='btn btn-xs '>Live Project</button>
                </a> 
               <a href="https://github.com/foysal0321/klassy" target='_blank'>
                <button className='btn btn-xs mx-3'>Client side code</button>
                </a> 
               
            </div>
            </div>
        </div>
        </div>
        <div className="project-img ">
            <h3 className='text-2xl py-3 text-center font-semibold'>Chefs lyout</h3>
                <img src={img1} alt="" data-aos="fade-zoom-in"/>
                <h3 className='text-2xl py-3 text-center font-semibold'>Menu details</h3>
                <img src={img2} alt="" data-aos="fade-zoom-in"/>
            </div>
        </div>
    );
};

export default Klassy;